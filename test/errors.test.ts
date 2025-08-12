/* eslint-disable @typescript-eslint/no-floating-promises */

import { strict as assert } from "node:assert";
import { test } from "node:test";
import {
  BadGatewayError,
  BadRequestError,
  BandwidthLimitExceededError,
  ConflictError,
  ExpectationFailedError,
  FailedDependencyError,
  ForbiddenError,
  GatewayTimeoutError,
  GoneError,
  HTTPVersionNotSupportedError,
  ImaTeapotError,
  InsufficientStorageError,
  InternalServerError,
  LengthRequiredError,
  LockedError,
  LoopDetectedError,
  MethodNotAllowedError,
  MisdirectedRequestError,
  NetworkAuthenticationRequiredError,
  NotAcceptableError,
  NotExtendedError,
  NotFoundError,
  NotImplementedError,
  PayloadTooLargeError,
  PaymentRequiredError,
  PreconditionFailedError,
  PreconditionRequiredError,
  ProxyAuthenticationRequiredError,
  RangeNotSatisfiableError,
  RequestHeaderFieldsTooLargeError,
  RequestTimeoutError,
  ServiceUnavailableError,
  TooEarlyError,
  TooManyRequestsError,
  UnauthorizedError,
  UnavailableForLegalReasonsError,
  UnprocessableEntityError,
  UnsupportedMediaTypeError,
  UpgradeRequiredError,
  URITooLongError,
  VariantAlsoNegotiatesError,
} from "../src/index.js";

test("BadRequestError", () => {
  const error = new BadRequestError("WHATEVER", { key1: "prop1" });
  assert.deepStrictEqual(BadRequestError.status, 400);
  assert.deepStrictEqual(BadRequestError.error, "BadRequest");
  assert.deepStrictEqual(BadRequestError.message, "Bad Request");
  assert.deepStrictEqual(BadRequestError.phrase, "Bad request.");
  assert.deepStrictEqual(error.status, 400);
  assert.deepStrictEqual(error.message, "WHATEVER");
  assert.deepStrictEqual(error.error, "Bad Request");
  assert.deepStrictEqual(error.errorPhrase, "Bad request.");
  assert.deepStrictEqual(error.code, "HTTP_ERROR_BAD_REQUEST");
  assert.deepStrictEqual(error.name, "BadRequestError");
  assert(error.isClientError);
  assert(!error.isServerError);
  assert(error.expose);
  assert.deepStrictEqual(error["key1"], "prop1");
});

test("UnauthorizedError", () => {
  const error = new UnauthorizedError("WHATEVER", { key1: "prop1" });
  assert.deepStrictEqual(UnauthorizedError.status, 401);
  assert.deepStrictEqual(UnauthorizedError.error, "Unauthorized");
  assert.deepStrictEqual(UnauthorizedError.message, "Unauthorized");
  assert.deepStrictEqual(UnauthorizedError.phrase, "Unauthorized.");
  assert.deepStrictEqual(error.status, 401);
  assert.deepStrictEqual(error.message, "WHATEVER");
  assert.deepStrictEqual(error.error, "Unauthorized");
  assert.deepStrictEqual(error.errorPhrase, "Unauthorized.");
  assert.deepStrictEqual(error.code, "HTTP_ERROR_UNAUTHORIZED");
  assert.deepStrictEqual(error.name, "UnauthorizedError");
  assert(error.isClientError);
  assert(!error.isServerError);
  assert(error.expose);
  assert.deepStrictEqual(error["key1"], "prop1");
});

test("PaymentRequiredError", () => {
  const error = new PaymentRequiredError("WHATEVER", { key1: "prop1" });
  assert.deepStrictEqual(PaymentRequiredError.status, 402);
  assert.deepStrictEqual(PaymentRequiredError.error, "PaymentRequired");
  assert.deepStrictEqual(PaymentRequiredError.message, "Payment Required");
  assert.deepStrictEqual(PaymentRequiredError.phrase, "Payment required.");
  assert.deepStrictEqual(error.status, 402);
  assert.deepStrictEqual(error.message, "WHATEVER");
  assert.deepStrictEqual(error.error, "Payment Required");
  assert.deepStrictEqual(error.errorPhrase, "Payment required.");
  assert.deepStrictEqual(error.code, "HTTP_ERROR_PAYMENT_REQUIRED");
  assert.deepStrictEqual(error.name, "PaymentRequiredError");
  assert(error.isClientError);
  assert(!error.isServerError);
  assert(error.expose);
  assert.deepStrictEqual(error["key1"], "prop1");
});

test("ForbiddenError", () => {
  const error = new ForbiddenError("WHATEVER", { key1: "prop1" });
  assert.deepStrictEqual(ForbiddenError.status, 403);
  assert.deepStrictEqual(ForbiddenError.error, "Forbidden");
  assert.deepStrictEqual(ForbiddenError.message, "Forbidden");
  assert.deepStrictEqual(ForbiddenError.phrase, "Forbidden.");
  assert.deepStrictEqual(error.status, 403);
  assert.deepStrictEqual(error.message, "WHATEVER");
  assert.deepStrictEqual(error.error, "Forbidden");
  assert.deepStrictEqual(error.errorPhrase, "Forbidden.");
  assert.deepStrictEqual(error.code, "HTTP_ERROR_FORBIDDEN");
  assert.deepStrictEqual(error.name, "ForbiddenError");
  assert(error.isClientError);
  assert(!error.isServerError);
  assert(error.expose);
  assert.deepStrictEqual(error["key1"], "prop1");
});

test("NotFoundError", () => {
  const error = new NotFoundError("WHATEVER", { key1: "prop1" });
  assert.deepStrictEqual(NotFoundError.status, 404);
  assert.deepStrictEqual(NotFoundError.error, "NotFound");
  assert.deepStrictEqual(NotFoundError.message, "Not Found");
  assert.deepStrictEqual(NotFoundError.phrase, "Not found.");
  assert.deepStrictEqual(error.status, 404);
  assert.deepStrictEqual(error.message, "WHATEVER");
  assert.deepStrictEqual(error.error, "Not Found");
  assert.deepStrictEqual(error.errorPhrase, "Not found.");
  assert.deepStrictEqual(error.code, "HTTP_ERROR_NOT_FOUND");
  assert.deepStrictEqual(error.name, "NotFoundError");
  assert(error.isClientError);
  assert(!error.isServerError);
  assert(error.expose);
  assert.deepStrictEqual(error["key1"], "prop1");
});

test("MethodNotAllowedError", () => {
  const error = new MethodNotAllowedError("WHATEVER", { key1: "prop1" });
  assert.deepStrictEqual(MethodNotAllowedError.status, 405);
  assert.deepStrictEqual(MethodNotAllowedError.error, "MethodNotAllowed");
  assert.deepStrictEqual(MethodNotAllowedError.message, "Method Not Allowed");
  assert.deepStrictEqual(MethodNotAllowedError.phrase, "Method not allowed.");
  assert.deepStrictEqual(error.status, 405);
  assert.deepStrictEqual(error.message, "WHATEVER");
  assert.deepStrictEqual(error.error, "Method Not Allowed");
  assert.deepStrictEqual(error.errorPhrase, "Method not allowed.");
  assert.deepStrictEqual(error.code, "HTTP_ERROR_METHOD_NOT_ALLOWED");
  assert.deepStrictEqual(error.name, "MethodNotAllowedError");
  assert(error.isClientError);
  assert(!error.isServerError);
  assert(error.expose);
  assert.deepStrictEqual(error["key1"], "prop1");
});

test("NotAcceptableError", () => {
  const error = new NotAcceptableError("WHATEVER", { key1: "prop1" });
  assert.deepStrictEqual(NotAcceptableError.status, 406);
  assert.deepStrictEqual(NotAcceptableError.error, "NotAcceptable");
  assert.deepStrictEqual(NotAcceptableError.message, "Not Acceptable");
  assert.deepStrictEqual(NotAcceptableError.phrase, "Not acceptable.");
  assert.deepStrictEqual(error.status, 406);
  assert.deepStrictEqual(error.message, "WHATEVER");
  assert.deepStrictEqual(error.error, "Not Acceptable");
  assert.deepStrictEqual(error.errorPhrase, "Not acceptable.");
  assert.deepStrictEqual(error.code, "HTTP_ERROR_NOT_ACCEPTABLE");
  assert.deepStrictEqual(error.name, "NotAcceptableError");
  assert(error.isClientError);
  assert(!error.isServerError);
  assert(error.expose);
  assert.deepStrictEqual(error["key1"], "prop1");
});

test("ProxyAuthenticationRequiredError", () => {
  const error = new ProxyAuthenticationRequiredError("WHATEVER", {
    key1: "prop1",
  });
  assert.deepStrictEqual(ProxyAuthenticationRequiredError.status, 407);
  assert.deepStrictEqual(
    ProxyAuthenticationRequiredError.error,
    "ProxyAuthenticationRequired",
  );
  assert.deepStrictEqual(
    ProxyAuthenticationRequiredError.message,
    "Proxy Authentication Required",
  );
  assert.deepStrictEqual(
    ProxyAuthenticationRequiredError.phrase,
    "Proxy authentication required.",
  );
  assert.deepStrictEqual(error.status, 407);
  assert.deepStrictEqual(error.message, "WHATEVER");
  assert.deepStrictEqual(error.error, "Proxy Authentication Required");
  assert.deepStrictEqual(error.errorPhrase, "Proxy authentication required.");
  assert.deepStrictEqual(
    error.code,
    "HTTP_ERROR_PROXY_AUTHENTICATION_REQUIRED",
  );
  assert.deepStrictEqual(error.name, "ProxyAuthenticationRequiredError");
  assert(error.isClientError);
  assert(!error.isServerError);
  assert(error.expose);
  assert.deepStrictEqual(error["key1"], "prop1");
});

test("RequestTimeoutError", () => {
  const error = new RequestTimeoutError("WHATEVER", { key1: "prop1" });
  assert.deepStrictEqual(RequestTimeoutError.status, 408);
  assert.deepStrictEqual(RequestTimeoutError.error, "RequestTimeout");
  assert.deepStrictEqual(RequestTimeoutError.message, "Request Timeout");
  assert.deepStrictEqual(RequestTimeoutError.phrase, "Request timeout.");
  assert.deepStrictEqual(error.status, 408);
  assert.deepStrictEqual(error.message, "WHATEVER");
  assert.deepStrictEqual(error.error, "Request Timeout");
  assert.deepStrictEqual(error.errorPhrase, "Request timeout.");
  assert.deepStrictEqual(error.code, "HTTP_ERROR_REQUEST_TIMEOUT");
  assert.deepStrictEqual(error.name, "RequestTimeoutError");
  assert(error.isClientError);
  assert(!error.isServerError);
  assert(error.expose);
  assert.deepStrictEqual(error["key1"], "prop1");
});

test("ConflictError", () => {
  const error = new ConflictError("WHATEVER", { key1: "prop1" });
  assert.deepStrictEqual(ConflictError.status, 409);
  assert.deepStrictEqual(ConflictError.error, "Conflict");
  assert.deepStrictEqual(ConflictError.message, "Conflict");
  assert.deepStrictEqual(ConflictError.phrase, "Conflict.");
  assert.deepStrictEqual(error.status, 409);
  assert.deepStrictEqual(error.message, "WHATEVER");
  assert.deepStrictEqual(error.error, "Conflict");
  assert.deepStrictEqual(error.errorPhrase, "Conflict.");
  assert.deepStrictEqual(error.code, "HTTP_ERROR_CONFLICT");
  assert.deepStrictEqual(error.name, "ConflictError");
  assert(error.isClientError);
  assert(!error.isServerError);
  assert(error.expose);
  assert.deepStrictEqual(error["key1"], "prop1");
});

test("GoneError", () => {
  const error = new GoneError("WHATEVER", { key1: "prop1" });
  assert.deepStrictEqual(GoneError.status, 410);
  assert.deepStrictEqual(GoneError.error, "Gone");
  assert.deepStrictEqual(GoneError.message, "Gone");
  assert.deepStrictEqual(GoneError.phrase, "Gone.");
  assert.deepStrictEqual(error.status, 410);
  assert.deepStrictEqual(error.message, "WHATEVER");
  assert.deepStrictEqual(error.error, "Gone");
  assert.deepStrictEqual(error.errorPhrase, "Gone.");
  assert.deepStrictEqual(error.code, "HTTP_ERROR_GONE");
  assert.deepStrictEqual(error.name, "GoneError");
  assert(error.isClientError);
  assert(!error.isServerError);
  assert(error.expose);
  assert.deepStrictEqual(error["key1"], "prop1");
});

test("LengthRequiredError", () => {
  const error = new LengthRequiredError("WHATEVER", { key1: "prop1" });
  assert.deepStrictEqual(LengthRequiredError.status, 411);
  assert.deepStrictEqual(LengthRequiredError.error, "LengthRequired");
  assert.deepStrictEqual(LengthRequiredError.message, "Length Required");
  assert.deepStrictEqual(LengthRequiredError.phrase, "Length required.");
  assert.deepStrictEqual(error.status, 411);
  assert.deepStrictEqual(error.message, "WHATEVER");
  assert.deepStrictEqual(error.error, "Length Required");
  assert.deepStrictEqual(error.errorPhrase, "Length required.");
  assert.deepStrictEqual(error.code, "HTTP_ERROR_LENGTH_REQUIRED");
  assert.deepStrictEqual(error.name, "LengthRequiredError");
  assert(error.isClientError);
  assert(!error.isServerError);
  assert(error.expose);
  assert.deepStrictEqual(error["key1"], "prop1");
});

test("PreconditionFailedError", () => {
  const error = new PreconditionFailedError("WHATEVER", { key1: "prop1" });
  assert.deepStrictEqual(PreconditionFailedError.status, 412);
  assert.deepStrictEqual(PreconditionFailedError.error, "PreconditionFailed");
  assert.deepStrictEqual(
    PreconditionFailedError.message,
    "Precondition Failed",
  );
  assert.deepStrictEqual(
    PreconditionFailedError.phrase,
    "Precondition failed.",
  );
  assert.deepStrictEqual(error.status, 412);
  assert.deepStrictEqual(error.message, "WHATEVER");
  assert.deepStrictEqual(error.error, "Precondition Failed");
  assert.deepStrictEqual(error.errorPhrase, "Precondition failed.");
  assert.deepStrictEqual(error.code, "HTTP_ERROR_PRECONDITION_FAILED");
  assert.deepStrictEqual(error.name, "PreconditionFailedError");
  assert(error.isClientError);
  assert(!error.isServerError);
  assert(error.expose);
  assert.deepStrictEqual(error["key1"], "prop1");
});

test("PayloadTooLargeError", () => {
  const error = new PayloadTooLargeError("WHATEVER", { key1: "prop1" });
  assert.deepStrictEqual(PayloadTooLargeError.status, 413);
  assert.deepStrictEqual(PayloadTooLargeError.error, "PayloadTooLarge");
  assert.deepStrictEqual(PayloadTooLargeError.message, "Payload Too Large");
  assert.deepStrictEqual(PayloadTooLargeError.phrase, "Payload too large.");
  assert.deepStrictEqual(error.status, 413);
  assert.deepStrictEqual(error.message, "WHATEVER");
  assert.deepStrictEqual(error.error, "Payload Too Large");
  assert.deepStrictEqual(error.errorPhrase, "Payload too large.");
  assert.deepStrictEqual(error.code, "HTTP_ERROR_PAYLOAD_TOO_LARGE");
  assert.deepStrictEqual(error.name, "PayloadTooLargeError");
  assert(error.isClientError);
  assert(!error.isServerError);
  assert(error.expose);
  assert.deepStrictEqual(error["key1"], "prop1");
});

test("URITooLongError", () => {
  const error = new URITooLongError("WHATEVER", { key1: "prop1" });
  assert.deepStrictEqual(URITooLongError.status, 414);
  assert.deepStrictEqual(URITooLongError.error, "URITooLong");
  assert.deepStrictEqual(URITooLongError.message, "URI Too Long");
  assert.deepStrictEqual(URITooLongError.phrase, "Uri too long.");
  assert.deepStrictEqual(error.status, 414);
  assert.deepStrictEqual(error.message, "WHATEVER");
  assert.deepStrictEqual(error.error, "URI Too Long");
  assert.deepStrictEqual(error.errorPhrase, "Uri too long.");
  assert.deepStrictEqual(error.code, "HTTP_ERROR_URITOO_LONG");
  assert.deepStrictEqual(error.name, "URITooLongError");
  assert(error.isClientError);
  assert(!error.isServerError);
  assert(error.expose);
  assert.deepStrictEqual(error["key1"], "prop1");
});

test("UnsupportedMediaTypeError", () => {
  const error = new UnsupportedMediaTypeError("WHATEVER", { key1: "prop1" });
  assert.deepStrictEqual(UnsupportedMediaTypeError.status, 415);
  assert.deepStrictEqual(
    UnsupportedMediaTypeError.error,
    "UnsupportedMediaType",
  );
  assert.deepStrictEqual(
    UnsupportedMediaTypeError.message,
    "Unsupported Media Type",
  );
  assert.deepStrictEqual(
    UnsupportedMediaTypeError.phrase,
    "Unsupported media type.",
  );
  assert.deepStrictEqual(error.status, 415);
  assert.deepStrictEqual(error.message, "WHATEVER");
  assert.deepStrictEqual(error.error, "Unsupported Media Type");
  assert.deepStrictEqual(error.errorPhrase, "Unsupported media type.");
  assert.deepStrictEqual(error.code, "HTTP_ERROR_UNSUPPORTED_MEDIA_TYPE");
  assert.deepStrictEqual(error.name, "UnsupportedMediaTypeError");
  assert(error.isClientError);
  assert(!error.isServerError);
  assert(error.expose);
  assert.deepStrictEqual(error["key1"], "prop1");
});

test("RangeNotSatisfiableError", () => {
  const error = new RangeNotSatisfiableError("WHATEVER", { key1: "prop1" });
  assert.deepStrictEqual(RangeNotSatisfiableError.status, 416);
  assert.deepStrictEqual(RangeNotSatisfiableError.error, "RangeNotSatisfiable");
  assert.deepStrictEqual(
    RangeNotSatisfiableError.message,
    "Range Not Satisfiable",
  );
  assert.deepStrictEqual(
    RangeNotSatisfiableError.phrase,
    "Range not satisfiable.",
  );
  assert.deepStrictEqual(error.status, 416);
  assert.deepStrictEqual(error.message, "WHATEVER");
  assert.deepStrictEqual(error.error, "Range Not Satisfiable");
  assert.deepStrictEqual(error.errorPhrase, "Range not satisfiable.");
  assert.deepStrictEqual(error.code, "HTTP_ERROR_RANGE_NOT_SATISFIABLE");
  assert.deepStrictEqual(error.name, "RangeNotSatisfiableError");
  assert(error.isClientError);
  assert(!error.isServerError);
  assert(error.expose);
  assert.deepStrictEqual(error["key1"], "prop1");
});

test("ExpectationFailedError", () => {
  const error = new ExpectationFailedError("WHATEVER", { key1: "prop1" });
  assert.deepStrictEqual(ExpectationFailedError.status, 417);
  assert.deepStrictEqual(ExpectationFailedError.error, "ExpectationFailed");
  assert.deepStrictEqual(ExpectationFailedError.message, "Expectation Failed");
  assert.deepStrictEqual(ExpectationFailedError.phrase, "Expectation failed.");
  assert.deepStrictEqual(error.status, 417);
  assert.deepStrictEqual(error.message, "WHATEVER");
  assert.deepStrictEqual(error.error, "Expectation Failed");
  assert.deepStrictEqual(error.errorPhrase, "Expectation failed.");
  assert.deepStrictEqual(error.code, "HTTP_ERROR_EXPECTATION_FAILED");
  assert.deepStrictEqual(error.name, "ExpectationFailedError");
  assert(error.isClientError);
  assert(!error.isServerError);
  assert(error.expose);
  assert.deepStrictEqual(error["key1"], "prop1");
});

test("ImaTeapotError", () => {
  const error = new ImaTeapotError("WHATEVER", { key1: "prop1" });
  assert.deepStrictEqual(ImaTeapotError.status, 418);
  assert.deepStrictEqual(ImaTeapotError.error, "ImaTeapot");
  assert.deepStrictEqual(ImaTeapotError.message, "I'm a Teapot");
  assert.deepStrictEqual(ImaTeapotError.phrase, "I'm a teapot.");
  assert.deepStrictEqual(error.status, 418);
  assert.deepStrictEqual(error.message, "WHATEVER");
  assert.deepStrictEqual(error.error, "I'm a Teapot");
  assert.deepStrictEqual(error.errorPhrase, "I'm a teapot.");
  assert.deepStrictEqual(error.code, "HTTP_ERROR_IMA_TEAPOT");
  assert.deepStrictEqual(error.name, "ImaTeapotError");
  assert(error.isClientError);
  assert(!error.isServerError);
  assert(error.expose);
  assert.deepStrictEqual(error["key1"], "prop1");
});

test("MisdirectedRequestError", () => {
  const error = new MisdirectedRequestError("WHATEVER", { key1: "prop1" });
  assert.deepStrictEqual(MisdirectedRequestError.status, 421);
  assert.deepStrictEqual(MisdirectedRequestError.error, "MisdirectedRequest");
  assert.deepStrictEqual(
    MisdirectedRequestError.message,
    "Misdirected Request",
  );
  assert.deepStrictEqual(
    MisdirectedRequestError.phrase,
    "Misdirected request.",
  );
  assert.deepStrictEqual(error.status, 421);
  assert.deepStrictEqual(error.message, "WHATEVER");
  assert.deepStrictEqual(error.error, "Misdirected Request");
  assert.deepStrictEqual(error.errorPhrase, "Misdirected request.");
  assert.deepStrictEqual(error.code, "HTTP_ERROR_MISDIRECTED_REQUEST");
  assert.deepStrictEqual(error.name, "MisdirectedRequestError");
  assert(error.isClientError);
  assert(!error.isServerError);
  assert(error.expose);
  assert.deepStrictEqual(error["key1"], "prop1");
});

test("UnprocessableEntityError", () => {
  const error = new UnprocessableEntityError("WHATEVER", { key1: "prop1" });
  assert.deepStrictEqual(UnprocessableEntityError.status, 422);
  assert.deepStrictEqual(UnprocessableEntityError.error, "UnprocessableEntity");
  assert.deepStrictEqual(
    UnprocessableEntityError.message,
    "Unprocessable Entity",
  );
  assert.deepStrictEqual(
    UnprocessableEntityError.phrase,
    "Unprocessable entity.",
  );
  assert.deepStrictEqual(error.status, 422);
  assert.deepStrictEqual(error.message, "WHATEVER");
  assert.deepStrictEqual(error.error, "Unprocessable Entity");
  assert.deepStrictEqual(error.errorPhrase, "Unprocessable entity.");
  assert.deepStrictEqual(error.code, "HTTP_ERROR_UNPROCESSABLE_ENTITY");
  assert.deepStrictEqual(error.name, "UnprocessableEntityError");
  assert(error.isClientError);
  assert(!error.isServerError);
  assert(error.expose);
  assert.deepStrictEqual(error["key1"], "prop1");
});

test("LockedError", () => {
  const error = new LockedError("WHATEVER", { key1: "prop1" });
  assert.deepStrictEqual(LockedError.status, 423);
  assert.deepStrictEqual(LockedError.error, "Locked");
  assert.deepStrictEqual(LockedError.message, "Locked");
  assert.deepStrictEqual(LockedError.phrase, "Locked.");
  assert.deepStrictEqual(error.status, 423);
  assert.deepStrictEqual(error.message, "WHATEVER");
  assert.deepStrictEqual(error.error, "Locked");
  assert.deepStrictEqual(error.errorPhrase, "Locked.");
  assert.deepStrictEqual(error.code, "HTTP_ERROR_LOCKED");
  assert.deepStrictEqual(error.name, "LockedError");
  assert(error.isClientError);
  assert(!error.isServerError);
  assert(error.expose);
  assert.deepStrictEqual(error["key1"], "prop1");
});

test("FailedDependencyError", () => {
  const error = new FailedDependencyError("WHATEVER", { key1: "prop1" });
  assert.deepStrictEqual(FailedDependencyError.status, 424);
  assert.deepStrictEqual(FailedDependencyError.error, "FailedDependency");
  assert.deepStrictEqual(FailedDependencyError.message, "Failed Dependency");
  assert.deepStrictEqual(FailedDependencyError.phrase, "Failed dependency.");
  assert.deepStrictEqual(error.status, 424);
  assert.deepStrictEqual(error.message, "WHATEVER");
  assert.deepStrictEqual(error.error, "Failed Dependency");
  assert.deepStrictEqual(error.errorPhrase, "Failed dependency.");
  assert.deepStrictEqual(error.code, "HTTP_ERROR_FAILED_DEPENDENCY");
  assert.deepStrictEqual(error.name, "FailedDependencyError");
  assert(error.isClientError);
  assert(!error.isServerError);
  assert(error.expose);
  assert.deepStrictEqual(error["key1"], "prop1");
});

test("TooEarlyError", () => {
  const error = new TooEarlyError("WHATEVER", { key1: "prop1" });
  assert.deepStrictEqual(TooEarlyError.status, 425);
  assert.deepStrictEqual(TooEarlyError.error, "TooEarly");
  assert.deepStrictEqual(TooEarlyError.message, "Too Early");
  assert.deepStrictEqual(TooEarlyError.phrase, "Too early.");
  assert.deepStrictEqual(error.status, 425);
  assert.deepStrictEqual(error.message, "WHATEVER");
  assert.deepStrictEqual(error.error, "Too Early");
  assert.deepStrictEqual(error.errorPhrase, "Too early.");
  assert.deepStrictEqual(error.code, "HTTP_ERROR_TOO_EARLY");
  assert.deepStrictEqual(error.name, "TooEarlyError");
  assert(error.isClientError);
  assert(!error.isServerError);
  assert(error.expose);
  assert.deepStrictEqual(error["key1"], "prop1");
});

test("UpgradeRequiredError", () => {
  const error = new UpgradeRequiredError("WHATEVER", { key1: "prop1" });
  assert.deepStrictEqual(UpgradeRequiredError.status, 426);
  assert.deepStrictEqual(UpgradeRequiredError.error, "UpgradeRequired");
  assert.deepStrictEqual(UpgradeRequiredError.message, "Upgrade Required");
  assert.deepStrictEqual(UpgradeRequiredError.phrase, "Upgrade required.");
  assert.deepStrictEqual(error.status, 426);
  assert.deepStrictEqual(error.message, "WHATEVER");
  assert.deepStrictEqual(error.error, "Upgrade Required");
  assert.deepStrictEqual(error.errorPhrase, "Upgrade required.");
  assert.deepStrictEqual(error.code, "HTTP_ERROR_UPGRADE_REQUIRED");
  assert.deepStrictEqual(error.name, "UpgradeRequiredError");
  assert(error.isClientError);
  assert(!error.isServerError);
  assert(error.expose);
  assert.deepStrictEqual(error["key1"], "prop1");
});

test("PreconditionRequiredError", () => {
  const error = new PreconditionRequiredError("WHATEVER", { key1: "prop1" });
  assert.deepStrictEqual(PreconditionRequiredError.status, 428);
  assert.deepStrictEqual(
    PreconditionRequiredError.error,
    "PreconditionRequired",
  );
  assert.deepStrictEqual(
    PreconditionRequiredError.message,
    "Precondition Required",
  );
  assert.deepStrictEqual(
    PreconditionRequiredError.phrase,
    "Precondition required.",
  );
  assert.deepStrictEqual(error.status, 428);
  assert.deepStrictEqual(error.message, "WHATEVER");
  assert.deepStrictEqual(error.error, "Precondition Required");
  assert.deepStrictEqual(error.errorPhrase, "Precondition required.");
  assert.deepStrictEqual(error.code, "HTTP_ERROR_PRECONDITION_REQUIRED");
  assert.deepStrictEqual(error.name, "PreconditionRequiredError");
  assert(error.isClientError);
  assert(!error.isServerError);
  assert(error.expose);
  assert.deepStrictEqual(error["key1"], "prop1");
});

test("TooManyRequestsError", () => {
  const error = new TooManyRequestsError("WHATEVER", { key1: "prop1" });
  assert.deepStrictEqual(TooManyRequestsError.status, 429);
  assert.deepStrictEqual(TooManyRequestsError.error, "TooManyRequests");
  assert.deepStrictEqual(TooManyRequestsError.message, "Too Many Requests");
  assert.deepStrictEqual(TooManyRequestsError.phrase, "Too many requests.");
  assert.deepStrictEqual(error.status, 429);
  assert.deepStrictEqual(error.message, "WHATEVER");
  assert.deepStrictEqual(error.error, "Too Many Requests");
  assert.deepStrictEqual(error.errorPhrase, "Too many requests.");
  assert.deepStrictEqual(error.code, "HTTP_ERROR_TOO_MANY_REQUESTS");
  assert.deepStrictEqual(error.name, "TooManyRequestsError");
  assert(error.isClientError);
  assert(!error.isServerError);
  assert(error.expose);
  assert.deepStrictEqual(error["key1"], "prop1");
});

test("RequestHeaderFieldsTooLargeError", () => {
  const error = new RequestHeaderFieldsTooLargeError("WHATEVER", {
    key1: "prop1",
  });
  assert.deepStrictEqual(RequestHeaderFieldsTooLargeError.status, 431);
  assert.deepStrictEqual(
    RequestHeaderFieldsTooLargeError.error,
    "RequestHeaderFieldsTooLarge",
  );
  assert.deepStrictEqual(
    RequestHeaderFieldsTooLargeError.message,
    "Request Header Fields Too Large",
  );
  assert.deepStrictEqual(
    RequestHeaderFieldsTooLargeError.phrase,
    "Request header fields too large.",
  );
  assert.deepStrictEqual(error.status, 431);
  assert.deepStrictEqual(error.message, "WHATEVER");
  assert.deepStrictEqual(error.error, "Request Header Fields Too Large");
  assert.deepStrictEqual(error.errorPhrase, "Request header fields too large.");
  assert.deepStrictEqual(
    error.code,
    "HTTP_ERROR_REQUEST_HEADER_FIELDS_TOO_LARGE",
  );
  assert.deepStrictEqual(error.name, "RequestHeaderFieldsTooLargeError");
  assert(error.isClientError);
  assert(!error.isServerError);
  assert(error.expose);
  assert.deepStrictEqual(error["key1"], "prop1");
});

test("UnavailableForLegalReasonsError", () => {
  const error = new UnavailableForLegalReasonsError("WHATEVER", {
    key1: "prop1",
  });
  assert.deepStrictEqual(UnavailableForLegalReasonsError.status, 451);
  assert.deepStrictEqual(
    UnavailableForLegalReasonsError.error,
    "UnavailableForLegalReasons",
  );
  assert.deepStrictEqual(
    UnavailableForLegalReasonsError.message,
    "Unavailable For Legal Reasons",
  );
  assert.deepStrictEqual(
    UnavailableForLegalReasonsError.phrase,
    "Unavailable for legal reasons.",
  );
  assert.deepStrictEqual(error.status, 451);
  assert.deepStrictEqual(error.message, "WHATEVER");
  assert.deepStrictEqual(error.error, "Unavailable For Legal Reasons");
  assert.deepStrictEqual(error.errorPhrase, "Unavailable for legal reasons.");
  assert.deepStrictEqual(
    error.code,
    "HTTP_ERROR_UNAVAILABLE_FOR_LEGAL_REASONS",
  );
  assert.deepStrictEqual(error.name, "UnavailableForLegalReasonsError");
  assert(error.isClientError);
  assert(!error.isServerError);
  assert(error.expose);
  assert.deepStrictEqual(error["key1"], "prop1");
});

test("InternalServerError", () => {
  const error = new InternalServerError("WHATEVER", { key1: "prop1" });
  assert.deepStrictEqual(InternalServerError.status, 500);
  assert.deepStrictEqual(InternalServerError.error, "InternalServerError");
  assert.deepStrictEqual(InternalServerError.message, "Internal Server Error");
  assert.deepStrictEqual(InternalServerError.phrase, "Internal server error.");
  assert.deepStrictEqual(error.status, 500);
  assert.deepStrictEqual(error.message, "WHATEVER");
  assert.deepStrictEqual(error.error, "Internal Server Error");
  assert.deepStrictEqual(error.errorPhrase, "Internal server error.");
  assert.deepStrictEqual(error.code, "HTTP_ERROR_INTERNAL_SERVER_ERROR");
  assert.deepStrictEqual(error.name, "InternalServerError");
  assert(!error.isClientError);
  assert(error.isServerError);
  assert(!error.expose);
  assert.deepStrictEqual(error["key1"], "prop1");
});

test("NotImplementedError", () => {
  const error = new NotImplementedError("WHATEVER", { key1: "prop1" });
  assert.deepStrictEqual(NotImplementedError.status, 501);
  assert.deepStrictEqual(NotImplementedError.error, "NotImplemented");
  assert.deepStrictEqual(NotImplementedError.message, "Not Implemented");
  assert.deepStrictEqual(NotImplementedError.phrase, "Not implemented.");
  assert.deepStrictEqual(error.status, 501);
  assert.deepStrictEqual(error.message, "WHATEVER");
  assert.deepStrictEqual(error.error, "Not Implemented");
  assert.deepStrictEqual(error.errorPhrase, "Not implemented.");
  assert.deepStrictEqual(error.code, "HTTP_ERROR_NOT_IMPLEMENTED");
  assert.deepStrictEqual(error.name, "NotImplementedError");
  assert(!error.isClientError);
  assert(error.isServerError);
  assert(!error.expose);
  assert.deepStrictEqual(error["key1"], "prop1");
});

test("BadGatewayError", () => {
  const error = new BadGatewayError("WHATEVER", { key1: "prop1" });
  assert.deepStrictEqual(BadGatewayError.status, 502);
  assert.deepStrictEqual(BadGatewayError.error, "BadGateway");
  assert.deepStrictEqual(BadGatewayError.message, "Bad Gateway");
  assert.deepStrictEqual(BadGatewayError.phrase, "Bad gateway.");
  assert.deepStrictEqual(error.status, 502);
  assert.deepStrictEqual(error.message, "WHATEVER");
  assert.deepStrictEqual(error.error, "Bad Gateway");
  assert.deepStrictEqual(error.errorPhrase, "Bad gateway.");
  assert.deepStrictEqual(error.code, "HTTP_ERROR_BAD_GATEWAY");
  assert.deepStrictEqual(error.name, "BadGatewayError");
  assert(!error.isClientError);
  assert(error.isServerError);
  assert(!error.expose);
  assert.deepStrictEqual(error["key1"], "prop1");
});

test("ServiceUnavailableError", () => {
  const error = new ServiceUnavailableError("WHATEVER", { key1: "prop1" });
  assert.deepStrictEqual(ServiceUnavailableError.status, 503);
  assert.deepStrictEqual(ServiceUnavailableError.error, "ServiceUnavailable");
  assert.deepStrictEqual(
    ServiceUnavailableError.message,
    "Service Unavailable",
  );
  assert.deepStrictEqual(
    ServiceUnavailableError.phrase,
    "Service unavailable.",
  );
  assert.deepStrictEqual(error.status, 503);
  assert.deepStrictEqual(error.message, "WHATEVER");
  assert.deepStrictEqual(error.error, "Service Unavailable");
  assert.deepStrictEqual(error.errorPhrase, "Service unavailable.");
  assert.deepStrictEqual(error.code, "HTTP_ERROR_SERVICE_UNAVAILABLE");
  assert.deepStrictEqual(error.name, "ServiceUnavailableError");
  assert(!error.isClientError);
  assert(error.isServerError);
  assert(!error.expose);
  assert.deepStrictEqual(error["key1"], "prop1");
});

test("GatewayTimeoutError", () => {
  const error = new GatewayTimeoutError("WHATEVER", { key1: "prop1" });
  assert.deepStrictEqual(GatewayTimeoutError.status, 504);
  assert.deepStrictEqual(GatewayTimeoutError.error, "GatewayTimeout");
  assert.deepStrictEqual(GatewayTimeoutError.message, "Gateway Timeout");
  assert.deepStrictEqual(GatewayTimeoutError.phrase, "Gateway timeout.");
  assert.deepStrictEqual(error.status, 504);
  assert.deepStrictEqual(error.message, "WHATEVER");
  assert.deepStrictEqual(error.error, "Gateway Timeout");
  assert.deepStrictEqual(error.errorPhrase, "Gateway timeout.");
  assert.deepStrictEqual(error.code, "HTTP_ERROR_GATEWAY_TIMEOUT");
  assert.deepStrictEqual(error.name, "GatewayTimeoutError");
  assert(!error.isClientError);
  assert(error.isServerError);
  assert(!error.expose);
  assert.deepStrictEqual(error["key1"], "prop1");
});

test("HTTPVersionNotSupportedError", () => {
  const error = new HTTPVersionNotSupportedError("WHATEVER", { key1: "prop1" });
  assert.deepStrictEqual(HTTPVersionNotSupportedError.status, 505);
  assert.deepStrictEqual(
    HTTPVersionNotSupportedError.error,
    "HTTPVersionNotSupported",
  );
  assert.deepStrictEqual(
    HTTPVersionNotSupportedError.message,
    "HTTP Version Not Supported",
  );
  assert.deepStrictEqual(
    HTTPVersionNotSupportedError.phrase,
    "Http version not supported.",
  );
  assert.deepStrictEqual(error.status, 505);
  assert.deepStrictEqual(error.message, "WHATEVER");
  assert.deepStrictEqual(error.error, "HTTP Version Not Supported");
  assert.deepStrictEqual(error.errorPhrase, "Http version not supported.");
  assert.deepStrictEqual(error.code, "HTTP_ERROR_HTTPVERSION_NOT_SUPPORTED");
  assert.deepStrictEqual(error.name, "HTTPVersionNotSupportedError");
  assert(!error.isClientError);
  assert(error.isServerError);
  assert(!error.expose);
  assert.deepStrictEqual(error["key1"], "prop1");
});

test("VariantAlsoNegotiatesError", () => {
  const error = new VariantAlsoNegotiatesError("WHATEVER", { key1: "prop1" });
  assert.deepStrictEqual(VariantAlsoNegotiatesError.status, 506);
  assert.deepStrictEqual(
    VariantAlsoNegotiatesError.error,
    "VariantAlsoNegotiates",
  );
  assert.deepStrictEqual(
    VariantAlsoNegotiatesError.message,
    "Variant Also Negotiates",
  );
  assert.deepStrictEqual(
    VariantAlsoNegotiatesError.phrase,
    "Variant also negotiates.",
  );
  assert.deepStrictEqual(error.status, 506);
  assert.deepStrictEqual(error.message, "WHATEVER");
  assert.deepStrictEqual(error.error, "Variant Also Negotiates");
  assert.deepStrictEqual(error.errorPhrase, "Variant also negotiates.");
  assert.deepStrictEqual(error.code, "HTTP_ERROR_VARIANT_ALSO_NEGOTIATES");
  assert.deepStrictEqual(error.name, "VariantAlsoNegotiatesError");
  assert(!error.isClientError);
  assert(error.isServerError);
  assert(!error.expose);
  assert.deepStrictEqual(error["key1"], "prop1");
});

test("InsufficientStorageError", () => {
  const error = new InsufficientStorageError("WHATEVER", { key1: "prop1" });
  assert.deepStrictEqual(InsufficientStorageError.status, 507);
  assert.deepStrictEqual(InsufficientStorageError.error, "InsufficientStorage");
  assert.deepStrictEqual(
    InsufficientStorageError.message,
    "Insufficient Storage",
  );
  assert.deepStrictEqual(
    InsufficientStorageError.phrase,
    "Insufficient storage.",
  );
  assert.deepStrictEqual(error.status, 507);
  assert.deepStrictEqual(error.message, "WHATEVER");
  assert.deepStrictEqual(error.error, "Insufficient Storage");
  assert.deepStrictEqual(error.errorPhrase, "Insufficient storage.");
  assert.deepStrictEqual(error.code, "HTTP_ERROR_INSUFFICIENT_STORAGE");
  assert.deepStrictEqual(error.name, "InsufficientStorageError");
  assert(!error.isClientError);
  assert(error.isServerError);
  assert(!error.expose);
  assert.deepStrictEqual(error["key1"], "prop1");
});

test("LoopDetectedError", () => {
  const error = new LoopDetectedError("WHATEVER", { key1: "prop1" });
  assert.deepStrictEqual(LoopDetectedError.status, 508);
  assert.deepStrictEqual(LoopDetectedError.error, "LoopDetected");
  assert.deepStrictEqual(LoopDetectedError.message, "Loop Detected");
  assert.deepStrictEqual(LoopDetectedError.phrase, "Loop detected.");
  assert.deepStrictEqual(error.status, 508);
  assert.deepStrictEqual(error.message, "WHATEVER");
  assert.deepStrictEqual(error.error, "Loop Detected");
  assert.deepStrictEqual(error.errorPhrase, "Loop detected.");
  assert.deepStrictEqual(error.code, "HTTP_ERROR_LOOP_DETECTED");
  assert.deepStrictEqual(error.name, "LoopDetectedError");
  assert(!error.isClientError);
  assert(error.isServerError);
  assert(!error.expose);
  assert.deepStrictEqual(error["key1"], "prop1");
});

test("BandwidthLimitExceededError", () => {
  const error = new BandwidthLimitExceededError("WHATEVER", { key1: "prop1" });
  assert.deepStrictEqual(BandwidthLimitExceededError.status, 509);
  assert.deepStrictEqual(
    BandwidthLimitExceededError.error,
    "BandwidthLimitExceeded",
  );
  assert.deepStrictEqual(
    BandwidthLimitExceededError.message,
    "Bandwidth Limit Exceeded",
  );
  assert.deepStrictEqual(
    BandwidthLimitExceededError.phrase,
    "Bandwidth limit exceeded.",
  );
  assert.deepStrictEqual(error.status, 509);
  assert.deepStrictEqual(error.message, "WHATEVER");
  assert.deepStrictEqual(error.error, "Bandwidth Limit Exceeded");
  assert.deepStrictEqual(error.errorPhrase, "Bandwidth limit exceeded.");
  assert.deepStrictEqual(error.code, "HTTP_ERROR_BANDWIDTH_LIMIT_EXCEEDED");
  assert.deepStrictEqual(error.name, "BandwidthLimitExceededError");
  assert(!error.isClientError);
  assert(error.isServerError);
  assert(!error.expose);
  assert.deepStrictEqual(error["key1"], "prop1");
});

test("NotExtendedError", () => {
  const error = new NotExtendedError("WHATEVER", { key1: "prop1" });
  assert.deepStrictEqual(NotExtendedError.status, 510);
  assert.deepStrictEqual(NotExtendedError.error, "NotExtended");
  assert.deepStrictEqual(NotExtendedError.message, "Not Extended");
  assert.deepStrictEqual(NotExtendedError.phrase, "Not extended.");
  assert.deepStrictEqual(error.status, 510);
  assert.deepStrictEqual(error.message, "WHATEVER");
  assert.deepStrictEqual(error.error, "Not Extended");
  assert.deepStrictEqual(error.errorPhrase, "Not extended.");
  assert.deepStrictEqual(error.code, "HTTP_ERROR_NOT_EXTENDED");
  assert.deepStrictEqual(error.name, "NotExtendedError");
  assert(!error.isClientError);
  assert(error.isServerError);
  assert(!error.expose);
  assert.deepStrictEqual(error["key1"], "prop1");
});

test("NetworkAuthenticationRequiredError", () => {
  const error = new NetworkAuthenticationRequiredError("WHATEVER", {
    key1: "prop1",
  });
  assert.deepStrictEqual(NetworkAuthenticationRequiredError.status, 511);
  assert.deepStrictEqual(
    NetworkAuthenticationRequiredError.error,
    "NetworkAuthenticationRequired",
  );
  assert.deepStrictEqual(
    NetworkAuthenticationRequiredError.message,
    "Network Authentication Required",
  );
  assert.deepStrictEqual(
    NetworkAuthenticationRequiredError.phrase,
    "Network authentication required.",
  );
  assert.deepStrictEqual(error.status, 511);
  assert.deepStrictEqual(error.message, "WHATEVER");
  assert.deepStrictEqual(error.error, "Network Authentication Required");
  assert.deepStrictEqual(error.errorPhrase, "Network authentication required.");
  assert.deepStrictEqual(error.code, "HTTP_ERROR_NETWORK_AUTHENTICATION_REQUIRED");
  assert.deepStrictEqual(error.name, "NetworkAuthenticationRequiredError");
  assert(!error.isClientError);
  assert(error.isServerError);
  assert(!error.expose);
  assert.deepStrictEqual(error["key1"], "prop1");
});
