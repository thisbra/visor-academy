import styled from 'styled-components';

const LoadingContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1c273e
`;

const LogoSpinner = styled.h3`
  animation: spin 1s ease-in-out infinite;
  font-size: 4em; // Increase the font size to make the question mark bigger
  color: white; // Set the text color
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

function Loading() {
  return (
    <LoadingContainer>
      <LogoSpinner>
        <span role="img" aria-label="logo">
          ?
        </span>
      </LogoSpinner>
    </LoadingContainer>
  );
}

export default Loading;
