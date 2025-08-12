import {
  codesByIdentifier,
  identifierByCodes,
  messagesByCodes,
  phrasesByCodes,
} from "./statuses.js";
import {
  addAdditionalProperties,
  type GenericObject,
  serializeError,
  upperCaseFirstChar,
} from "./utils.js";

export class HttpError extends Error {
  static standardErrorPrefix = "HTTP_ERROR_";
  status: number;
  statusCode: number; // This always mirrors status
  statusClass: number;
  code: string;
  error: string;
  errorPhrase: string;
  expose: boolean;
  headers: Record<string, string>;
  isClientError: boolean;
  isServerError: boolean;
  [key: string]: unknown;

  constructor(
    status: number | string,
    message?: string | GenericObject,
    properties?: GenericObject,
  ) {
    const isMessageGenericObject = (
      msg: typeof message,
    ): msg is GenericObject => {
      return typeof msg === "object" && !Array.isArray(msg);
    };
    // Normalize arguments if message is an object
    if (isMessageGenericObject(message)) {
      properties = message;
      message =
        typeof properties.message === "string" ? properties.message : "";
    }
    properties = properties ?? {};
    // Extract special properties for Error constructor
    let errorOptions: ErrorOptions;
    if (properties instanceof Error) {
      errorOptions = properties.cause ? { cause: properties.cause } : {};
    } else {
      errorOptions =
        "cause" in properties ? { cause: properties["cause"] } : {};
    }
    // Create the error
    super(message ?? "", errorOptions);
    // Resolve status when string
    const resolvedStatus = this.#resolveStatus(status);
    const validStatus = this.#validateStatus(resolvedStatus);
    // Assign and configure properties
    this.status = validStatus;
    this.statusCode = validStatus;
    this.isClientError = this.status < 500;
    this.isServerError = !this.isClientError;
    this.statusClass = this.isClientError ? 400 : 500;
    this.errorPhrase = phrasesByCodes[this.status] ?? "";
    this.error = messagesByCodes[this.status] ?? "";
    // properties is of type Error
    if (properties instanceof Error) {
      this.code = this.#generateErrorCode(this.status);
      this.headers = {};
      this.stack = properties.stack ?? "";
      this.expose = false;
    } else {
      // properties is of type GenericObject w/o Error types
      if (typeof properties["code"] === "string") {
        this.code = properties["code"];
      } else {
        this.code = this.#generateErrorCode(this.status);
      }
      if (
        properties["headers"] &&
        typeof properties["headers"] === "object" &&
        !Array.isArray(properties["headers"]) &&
        !(properties["headers"] instanceof Error)
      ) {
        this.headers = properties["headers"];
      } else {
        this.headers = {};
      }
      if (typeof properties["stack"] === "string") {
        this.stack = properties["stack"];
      } else {
        this.stack = "";
      }
      // This is needed to ensure http-errors isHttpError detects duck typing correctly
      if ("expose" in properties) {
        if (typeof properties["expose"] === "boolean") {
          this.expose = properties["expose"];
        } else {
          this.expose = false;
        }
      } else {
        this.expose = this.isClientError;
      }
    }
    // Assign additional properties
    addAdditionalProperties(this, properties);
    Object.defineProperties(this, {
      status: {
        enumerable: false,
      },
      code: {
        enumerable: !this.code.startsWith(HttpError.standardErrorPrefix),
      },
      errorPhrase: {
        enumerable: false,
      },
      headers: {
        enumerable: false,
      },
      name: {
        enumerable: false,
        value: "HttpError",
        writable: true,
      },
      isClientError: {
        enumerable: false,
      },
      isServerError: {
        enumerable: false,
      },
      statusClass: {
        enumerable: false,
      },
      expose: {
        enumerable: false,
      },
    });
  }
  #resolveStatus(status: number | string): number {
    if (typeof status === "string") {
      const upperCaseStatus = upperCaseFirstChar(status);
      const resolvedCode = codesByIdentifier[upperCaseStatus];
      return resolvedCode ?? 500;
    }
    return status;
  }
  #validateStatus(status: number): number {
    return status >= 400 && status <= 599 ? status : 500;
  }
  #generateErrorCode(status: number): string {
    const statusStr = status.toString();
    const httpDetail = identifierByCodes[statusStr] ?? statusStr;
    return `${HttpError.standardErrorPrefix}${httpDetail
      .split("")
      .map((char, idx, arr) => {
        const prevChar = arr[idx - 1] ?? "";
        return /[a-z]/.test(prevChar) && /[A-Z]/.test(char) ? `_${char}` : char;
      })
      .join("")
      .toUpperCase()}`;
  }
  serialize(extended = false, omitStack = false): GenericObject {
    if (!extended) {
      return {
        statusCode: this.statusCode,
        error: this.error,
        message: this.message,
      };
    }
    const serializedErr = serializeError(this, omitStack);
    const serializedObj = Object.assign(serializedErr, {
      message: this.message,
    });
    return serializedObj;
  }
}

export const createError = (
  status: number | string,
  message?: string | GenericObject,
  properties?: GenericObject,
): HttpError => {
  return new HttpError(status, message, properties);
};

export const isHttpError = (error: unknown): error is HttpError => {
  if (!error) {
    return false;
  }
  if (typeof error !== "object" || Array.isArray(error)) {
    return false;
  }
  if (error instanceof HttpError) {
    return true;
  }
  if ("status" in error && "statusCode" in error && "expose" in error) {
    return (
      typeof error.status === "number" &&
      error.status === error.statusCode &&
      typeof error.expose === "boolean"
    );
  }
  return false;
};
