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
  | NodeError;

type NodeError = Error | NodeJS.ErrnoException;

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

export const serializeError = (
  error: GenericObject,
  omitStack = false,
): GenericObject => {
  const nodeError = error as NodeJS.ErrnoException;
  const regularError = error as Error;
  const tag = (nodeError.code ?? regularError.name) || "Error";
  const serialized: GenericObject = {
    message: `[${tag}] ${regularError.message}`,
  };
  if (!omitStack) {
    const stack = regularError.stack ?? "";
    serialized["stack"] = stack
      .split("\n")
      .slice(1) // Remove first line (error message)
      .map(
        (line) =>
          line
            .trim()
            .replace(/^at\s+/, "") // Remove "at" prefix
            .replace(PROCESS_ROOT, "$ROOT"), // Replace absolute path with placeholder
      );
  }
  // Add additional properties from the original error
  addAdditionalProperties(serialized, error);
  return serialized;
};
