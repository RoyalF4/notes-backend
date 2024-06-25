import morgan from 'morgan';
import { Request } from 'express-serve-static-core';

export default function logger() {
  morgan.token('body', (req: Request) => {
    return req.method === 'POST' ? JSON.stringify(req.body) : '';
  });

  return morgan(
    ':method :url :status :res[content-length] - :response-time ms :body'
  );
}
