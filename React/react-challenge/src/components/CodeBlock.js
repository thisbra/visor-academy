import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  width: 55%;
`;

const CodeBlockWrapper = styled.textarea`
  width: 100%;
  min-height: 15rem;
  font-family: 'Consolas';
  font-size: 0.8rem;
  font-weight: 500;
  color: white;
  background-color: #0d1117;
  border-radius: 1.5rem;
  border: none;
  padding: 1.4rem;
  resize: vertical;
  box-shadow: 6px 6px 6px 0px rgba(0,0,0,0.75);
`;

const adjustSize = (elementId) => {
  if (document.getElementById(elementId)) {
    const element = document.getElementById(elementId);
    element.style.height = `${element.value.split(/\r\n|\r|\n/).length * 1.1}rem`;
  }
};

function CodeBlock({ ReadmeContent }) {
  const [content, setContent] = useState(ReadmeContent);
  useEffect(() => {
    setContent(ReadmeContent);
    adjustSize('blank-paper-textarea');
  }, [ReadmeContent]);

  const handleInput = (event) => {
    setContent(event.target.value);
    adjustSize('blank-paper-textarea');
  };

  return (
    <Container>
      <CodeBlockWrapper
        id="blank-paper-textarea"
        value={content}
        onChange={handleInput}
      />
    </Container>
  );
}

CodeBlock.propTypes = {
  ReadmeContent: PropTypes.string.isRequired
};

export default CodeBlock;
