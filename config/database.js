const knex = require("knex");

const database = knex({
  client: "pg",
  connection: "postgres://postgres:JuliusA132435@127.0.0.1:5432/postgres", // url postgres
  searchPath: ["public"], // schema
});

module.exports = database;
