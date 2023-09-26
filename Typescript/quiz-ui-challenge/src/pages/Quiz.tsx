import BodyWrap from "../components/BodyWrapper";
import ProgressBar from "../components/ProgressBar";
import { QUIZ_STATE } from "../constants";

function Quiz() {
    return (
      <BodyWrap>
        <div>Quiz</div>
        <ProgressBar state={QUIZ_STATE.ONGOING}/>
      </BodyWrap>
    );
}

export default Quiz;