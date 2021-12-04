
import winston from 'winston'

const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  debug: 4,
}

const level = () => {
  const env = process.env.NODE_ENV || 'development'
  return env === 'development' ? 'debug' : 'warn'
}

const filter = (level: any) => winston.format((info: any) => {
  if (info.level === level) {
    return info;
  }
})();

const colors = {
  error: 'red',
  warn: 'yellow',
  info: 'green',
  http: 'magenta',
  debug: 'white',
}

winston.addColors(colors)

const format = winston.format.combine(
  winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }),
  winston.format.colorize({ all: true }),
  winston.format.printf(
    (info) => `${info.timestamp} ${info.level}: ${info.message}`,
  ),
)

const transports = [
  new winston.transports.File({
    filename: "logs/error.log",
    level: "error",
    format: winston.format.combine(
      winston.format.timestamp(),
      winston.format.json()
    )
  }),
  
  new winston.transports.File({
    filename: "logs/combined.log",
    level: "info",
    format: winston.format.simple()
  }),
  
  new winston.transports.File({
    filename: "logs/http.log",
    level: "http",
    format: filter("http"),
  }),
  
  new winston.transports.Console({
    level: "debug",
    format: winston.format.combine(
      filter("debug"),
      winston.format.colorize(),
      winston.format.timestamp(),
      winston.format.simple()
    )
  }),
]

const Logger = winston.createLogger({
  level: level(),
  levels,
  format,
  transports,
})

export default Logger