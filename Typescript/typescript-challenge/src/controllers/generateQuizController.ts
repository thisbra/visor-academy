import { Request, Response } from "express";
import generateQuiz from "../services/generateQuiz";
import logRequest from "../utils/logger";
import { validateGenerateQuiz } from "../utils/requestValidator";
import machineService from "../settings";
import { QUIZ_STATE } from "../constants";

async function generateQuizController(req: Request, res: Response) {
  try {
    logRequest(req);

    const { error, value } = validateGenerateQuiz(req.body);

    if (error) {
      res.status(400).json({ error: error.message });
      return;
    }

    const numberOfParticipants = req.body.numberOfParticipants;

    
    if (machineService.getSnapshot().value === QUIZ_STATE.IDLE) {
      
      let quiz = await generateQuiz(numberOfParticipants);
      if (!quiz) {
        res.status(404).json({ error: "Something went wrong while generating the quiz" });
        return;
      }
      machineService.send({ type: 'GENERATED', value: quiz });
      res.status(200).json(quiz);
      return;
    }

    if (machineService.getSnapshot().value === QUIZ_STATE.ONGOING) {
      res.status(404).json(`Quiz is ${machineService.getSnapshot().context.Quiz._id} ongoing`);
      return; 
    }
  
    if (machineService.getSnapshot().value === QUIZ_STATE.FINISHED) {
      res.status(404).json('Quiz already finished, request answers');
      return;
    }
  } catch (error: any) {
    console.log(error);
    res.status(500).json('Something went wrong while generating the quiz');
  }
}

export default generateQuizController