import styled from 'styled-components';
import { ReactNode } from 'react';

interface ThemeProps {
  children: ReactNode;
}

const BodyWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.pDarkBlue};
  color: ${(props) => props.theme.colors.pWhite};
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 3rem;
`;

function BodyWrap({ children }: ThemeProps) {
  return (
    <BodyWrapper>
      {children}
    </BodyWrapper>
  );
}

export default BodyWrap;
