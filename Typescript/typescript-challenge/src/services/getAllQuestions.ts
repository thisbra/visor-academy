import QuizData from "../models/quizData";

async function getAllQuestions() {
  const questions = await QuizData.find();
  return questions;
}

export default getAllQuestions;
