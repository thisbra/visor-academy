import React from 'react';
import styled from 'styled-components';
import { QUIZ_STATE } from '../constants';

interface ProgressBarProps {
  state: keyof typeof QUIZ_STATE;
}

const ProgressBarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: white;
  padding: 1rem;
  border: 0.1rem solid #000;
  border-radius: 1rem;
  width: 25rem;
`;

const ProgressItem = styled.div<{ active: boolean; previous: boolean; unreached: boolean }>`
  position: relative;
  flex: 1;
  text-align: center;
  padding: 1rem;
  background-color: ${(props) => {
    if (props.active) return 'lightblue';
    if (props.previous) return 'lightblue';
    if (props.unreached) return 'gray';
    return 'white';
  }};
  color: ${(props) => (props.active || props.previous ? 'black' : 'inherit')};
  font-weight: ${(props) => (props.active || props.previous ? 'bold' : 'inherit')};
  margin-right: 2rem;
  border-radius: 1rem;
  &:last-child {
    margin-right: 0;
    &::before {
      content: none;
    }
  }

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 100%;
    width: 2rem;
    height: 0.4rem;
    background-color: ${(props) => {
      switch (props.active ? 'active' : props.previous ? 'previous' : props.unreached ? 'unreached' : 'default') {
        case 'active':
          return 'gray';
        case 'previous':
          return 'lightblue';
        case 'unreached':
          return 'gray';
        default:
          return 'transparent';
      }
    }};
    transform: translateY(-50%);
  }

  /* Add a thin border and box shadow to active states */
  ${(props) =>
    props.active &&
    `
    border: 0.1rem solid lightblue;
    box-shadow: 0px 0px 5px 0px black;
  `}
`;

function ProgressBar({ state }: ProgressBarProps) {
  return (
    <ProgressBarWrapper>
      <ProgressItem
        active={state === QUIZ_STATE.IDLE}
        previous={state === QUIZ_STATE.ONGOING || state === QUIZ_STATE.FINISHED}
        unreached={state !== QUIZ_STATE.IDLE && state !== QUIZ_STATE.ONGOING && state !== QUIZ_STATE.FINISHED}
      >
        Idle
      </ProgressItem>
      <ProgressItem
        active={state === QUIZ_STATE.ONGOING}
        previous={state === QUIZ_STATE.FINISHED}
        unreached={state !== QUIZ_STATE.ONGOING && state !== QUIZ_STATE.FINISHED}
      >
        Ongoing
      </ProgressItem>
      <ProgressItem
        active={state === QUIZ_STATE.FINISHED}
        previous={false}
        unreached={state !== QUIZ_STATE.FINISHED}
      >
        Finished
      </ProgressItem>
    </ProgressBarWrapper>
  );
}

export default ProgressBar;
