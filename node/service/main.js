import autoload from "@fastify/autoload";

export default async function (fastify, opts) {
  fastify.register(autoload, {
    dir: "routes",
    options: Object.assign({}, opts),
  });
}
