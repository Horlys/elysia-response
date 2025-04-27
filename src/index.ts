import { Elysia } from "elysia";

export interface Response {
  status: number;
  message: string;
  data: object;
}

export const response = new Elysia().derive(
  { as: "global" },
  function derive({ error }) {
    return {
      respond: (status: number, message: string, data: object = {}) => {
        if (status !== 200)
          return error(status, {
            status,
            message,
            data,
          });
        return {
          status,
          message,
          data,
        };
      },
    };
  },
);
