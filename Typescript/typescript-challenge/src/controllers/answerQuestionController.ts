import { Request, Response } from "express";
import answerQuestionFromQuiz from "../services/answerQuestionFromQuiz";
import logRequest from "../utils/logger";
import { validateAnswerQuestion } from "../utils/requestValidator";
import machineService from "../settings";
import { QUIZ_STATE } from "../constants";

async function answerQuestionController(req: Request, res: Response) {
  try {
    logRequest(req);

    const { error, value } = validateAnswerQuestion(req.body);

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

    const response = await answerQuestionFromQuiz(req.body.quizId, req.params.questionId, req.body.participantId, req.body.answer)
    res.status(200).json(response);
  } catch (error: any) {
    console.log(error);
    res.status(500).json('Something went wrong while answering the question');
  }
}

export default answerQuestionController;