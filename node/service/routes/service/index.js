"use strict";

export default async function (fastify, opts) {
  fastify.get("/", async function (request, reply) {
    return { frameworks: [".NET Core, Node.js, React"] };
  });
}
