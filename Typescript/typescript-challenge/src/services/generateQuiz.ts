import Quiz from "../models/quizzes";
import getRandomQuestions from "./getRandomQuestions";
import createParticipant from "./createParticipant";
import { NUMBER_OF_QUESTIONS } from "../constants";

async function generateQuiz(numberOfParticipants: number) {
  try {
    const participantIds = [];

    for (let i = 0; i < numberOfParticipants; i++) {
      const participantId = await createParticipant();
      participantIds.push(participantId);
    }

    const numberOfQuestions = NUMBER_OF_QUESTIONS; 
    const questions = await getRandomQuestions(numberOfQuestions);

    const quiz = await Quiz.create({
      participants: participantIds,
      questions,
    });

    return quiz;
  } catch (error) {
    throw error;
  }
}

export default generateQuiz;