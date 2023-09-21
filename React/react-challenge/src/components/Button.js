import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ButtonWrapper = styled.button`
  padding: 8px 16px;
  font-size: 16px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 500;
  cursor: pointer;
  border: none;
  border-radius: 0.6rem;
  outline: none;
  border: 2px solid transparent;
  width: fit-content;
  
  ${(props) => props.variant === 'filled'
  && `background-color: ${props.theme.colors.pBlack};
    color: ${props.theme.colors.pWhite};
  `}

  ${(props) => props.variant === 'outlined'
    && `background-color: ${props.theme.colors.pWhite};
    color: ${props.theme.colors.pBlack};
    border: 2px solid ${props.theme.colors.pBlack};
  `}

  &:hover {
    ${(props) => props.variant === 'filled'
    && `background-color: ${props.theme.colors.pWhite};
      color: ${props.theme.colors.pBlack};
      border: 2px solid ${props.theme.colors.pBlack}
    `}

    ${(props) => props.variant === 'outlined'
    && `background-color: ${props.theme.colors.pBlack};
      color: ${props.theme.colors.pWhite};
    `}
  }
`;

function Button({
  onClick,
  variant,
  value,
  link
}) {
  if (link) {
    return (
      <a href={link}>
        <ButtonWrapper variant={variant} onClick={onClick}>
          {value}
        </ButtonWrapper>
      </a>
    );
  }
  return (
    <ButtonWrapper variant={variant} onClick={onClick}>
      {value}
    </ButtonWrapper>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
  variant: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  link: PropTypes.string
};

Button.defaultProps = {
  onClick: () => {},
  link: null
};

export default Button;
