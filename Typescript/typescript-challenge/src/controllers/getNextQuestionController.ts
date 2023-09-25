import { Request, Response } from 'express';
import logRequest from '../utils/logger';
import getNextQuestionByUser from '../services/getNextQuestionByUser';
import { validateGetNextQuestion } from '../utils/requestValidator';
import machineService from '../settings';
import { QUIZ_STATE } from '../constants';

async function getNextQuestionController(req: Request, res: Response) {
  logRequest(req);

  const { error, value } = validateGetNextQuestion(req.body);

  if (error) {
    res.status(400).json({ error: error.message });
    return;
  }

  if (machineService.getSnapshot().value === QUIZ_STATE.IDLE) {
    res.status(404).json('Quiz did not start, please create a new quiz');
    return; 
  }

  if (machineService.getSnapshot().value === QUIZ_STATE.FINISHED) {
    res.status(404).json('Quiz already finished, request answers');
    return;
  }

  const response = await getNextQuestionByUser(req.body.participantId, req.body.quizId);
  res.status(200).json(response);
}

export default getNextQuestionController;