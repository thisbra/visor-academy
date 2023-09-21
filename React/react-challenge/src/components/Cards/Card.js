import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import PrivacyLabel from './CardContent/PrivacyLabel';
import Button from '../Button';
import CardTitle from './CardContent/CardTitle';

const CardWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.pWhite};
  color: ${(props) => props.theme.colors.pBlack};
  border-radius: 1.5rem;
  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
  padding: 0.4rem 1.5rem;
  width: 18rem;
  height: 12rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: start;
`;

function Card({ cardTitle, isPrivate }) {
  return (
    <CardWrapper>
      <CardTitle cardTitle={cardTitle} />
      <PrivacyLabel isPrivate={isPrivate} />
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '0.5rem'
      }}
      >
        <Button variant="filled" value="Edit README" link={`/edit/${cardTitle}`} />
      </div>
    </CardWrapper>
  );
}

Card.propTypes = {
  cardTitle: PropTypes.string.isRequired,
  isPrivate: PropTypes.bool.isRequired
};

export default Card;
