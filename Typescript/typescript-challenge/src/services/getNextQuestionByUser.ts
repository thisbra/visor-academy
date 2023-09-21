import Quiz from "../models/quizzes";
import isAlreadyAnsweredByUser from "./isAlreadyAnsweredByUser";

async function getNextQuestionByUser(participantId: string, quizId: string) {
  try {
    const quiz = await Quiz.findById(quizId);
    if (!quiz) return `Quiz ${quizId} not found`;
    for (const question of quiz.questions) {
      if (!isAlreadyAnsweredByUser(question, participantId)) {
        return question;
      }
    }
    return'All questions answered by user. Please request results.';
  } catch (error) {
    throw (`Error on getNextQuestionByUser: ${error}`);
  }
}

export default getNextQuestionByUser;