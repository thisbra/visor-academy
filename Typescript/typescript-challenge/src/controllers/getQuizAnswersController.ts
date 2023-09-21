import { Request, Response } from 'express';
import logRequest from '../utils/logger';
import getQuizAnswers from '../services/getQuizAnswers';
import { validateGetQuizAnswers } from '../utils/requestValidator';

async function getQuizAnswersController(req: Request, res: Response) {
  logRequest(req);

  const { error, value } = validateGetQuizAnswers(req.body);

  if (error) {
    res.status(400).json({ error: error.message });
    return;
  }

  const response = await getQuizAnswers(req.body.quizId, req.body.participantId);
  res.status(200).json(response);
}

export default getQuizAnswersController;