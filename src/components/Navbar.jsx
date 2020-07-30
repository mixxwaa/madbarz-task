import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Logo } from '../svg/logo.svg';

const NavHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 10%;
`;
const NavLogo = styled(Logo)`
  width: 6rem;
  cursor: pointer;
`;
const NavLinks = styled.ul`
  list-style: none;
`;
const NavListItems = styled.li`
  display: inline-block;
  padding: 0px 20px;
`;

function Navbar() {
  return (
    <NavHeader>
      <NavLogo />
      <nav>
        <NavLinks>
          <NavListItems>Feed</NavListItems>
          <NavListItems>Profile</NavListItems>
          <NavListItems>Sign-Out</NavListItems>
        </NavLinks>
      </nav>
    </NavHeader>
  );
}

export default Navbar;
