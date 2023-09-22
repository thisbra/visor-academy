import { Request, Response } from "express";
import getAllQuestions from "../services/getAllQuestions";

async function getAllQuestionsController(req: Request, res: Response) {
  try {
    const questions = await getAllQuestions();

    if (!questions) {
      res.status(404).json({ error: "Questions not found" });
    }

    res.status(200).json(questions);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}

export default getAllQuestionsController;