import Quiz from "../models/quizzes";
import isAlreadyAnsweredByUser from "./isAlreadyAnsweredByUser";

async function getQuizAnswers(quizId: string, participantId: string) {
  try {
    const quiz = await Quiz.findById(quizId);
    if (!quiz) return `Quiz ${quizId} not found`;
    for (const question of quiz.questions) {
      if (!isAlreadyAnsweredByUser(question, participantId)) {
        return `There are questions left for user ${participantId}`;
      }
    }
    let answers: string[] = [];
    // append answers array with correct answers from quiz
    quiz.questions.forEach((question) => {
      answers.push(question.answers[question.correctAnswer]);
    });
    return answers
  } catch (error) {
    throw (`Error on getNextQuestionByUser: ${error}`);
  }
}

export default getQuizAnswers;