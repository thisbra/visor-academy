import IQuestion from "./IQuestion";

interface IQuizQuestion extends IQuestion{
  answeredBy: string[];
};

export default IQuizQuestion;