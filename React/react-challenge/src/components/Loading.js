import React from 'react';
import styled from 'styled-components';
import gitdocsLogo from '../assets/images/gitdocs.png';

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LogoSpinner = styled.img`
  animation: spin 1s ease-in-out infinite;
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

function Loading() {
  return (
    <Container>
      <LogoSpinner src={gitdocsLogo} alt="GitDocs Logo" height="50px" />
    </Container>
  );
}

export default Loading;
