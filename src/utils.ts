import { type ComboError, type GenericObject, isNodeError } from "./types.js";

// Constants
const PROCESS_ROOT = process.cwd();
const WORD_SEPARATORS = /[\s_-]+/;

// String manipulation utilities
export const pascalCase = (original: string): string => {
  if (!original) {
    return "";
  }
  return original.split(WORD_SEPARATORS).map(capitalizeFirstChar).join("");
};
const capitalizeFirstChar = (original: string): string => {
  if (!original) {
    return "";
  }
  return original.charAt(0).toUpperCase() + original.slice(1).toLowerCase();
};

export const upperCaseFirstChar = (original: string): string => {
  if (!original) {
    return "";
  }
  return original.charAt(0).toUpperCase() + original.slice(1);
};

export const lowerCaseFirstChar = (original: string): string => {
  if (!original) {
    return "";
  }
  return original.charAt(0).toLowerCase() + original.slice(1);
};

// Object utilities
export const addAdditionalProperties = (
  target: GenericObject,
  source: GenericObject,
): void => {
  const sourceEntries = Object.entries(source);
  const missingEntries = sourceEntries.filter(([key]) => !(key in target));
  const missingProperties = Object.fromEntries(missingEntries);
  Object.assign(target, missingProperties);
};

// Error handling utilities
const getErrorTag = (error: GenericObject): string => {
  if (isNodeError(error) && error.code) {
    return error.code;
  }
  return error instanceof Error ? error.name : "Error";
};
const getErrorMessage = (error: GenericObject): string => {
  if (error instanceof Error) {
    return error.message;
  }
  if (typeof error === "object" && "message" in error) {
    if (typeof error["message"] === "object") {
      return JSON.stringify(error["message"]);
    } else {
      return String(error["message"]);
    }
  } else {
    return JSON.stringify(error);
  }
};
const processStackTrace = (stack: string): string[] => {
  return stack
    .split("\n")
    .slice(1) // Remove first line (error message)
    .map((line) =>
      line
        .trim()
        .replace(/^at\s+/, "") // Remove 'at ' prefix
        .replace(PROCESS_ROOT, "$ROOT"),
    );
};

// Error serialization utility
export const serializeError = (
  error: GenericObject,
  omitStack = false,
): GenericObject => {
  const tag = getErrorTag(error);
  const message = getErrorMessage(error);
  const serialized: GenericObject = {
    message: `[${tag}] ${message}`,
  };
  if (!omitStack) {
    const stack = (error as ComboError).stack ?? "";
    serialized["stack"] = processStackTrace(stack);
  }
  // Add additional properties from the original error
  addAdditionalProperties(serialized, error);
  return serialized;
};
