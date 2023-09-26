import { MouseEvent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ButtonWrapper = styled.button<{ variant: 'filled' | 'outlined' }>`
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

interface ButtonProps {
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  variant: 'filled' | 'outlined';
  value: string;
  link?: string;
}

function Button({
  onClick,
  variant,
  value,
  link,
}: ButtonProps) {
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      onClick(event);
    }
  };

  if (link) {
    return (
      <a href={link}>
        <ButtonWrapper variant={variant} onClick={handleClick}>
          {value}
        </ButtonWrapper>
      </a>
    );
  }

  return (
    <ButtonWrapper variant={variant} onClick={handleClick}>
      {value}
    </ButtonWrapper>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(['filled', 'outlined']).isRequired,
  value: PropTypes.string.isRequired,
  link: PropTypes.string,
};

Button.defaultProps = {
  onClick: () => {},
  link: undefined,
};

export default Button;
