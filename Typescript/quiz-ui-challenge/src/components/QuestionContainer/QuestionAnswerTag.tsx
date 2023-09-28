import React from 'react';
import styled from 'styled-components';

interface QuestionContainerProps {
  answer: string; 
}

interface AnswerTagWrapperProps {
  theme: {
    colors: {
      pGrey: string;
      pBlack: string;
      pLightBlue: string;
      pDarkBlue: string;
    };
  };
}

const AnswerTagWrapper = styled.div<AnswerTagWrapperProps>`
  display: flex;
  background-color: ${(props) => props.theme.colors.pLightBlue};
  padding: 1rem;
  border-radius: 1rem;
  text-align: center;
  color: white;
  &:hover {
    background-color: ${(props) => props.theme.colors.pDarkBlue};
  }
`;

const QuestionAnswerTag: React.FC<QuestionContainerProps> = ({ answer }) => {
  const handleAnswerClick = async () => {

  }

  return (
    <AnswerTagWrapper>
      {answer}
    </AnswerTagWrapper>
  );
};


export default QuestionAnswerTag;
