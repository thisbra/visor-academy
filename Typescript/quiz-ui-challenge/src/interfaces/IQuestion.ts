interface IQuestion {
  _id: string;
  category: string;
  question: string;
  answers: string[];
  correctAnswer: number;
};

export default IQuestion;