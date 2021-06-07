require("dotenv").config();

const server = require("./src/server");
const logger = require("./src/util/logger");

const port = process.env.PORT ? process.env.PORT : 3080;

server.listen(port, () =>
  logger.info(`"${process.env.npm_package_name}" running on o port "${port}" `),
);
