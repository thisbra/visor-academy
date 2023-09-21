import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Button from './Button';

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: ${(props) => (props.open ? 'visible' : 'hidden')};
  opacity: ${(props) => (props.open ? 1 : 0)};
  transition: visibility 0s, opacity 0.5s linear;
`;

const DialogWrapper = styled.div`
  border: none;
  width: 30rem;
  height: 10rem;
  background-color: ${(props) => props.theme.colors.pWhite};
  border-radius: 1.5rem;
  padding: 1.5rem;
`;

function Dialog({ message, open, onClose }) {
  return (
    <Container open={open}>
      <DialogWrapper>
        <h2 style={{ marginBottom: '3rem' }}>{message}</h2>
        <Button variant="filled" value="Close" onClick={onClose} />
      </DialogWrapper>
    </Container>
  );
}

Dialog.propTypes = {
  message: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};

export default Dialog;
