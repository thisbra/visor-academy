import { Router, Request, Response } from "express";
import AllQuestions from "../controllers/AllQuestions";
import generateQuizController from "../controllers/generateQuizController";
import answerQuestionController from "../controllers/answerQuestionController";
import getNextQuestionController from "../controllers/getNextQuestionController";
import getQuizAnswersController from "../controllers/getQuizAnswersController";

const quizRouter: Router = Router();

quizRouter.get("/questions", AllQuestions);
quizRouter.post("/quiz", generateQuizController);
quizRouter.post("/quiz/:questionId", answerQuestionController);
quizRouter.get("/quiz/question", getNextQuestionController);
quizRouter.get("/quiz/results", getQuizAnswersController);

quizRouter.get("/test", (req: Request, res: Response) => {
  try {
    res.send('OK Check console');
  } catch (error) {
    console.log(error);
    res.send('Something went wrong');
  }
});

export default quizRouter;