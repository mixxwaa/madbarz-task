import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ReactComponent as Logo } from '../svg/logo.svg';
import MobileMenu from './MobileMenu';

const NavHeader = styled.header`
  position: fixed;
  overflow: hidde
  height: 1vh;
  z-index: 999;
  background-color: white;
  border-bottom: 1px solid #ccc;
  width: 100%;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const NavLogo = styled(Logo)`
  height: 15px;
  cursor: pointer;
  object-fit: cover;
`;
const NavLinks = styled.ul`
  list-style: none;
`;
const NavListItems = styled.li`
  display: inline-block;
  padding: 0px 20px;
`;

function Navbar() {
  const [isMobile, setisMobile] = useState(null);

  const changeMobile = () => {
    window.matchMedia('(max-width: 50em)').matches
      ? setisMobile(true)
      : setisMobile(false);
  };

  useEffect(() => {
    changeMobile();
    window.addEventListener('resize', changeMobile);
    return () => window.removeEventListener('resize', changeMobile);
  }, []);
  return (
    <>
      <NavHeader>
        <NavLogo />
        {isMobile ? (
          <MobileMenu />
        ) : (
          <>
            <nav>
              <NavLinks>
                <NavListItems style={{ fontWeight: 'bold' }}>Feed</NavListItems>
                <NavListItems>Profile</NavListItems>
                <NavListItems>Sign-Out</NavListItems>
              </NavLinks>
            </nav>
          </>
        )}
      </NavHeader>
    </>
  );
}

export default Navbar;
