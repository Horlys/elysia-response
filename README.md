# Elysia Response
This library is a plugin for Elysia that allows you to standardize your answers, so you have a single format.

It's part of the “Horlys” suite, a project designed to bring together libraries useful in the development of javascript projects.

## Installation
```bash
bun install @horlys/elysia-response
```

## Usage
```typescript
import { Elysia } from "elysia";
import { response } from "@horlys/elysia-response";

const app = new Elysia()
  .use(response)
  .get("/", ({ respond }) => {
    return respond(200, "Hello World", { hello: "world" });
  })
````

## Documentation

### Response
Here is the object returned in the response:

```
{
  status: number;
  message: string;
  data: any;
}
```

### Function
Here is the arguments of the respond function:
- **status**: number
- **message**: string
- **data**: object
