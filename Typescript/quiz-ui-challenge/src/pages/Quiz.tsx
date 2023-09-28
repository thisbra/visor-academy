import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BodyWrap from "../components/BodyWrapper";
import ProgressBar from "../components/ProgressBar";
import QuestionContainer from "../components/QuestionContainer/QuestionContainer";
import { QUIZ_STATE } from "../constants";
import IQuiz from "../interfaces/IQuiz";
import getRequest from "../utils/getRequest";
import Loading from "../components/Loading";

function Quiz() {

  const { quizId } = useParams<{ quizId: string }>();

  const [isLoading, setIsLoading] = useState(true);
  const [quiz, setQuiz] = useState({} as IQuiz);

  useEffect(() => {
    const getQuiz = async () => {
      try {
        const response = await getRequest(`/api/quizInfo/${quizId}`);
        const data = await response.json();
        setQuiz(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    getQuiz();
  }, []);

  if (isLoading) return (
    <BodyWrap>
      <Loading />
    </BodyWrap>
  )

  return (
    <BodyWrap>
      <div>Quiz</div>
      <ProgressBar state={QUIZ_STATE.ONGOING}/>
      <QuestionContainer quizQuestion={quiz.questions[0]}/>
    </BodyWrap>
  );
}

export default Quiz;