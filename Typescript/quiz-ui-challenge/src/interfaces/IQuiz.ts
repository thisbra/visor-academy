import IQuizQuestion from "./IQuizQuestion";

interface IQuiz {
  _id: string;
  participants: string[];
  questions: IQuizQuestion[];
  createdAt: Date;
}

export default IQuiz;