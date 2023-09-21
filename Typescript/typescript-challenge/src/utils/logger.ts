import { Request } from 'express';

function logRequest(req: Request) {
  let logMessage = `[${new Date().toLocaleString()}] ${req.method} REQUEST: ${req.url}`;
  if (req.body) {
    logMessage += `\n\tBODY: ${JSON.stringify(req.body)}`;
  }

  console.log(logMessage);
}

export default logRequest;