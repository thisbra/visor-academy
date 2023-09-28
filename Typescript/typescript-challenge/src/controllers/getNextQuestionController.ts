import { Request, Response } from 'express';
import getNextQuestionByUser from '../services/getNextQuestionByUser';
import machineService from '../settings';
import { QUIZ_STATE } from '../constants';

async function getNextQuestionController(req: Request, res: Response) {

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