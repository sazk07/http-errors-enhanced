import { strict as assert } from "node:assert";
import { test } from "node:test";
import { addAdditionalProperties, serializeError } from "../src/index.js";
import {
  lowerCaseFirstChar,
  pascalCase,
  upperCaseFirstChar,
  type GenericObject,
} from "../src/utils.js";

function verifySerialization(
  actual: GenericObject,
  expected: GenericObject,
): void {
  const actualStack = actual.stack as string[];
  const expectedStack = expected.stack as RegExp[];
  assert.deepStrictEqual(
    Object.keys(actual).sort(),
    Object.keys(expected).sort(),
  );
  for (const [k, v] of Object.entries(expected)) {
    if (k in actual) {
      if (k === "stack") {
        const firstElemOfActualStack = actualStack[0] ?? "";
        const firstElemOfExpectedStack = expectedStack[0] ?? [];
        assert(
          firstElemOfActualStack.match(firstElemOfExpectedStack as RegExp),
        );
      } else {
        assert.deepStrictEqual(actual[k as keyof typeof actual], v);
      }
    } else {
      assert.fail(`Expected ${k} to be present in serialized object`);
    }
  }
  for (const elem of expectedStack) {
    assert(actualStack.find((s) => s.match(elem)));
  }
}

void test("pascalCase", () => {
  assert.deepStrictEqual(pascalCase("a BcD EfG"), "ABcdEfg");
});

void test("lowerFirst", () => {
  assert.deepStrictEqual(lowerCaseFirstChar("a BcD EfG"), "a BcD EfG");
});

void test("upperFirst", () => {
  assert.deepStrictEqual(upperCaseFirstChar("a BcD EfG"), "A BcD EfG");
});

void test("serializeError", () => {
  class FooError extends Error {
    constructor(message: string) {
      super(message);
      this.name = "FooError";
    }
  }

  const errorWithCode = new Error("MESSAGE");
  const errorWithName = new Error("MESSAGE");
  const fooError = new FooError("MESSAGE");
  const regularError = new Error("MESSAGE");
  const obj = { message: "MESSAGE", stack: errorWithCode.stack };

  addAdditionalProperties(errorWithCode, { code: "CODE", additional: 1 });
  addAdditionalProperties(errorWithName, { message: "ANOTHER-MESSAGE" });
  errorWithName.name = "NAME";

  verifySerialization(serializeError(errorWithCode), {
    code: "CODE",
    message: "[CODE] MESSAGE",
    stack: [
      /^TestContext\.<anonymous> \((?:file:\/\/)?\$ROOT\/test\/utils\.test\.ts:\d+:\d+\)$/,
    ],
    additional: 1,
  });

  verifySerialization(serializeError(errorWithName), {
    name: "NAME",
    message: "[NAME] MESSAGE",
    stack: [
      /^TestContext\.<anonymous> \((?:file:\/\/)?\$ROOT\/test\/utils\.test\.ts:\d+:\d+\)$/,
    ],
  });

  verifySerialization(serializeError(fooError), {
    name: "FooError",
    message: "[FooError] MESSAGE",
    stack: [],
  });

  verifySerialization(serializeError(regularError), {
    message: "[Error] MESSAGE",
    stack: [
      /^TestContext\.<anonymous> \((?:file:\/\/)?\$ROOT\/test\/utils\.test\.ts:\d+:\d+\)$/,
    ],
  });

  verifySerialization(serializeError(obj as Error), {
    message: "[Error] MESSAGE",
    stack: [
      /^TestContext\.<anonymous> \((?:file:\/\/)?\$ROOT\/test\/utils\.test\.ts:\d+:\d+\)$/,
    ],
  });

  verifySerialization(serializeError(obj as Error, false), {
    message: "[Error] MESSAGE",
    stack: [],
  });
});
