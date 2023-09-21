import React from 'react';
import styled from 'styled-components';
import gitdocsLogo from '../assets/images/gitdocs.png';

const NavWrapper = styled.nav`
  background-color: ${(props) => props.theme.colors.pGrey};
  color: ${(props) => props.theme.colors.pBlack};
  margin: 0px;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 5px 80px;
  font-size: 1.5rem;
  font-weight: 700;
`;

function Navbar() {
  return (
    <NavWrapper>
      <a href="/">
        <img src={gitdocsLogo} alt="GitDocs Logo" height="40px" />
      </a>
      <a href="/" style={{ textDecoration: 'none', color: '#231f20' }}>
        <p>GitDocs</p>
      </a>
    </NavWrapper>
  );
}

export default Navbar;
