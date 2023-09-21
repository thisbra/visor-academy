import { Request, Response } from "express";
import answerQuestionFromQuiz from "../services/answerQuestionFromQuiz";
import logRequest from "../utils/logger";
import { validateAnswerQuestion } from "../utils/requestValidator";

async function answerQuestionController(req: Request, res: Response) {
  try {
    logRequest(req);

    const { error, value } = validateAnswerQuestion(req.body);

    if (error) {
      res.status(400).json({ error: error.message });
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