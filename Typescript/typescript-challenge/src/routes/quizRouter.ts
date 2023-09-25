import { Router, Request, Response } from "express";
import getAllQuestionsController from "../controllers/getAllQuestionsController";
import generateQuizController from "../controllers/generateQuizController";
import answerQuestionController from "../controllers/answerQuestionController";
import getNextQuestionController from "../controllers/getNextQuestionController";
import getQuizAnswersController from "../controllers/getQuizAnswersController";
import { validateAnswerQuestion, validateGenerateQuiz, validateGetNextQuestion, validateGetQuizAnswers } from "../utils/requestValidator";

const quizRouter: Router = Router();

quizRouter.get("/questions", getAllQuestionsController);
quizRouter.post("/quiz", validateGenerateQuiz, generateQuizController);
quizRouter.post("/quiz/:questionId", validateAnswerQuestion, answerQuestionController);
quizRouter.get("/quiz/question", validateGetNextQuestion, getNextQuestionController);
quizRouter.get("/quiz/results", validateGetQuizAnswers, getQuizAnswersController);

quizRouter.get("/test", (req: Request, res: Response) => {
  try {
    res.send('OK Check console');
  } catch (error) {
    console.log(error);
    res.send('Something went wrong');
  }
});

export default quizRouter;
