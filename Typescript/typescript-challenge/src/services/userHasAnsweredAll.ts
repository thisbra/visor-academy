// given quiz object and participantId, check if all questions have been answered by participant

import IQuiz from "../interfaces/IQuiz";

function userHasAnsweredAll(quiz: IQuiz, participantId: string) {
  const questions = quiz.questions;
  const answeredQuestions = questions.filter(question => question.answeredBy.includes(participantId));
  return questions.length === answeredQuestions.length;
}

export default userHasAnsweredAll;