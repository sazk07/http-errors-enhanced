// Type definitions
export type GenericObject =
  | Record<
      string,
      | string
      | number
      | boolean
      | string[]
      | Record<string, string>
      | RegExp[]
      | Error
    >
  | ComboError;

export type ComboError = Error | NodeJS.ErrnoException;

// Type Guards
export const isNodeError = (error: unknown): error is NodeJS.ErrnoException => {
  return error instanceof Error && "code" in error;
};

export const isMessageGenericObject = (
  msg: string | GenericObject,
): msg is GenericObject => {
  return typeof msg === "object" && !Array.isArray(msg);
};

export const isHeadersObject = (
  headers: unknown,
): headers is Record<string, string> => {
  return (
    headers !== null &&
    headers !== undefined &&
    typeof headers === "object" &&
    !Array.isArray(headers) &&
    !(headers instanceof Error)
  );
};
