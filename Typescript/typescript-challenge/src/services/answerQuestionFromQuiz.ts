import Quiz from "../models/quizzes";
import addParticipantOnAnswered from "./addParticipantOnAnswered";
import getQuestionFromQuiz from "./getQuestionFromQuiz";
import isAlreadyAnsweredByUser from "./isAlreadyAnsweredByUser";

async function answerQuestionFromQuiz(quizId: string, questionId: string, participantId: string, answer: number) {
  try {
    const question = await getQuestionFromQuiz(quizId, questionId);
    if (!question) return 'Question or Quiz not found';
    if (isAlreadyAnsweredByUser(question, participantId)) {
      return `Question already answered by user ${participantId}`;
    }
    if (question.correctAnswer !== answer) {
      return `${answer} is a Wrong answer`;
    }
    if (question.correctAnswer === answer) {
      addParticipantOnAnswered(quizId, questionId, participantId);
      return `${answer} is a Correct answer.`;
    }
  } catch (error) {
    throw (`Error on answerQuestionFromQuiz: ${error}`);
  }
}

export default answerQuestionFromQuiz;