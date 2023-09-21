import React from 'react';
import { styled } from 'styled-components';
import PropTypes from 'prop-types';

import githubLogo from '../../../assets/images/githubLogo.png';

const CardTitleWrapper = styled.a`
  height: 2rem;
  display: flex;
  align-items: 'center';
  font-family: 'Consolas';
  font-size: 1.2rem;
  font-weight: 600;
  margin-top: 0.3rem;
  color: ${(props) => props.theme.colors.pBlack};
  text-decoration: none;
  cursor: pointer;
  &:hover {
      text-decoration: underline;
    }
`;

function CardTitle({ cardTitle }) {
  const githubUrl = `https://github.com/thisbra/${cardTitle}`;

  return (
    <CardTitleWrapper href={githubUrl}>
      <img src={githubLogo} alt="Logo icon" height="20px" />
      <div>
        /
        { cardTitle }
      </div>
    </CardTitleWrapper>
  );
}

CardTitle.propTypes = {
  cardTitle: PropTypes.string.isRequired
};

export default CardTitle;
