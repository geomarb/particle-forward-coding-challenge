const morgan = require("morgan");
const logger = require("../util/logger");

morgan.token("message", (_req, res) => res.locals.errorMessage || "");
const logFormat = `method :url :status - :response-time ms`;

module.exports = {
  successLogMiddleware: morgan(logFormat, {
    skip: (_req, res) => res.statusCode >= 400,
    stream: { write: (message, _encoding) => logger.info(message.trim()) },
  }),
  errorLogMiddleware: morgan(`${logFormat} - message: :message`, {
    skip: (_req, res) => res.statusCode < 400,
    stream: { write: (message, _encoding) => logger.error(message.trim()) },
  }),
};
