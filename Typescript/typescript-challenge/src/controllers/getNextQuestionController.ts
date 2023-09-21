import { Request, Response } from 'express';
import logRequest from '../utils/logger';
import getNextQuestionByUser from '../services/getNextQuestionByUser';
import { validateGetNextQuestion } from '../utils/requestValidator';

async function getNextQuestionController(req: Request, res: Response) {
  logRequest(req);

  const { error, value } = validateGetNextQuestion(req.body);

  if (error) {
    res.status(400).json({ error: error.message });
    return;
  }

  const response = await getNextQuestionByUser(req.body.participantId, req.body.quizId);
  res.status(200).json(response);
}

export default getNextQuestionController;