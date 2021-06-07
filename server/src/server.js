const express = require("express");
const cors = require("cors");

const routes = require("./routes");
const {
  successLogMiddleware,
  errorLogMiddleware,
} = require("./middleware/logMiddleware");

const server = express({
  inflate: false,
  limit: "50kb",
  strict: false,
  type: "application/json",
});

server.use(cors());
server.use(express.urlencoded({ extended: true }));
server.use(express.json());
server.use(routes);

server.use(successLogMiddleware);
server.use(errorLogMiddleware);

module.exports = server;
