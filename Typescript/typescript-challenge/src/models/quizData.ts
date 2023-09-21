import { Schema, model } from "mongoose";
import IQuestion from "../interfaces/IQuestion";

interface IQuizData {
  questions: IQuestion[];
}

const QuizDataSchema = new Schema<IQuizData>({
  questions: [{
    category: String,
    question: String,
    answers: [String],
    correctAnswer: Number
  }]
});

const QuizData = model<IQuizData>('QuizData', QuizDataSchema);

export default QuizData;
