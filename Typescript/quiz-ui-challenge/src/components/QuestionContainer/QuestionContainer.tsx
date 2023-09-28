import React from 'react';
import styled from 'styled-components';
import IQuizQuestion from '../../interfaces/IQuizQuestion';
import QuestionAnswerTag from './QuestionAnswerTag';

interface QuestionContainerProps {
  quizQuestion: IQuizQuestion; 
}

const QuestionContainerWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: white;
  padding: 1rem;
  border-radius: 1rem;
  width: 25rem;
  color: black;
  margin-top: 5rem;
`;

const AnswersGrid = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 1rem;
`;


const QuestionContainer: React.FC<QuestionContainerProps> = ({ quizQuestion }) => {
  return (
    <QuestionContainerWrapper>
      {quizQuestion.question}
      <AnswersGrid>
        {quizQuestion.answers.map((answer) => (
          <QuestionAnswerTag answer={answer}/>
        ))}
      </AnswersGrid>
    </QuestionContainerWrapper>
  );
};


export default QuestionContainer;
