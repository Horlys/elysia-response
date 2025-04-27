import { Elysia } from "elysia";
import { response, type Response } from "../src";
import { test, expect } from "bun:test";

const app = new Elysia()
  .use(response)
  .get("/", ({ respond }) => {
    return respond(200, "Hello World");
  })
  .get("/body", ({ respond }) => {
    return respond(200, "Hello World", { message: "Hello World" });
  })
  .get("/404", ({ respond }) => {
    return respond(404, "Not Found");
  });

test("should respond with status code 200", async () => {
  const response = await app.handle(new Request("http://localhost/"));
  expect(response.status).toBe(200);

  // @ts-ignore
  let data: Response = await response.json();
  expect(data.status).toEqual(200);
  expect(data.message).toEqual("Hello World");
});

test("should respond with a body and 200 status code", async () => {
  const response = await app.handle(new Request("http://localhost/body"));
  expect(response.status).toBe(200);

  // @ts-ignore
  let data: Response = await response.json();
  expect(data.status).toEqual(200);
  expect(data.message).toEqual("Hello World");
  expect(data.data).toEqual({ message: "Hello World" });
});

test("should respond with status code 404", async () => {
  const response = await app.handle(new Request("http://localhost/404"));
  expect(response.status).toBe(404);

  // @ts-ignore
  let data: Response = await response.json();
  expect(data.status).toEqual(404);
  expect(data.message).toEqual("Not Found");
});
