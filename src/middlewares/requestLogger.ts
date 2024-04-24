import { convertToHumanFriendlyDate } from "../utils";

const requestLogger = (req, res, next) => {
    const start = Date.now();
    const { method, url, ip } = req;
    res.on('finish', () => {
      const duration = Date.now() - start;
      console.log(`\n[${convertToHumanFriendlyDate(new Date())}] (${ip}) - (${res.statusCode}) - ${method} ${url} - ${duration}ms\n`);
    });
    next();
  };
  
  export default requestLogger;  