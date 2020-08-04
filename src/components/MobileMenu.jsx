import React, { useState } from 'react';
import styled from 'styled-components';
import { slide as Menu } from 'react-burger-menu';

import styles from '../style/styles';
import { ReactComponent as FireTrending } from '../svg/fire-trending.svg';

const StickyBoxWrap = styled.div`
  display: flex;
`;
const BurgerIcon = styled.img`
  width: 30px;
`;

const MenuText = styled.h1`
  padding-left: 15px;
  font-size: 15px;
`;
const MobileMenuWrapper = styled.div`
  margin-bottom: 20px;
`;

function MobileMenu() {
  const [isOpened, setisOpened] = useState(false);

  // eslint-disable-next-line no-shadow
  const isMenuOpen = ({ isOpened }) => {
    setisOpened(isOpened);
  };
  return (
    <StickyBoxWrap>
      <BurgerIcon
        src="https://img.icons8.com/material-two-tone/48/000000/menu.png"
        alt="Menu"
        onClick={() => setisOpened(true)}
      />

      <Menu right isOpen={isOpened} onStateChange={isMenuOpen} styles={styles}>
        <MobileMenuWrapper>
          <FireTrending />
          <MenuText>Feed</MenuText>
        </MobileMenuWrapper>
        <MobileMenuWrapper>
          <img
            src="https://img.icons8.com/material-outlined/24/000000/user-male-circle.png"
            alt=""
          />
          <MenuText>Profile</MenuText>
        </MobileMenuWrapper>
        <MobileMenuWrapper>
          <img src="https://img.icons8.com/ios/24/000000/exit.png" alt="" />
          <MenuText>Sign out</MenuText>
        </MobileMenuWrapper>
      </Menu>
    </StickyBoxWrap>
  );
}

export default MobileMenu;
