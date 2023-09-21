import { Router, Request, Response } from "express";

const statusRouter: Router = Router();

statusRouter.get('/', (req: Request, res: Response) => {
  res.send('API is running');
});

export default statusRouter;