import Quiz from "../models/quizzes";

async function getQuizByQuizId(quizId: string) {
  try {
    const quiz = await Quiz.findById(quizId);
    if (!quiz) return `Quiz ${quizId} not found`;
    
    return quiz;
  } catch (error) {
    throw (`Error on getQuizByQuizId: ${error}`);
  }
}

export default getQuizByQuizId;