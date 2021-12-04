import {Request, Response, NextFunction} from 'express';

async function checkHealth(req: Request, res: Response, next: NextFunction) {
  const message = {
    message: 'ok'
  }
  res.status(200).send(message)
}

export default {
  checkHealth
}