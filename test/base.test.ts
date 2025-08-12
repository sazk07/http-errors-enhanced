import createHttpError from "http-errors";
import { strict as assert } from "node:assert";
import { test } from "node:test";
import { HttpError, createError, isHttpError } from "../src/index.js";

void test("HttpError", async () => {
  await test("it should create a basic error", () => {
    const error = new HttpError(404, "WHATEVER", { key1: "value1" });
    const otherError = new HttpError(570, "WHATEVER", { key1: "value1" });

    assert(error instanceof HttpError);
    assert(error instanceof Error);
    assert.deepStrictEqual(error.message, "WHATEVER");
    assert.deepStrictEqual(error["key1"], "value1");
    assert.deepStrictEqual(error.name, "HttpError");
    assert.deepStrictEqual(error.code, "HTTP_ERROR_NOT_FOUND");
    assert(otherError instanceof HttpError);
    assert.deepStrictEqual(otherError.code, "HTTP_ERROR_570");
  });

  await test("it should support cause", () => {
    const cause = new Error("WHATEVER");
    const error = new HttpError(404, "WHATEVER", { key1: "value1", cause });
    assert(error instanceof HttpError);
    assert.deepStrictEqual(error.message, "WHATEVER");
    assert.deepStrictEqual(error["key1"], "value1");
    assert.deepStrictEqual(error.name, "HttpError");
    assert.deepStrictEqual(error.code, "HTTP_ERROR_NOT_FOUND");
    assert.deepStrictEqual(error.cause, cause);
  });

  await test("it should assign derived properties", () => {
    const clientError = new HttpError(404, "WHATEVER", {
      key1: "value1",
      headers: { a: "b" },
    });
    const serverError = new HttpError(502, "WHATEVER", {
      key1: "value1",
      headers: { c: "d" },
    });
    const otherError = new HttpError(502, "WHATEVER", { expose: true });
    assert.deepStrictEqual(clientError.status, 404);
    assert.deepStrictEqual(clientError.statusCode, 404);
    assert.deepStrictEqual(clientError.error, "Not Found");
    assert.deepStrictEqual(clientError.errorPhrase, "Not found.");
    assert(clientError.isClientError);
    assert(!clientError.isServerError);
    assert.deepStrictEqual(clientError.statusClass, 400);
    assert(clientError.expose);
    assert.deepStrictEqual(clientError.headers, { a: "b" });
    assert.deepStrictEqual(serverError.status, 502);
    assert.deepStrictEqual(serverError.statusCode, 502);
    assert.deepStrictEqual(serverError.error, "Bad Gateway");
    assert.deepStrictEqual(serverError.errorPhrase, "Bad gateway.");
    assert(!serverError.isClientError);
    assert(serverError.isServerError);
    assert.deepStrictEqual(serverError.statusClass, 500);
    assert(!serverError.expose);
    assert.deepStrictEqual(serverError.headers, { c: "d" });
    assert(otherError.expose);
    assert.deepStrictEqual(otherError.headers, {});
  });

  await test("it should accept multiple invocations styles", () => {
    const error = new HttpError("NotFound", {
      code: "CODE",
      message: "WHATEVER",
      key1: "value1",
    });
    assert.deepStrictEqual(error.status, 404);
    assert.deepStrictEqual(error.code, "CODE");
    assert.deepStrictEqual(error.message, "WHATEVER");
    assert.deepStrictEqual(error["key1"], "value1");
  });

  await test("it constrain number and expose to the expected format", () => {
    assert.deepStrictEqual(new HttpError(200).status, 500);
    assert.deepStrictEqual(new HttpError(800).status, 500);
    assert.deepStrictEqual(new HttpError("OTHER").status, 500);
    assert(!new HttpError(200, { expose: "NO" }).expose);
  });

  await test(".serialize should correctly serialize the error", () => {
    const error = new HttpError(404, "WHATEVER", { key1: "value1" });
    error.stack = "1\n2";
    assert.deepStrictEqual(error.serialize(), {
      statusCode: 404,
      error: "Not Found",
      message: "WHATEVER",
    });
    assert.deepStrictEqual(error.serialize(true), {
      statusCode: 404,
      error: "Not Found",
      message: "WHATEVER",
      key1: "value1",
      stack: ["2"],
    });
    assert.deepStrictEqual(error.serialize(true, true), {
      statusCode: 404,
      error: "Not Found",
      message: "WHATEVER",
      key1: "value1",
    });
  });
});

void test("createError", async () => {
  await test("it should create an error", () => {
    const error = createError(404, "WHATEVER", { key1: "value1" });
    const otherError = createError(404, "WHATEVER", { key: "ignored" });
    assert(error instanceof HttpError);
    assert(error instanceof Error);
    assert.deepStrictEqual(error.message, "WHATEVER");
    assert.deepStrictEqual(error["key1"], "value1");
    assert(otherError instanceof HttpError);
    assert(otherError instanceof Error);
    assert.deepStrictEqual(otherError.message, "WHATEVER");
  });
});

void test("isHttpError", async () => {
  await test("it should correctly detect HTTP error duck typing", () => {
    assert(isHttpError(createError(404, "WHATEVER", { key1: "value1" })));
    assert(
      isHttpError(createHttpError(404, "WHATEVER", { key1: "value1" })),
    );
    assert(isHttpError(new createHttpError.NotFound("WHATEVER")));
    assert(isHttpError({ status: 404, statusCode: 404, expose: true }));
    assert(!isHttpError(null));
    assert(!isHttpError(undefined));
    assert(!isHttpError("MESSAGE"));
    assert(!isHttpError(123));
    assert(!isHttpError({}));
    assert(!isHttpError({ status: 404, statusCode: 405, expose: true }));
    assert(
      !isHttpError({ status: 404, statusCode: 404, expose: "WHATEVER" }),
    );
  });
});
