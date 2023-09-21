import React from 'react';
import { styled, useTheme } from 'styled-components';
import PropTypes from 'prop-types';

import githubLockIcon from '../../../assets/images/githubLockIcon.png';
import githubBookIcon from '../../../assets/images/githubBookIcon.png';

const PrivacyLabelWrapper = styled.div`
  height: 2rem;
  display: flex;
  align-items: 'center';
  font-weight: 600;
  font-size: 0.9rem;
`;

function PrivacyLabel({ isPrivate }) {
  const theme = useTheme();

  return (
    <PrivacyLabelWrapper>
      {isPrivate && (
        <div style={{
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#dec866',
          borderRadius: '0.6rem',
          padding: '0.4rem'
        }}
        >
          <img src={githubLockIcon} alt="Lock icon" height="20px" />
          <p>Private</p>
        </div>
      )}

      {!isPrivate && (
        <div style={{
          display: 'flex',
          alignItems: 'center',
          backgroundColor: theme.colors.pGrey,
          borderRadius: '0.6rem',
          padding: '0.5rem'
        }}
        >
          <img src={githubBookIcon} alt="Book icon" height="20px" />
          <div>Public</div>
        </div>
      )}
    </PrivacyLabelWrapper>
  );
}

PrivacyLabel.propTypes = {
  isPrivate: PropTypes.bool.isRequired
};

export default PrivacyLabel;
