import Quiz from "../models/quizzes";

async function getQuestionFromQuiz(quizId: string, questionId: string) {
  try {
    const quiz = await Quiz.findById(quizId);
    if (!quiz) return;
    const question = quiz.questions.find((question) => question._id.toString() === questionId);
    return question;
  } catch (error) {
    throw error;
  }
}

export default getQuestionFromQuiz;