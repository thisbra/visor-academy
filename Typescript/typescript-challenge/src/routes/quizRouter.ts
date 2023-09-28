import { Router } from "express";
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

export default quizRouter;
