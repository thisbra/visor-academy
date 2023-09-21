import { Schema, model } from "mongoose";
import IQuiz from "../interfaces/IQuiz";

const QuizSchema = new Schema<IQuiz>({
  questions: [{
    category: String,
    question: String,
    answers: [String],
    correctAnswer: Number,
    answeredBy: [String]
  }]
});

const Quiz = model<IQuiz>('Quiz', QuizSchema);

export default Quiz;
