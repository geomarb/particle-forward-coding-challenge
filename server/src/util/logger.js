const winston = require("winston");

const enumerateErrorFormat = winston.format((info) => {
  if (info instanceof Error) {
    Object.assign(info, { message: info.stack });
  }
  return info;
});

const logger = winston.createLogger({
  format: winston.format.combine(
    enumerateErrorFormat(),
    winston.format.splat(),
    winston.format.timestamp(),
    winston.format.printf(
      ({ level, message, timestamp }) => `${timestamp}-${level}: ${message}`,
    ),
  ),
  transports: [
    new winston.transports.File({
      level: "info",
      filename: `logs/${process.env.NODE_ENV}/server.log`,
      handleExceptions: true,
      maxsize: 5 * 1024 * 1024,
      maxFiles: 10,
      colorize: false,
    }),
  ],
  exitOnError: false,
});

if (process.env.NODE_ENV === "development") {
  logger.add(
    new winston.transports.Console({
      handleExceptions: true,
      format: winston.format.combine(winston.format.colorize({ all: true })),
    }),
  );
}

module.exports = logger;
