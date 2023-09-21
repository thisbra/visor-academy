import { Request, Response } from "express";
import generateQuiz from "../services/generateQuiz";
import logRequest from "../utils/logger";
import { validateGenerateQuiz } from "../utils/requestValidator";

async function generateQuizController(req: Request, res: Response) {
  try {
    logRequest(req);

    const { error, value } = validateGenerateQuiz(req.body);

    if (error) {
      res.status(400).json({ error: error.message });
      return;
    }

    const numberOfParticipants = req.body.numberOfParticipants;

    const quiz = await generateQuiz(numberOfParticipants);

    if (!quiz) {
      res.status(404).json({ error: "Something went wrong while generating the quiz" });
      return;
    }

    res.status(200).json(quiz);
  } catch (error: any) {
    console.log(error);
    res.status(500).json('Something went wrong while generating the quiz');
  }
}

export default generateQuizController