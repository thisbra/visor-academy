import { Request, Response } from 'express';
import getQuizByQuizId from '../services/getQuizByQuizId';

async function getQuizByQuizIdController(req: Request, res: Response) {
  try {
    const response = await getQuizByQuizId(req.params.quizId)
    res.status(200).json(response);
  } catch (error: any) {
    console.log(error);
    res.status(500).json('Something went wrong while getting your quiz');
  }
}

export default getQuizByQuizIdController;
