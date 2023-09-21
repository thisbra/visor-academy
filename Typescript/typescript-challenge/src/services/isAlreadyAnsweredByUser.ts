import IQuizQuestion from "../interfaces/IQuizQuestion";

function isAlreadyAnsweredByUser(question: IQuizQuestion, participantId: string) {
  try {
    if (question.answeredBy.includes(participantId)) {
      return true;
    }
    return false;
  } catch (error) {
    throw (`Error on isAlreadyAnsweredByUser: ${error}`);
  }
}

export default isAlreadyAnsweredByUser;