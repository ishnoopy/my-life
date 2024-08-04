const winston = require('winston');
const fs = require('fs');
const path = require('path');


// Create the logs directory if it doesn't exist
const logDir = 'logs';
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

const customConsoleFormat = winston.format.printf(({ level, message, timestamp, ...meta }) => {
  return `${timestamp} [${level}]: ${message} ${JSON.stringify(meta, null, 2)}`;
})

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.timestamp(),
        customConsoleFormat
      )
    }),
    new winston.transports.File({
      filename: path.join(logDir, 'info.log'),
      level: 'info',
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
      )
    }),
    new winston.transports.File({
      filename: path.join(logDir, 'error.log'),
      level: 'error',
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
      )
    })
  ]
})

const loggerMiddleware = (req, res, next) => {
  const start = Date.now();

  res.on('finish', () => {
    const duration = Date.now() - start;
    logger.info('HTTP Request Log', {
      method: req.method,
      url: req.originalUrl || req.url,
      status: res.statusCode,
      responseTime: `${duration}ms`,
      ip: req.ip,
      userAgent: req.headers['user-agent'],
      body: req.body
    })
  })

  next()
}


async function logError(error) {
  const stackTrace = await import('stack-trace');

  const trace = stackTrace.parse(error);
  const formattedStack = trace.map((frame) => {
    return {
      file: frame.getFileName(),
      line: frame.getLineNumber(),
      function: frame.getFunctionName()
    }
  })

  logger.error('Error Log', {
    message: error.message,
    stack: formattedStack
  })
}

module.exports = { logger, loggerMiddleware, logError }