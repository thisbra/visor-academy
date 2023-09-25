import { Request, Response } from 'express';
import getQuizAnswers from '../services/getQuizAnswers';
import { validateGetQuizAnswers } from '../utils/requestValidator';
import machineService from '../settings';
import { QUIZ_STATE } from '../constants';

async function getQuizAnswersController(req: Request, res: Response) {

  if (machineService.getSnapshot().value === QUIZ_STATE.ONGOING) {
    res.status(404).json(`Quiz is ${machineService.getSnapshot().context.Quiz._id} still ongoing`);
    return; 
  }

  if (machineService.getSnapshot().value === QUIZ_STATE.IDLE) {
    res.status(404).json('Quiz did not start, please create a new quiz');
    return;
  }

  const response = await getQuizAnswers(req.body.quizId, req.body.participantId);
  res.status(200).json(response);
}

export default getQuizAnswersController;