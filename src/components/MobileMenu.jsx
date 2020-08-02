import React, { useState } from 'react';
import styled from 'styled-components';
import { slide as Menu } from 'react-burger-menu';
import { ReactComponent as Icon } from '../svg/open-menu.svg';
import styles from '../style/styles';
import { ReactComponent as FireTrending } from '../svg/fire-trending.svg';

const StickyBoxWrap = styled.div`
  display: flex;
`;
const BurgerIcon = styled(Icon)``;
const Test = styled.div`
  display: flex;
  padding-right: 20px;
  align-items: center;
  justify-content: space-evenly;
`;

function MobileMenu() {
  const [isOpened, setisOpened] = useState(false);

  // eslint-disable-next-line no-shadow
  const isMenuOpen = ({ isOpened }) => {
    setisOpened(isOpened);
  };
  return (
    <StickyBoxWrap>
      <BurgerIcon onClick={() => setisOpened(true)} />

      <Menu right isOpen={isOpened} onStateChange={isMenuOpen} styles={styles}>
        <div>
          <FireTrending />
          <h1 style={{ paddingLeft: '15px' }}>Feed</h1>
        </div>
      </Menu>
    </StickyBoxWrap>
  );
}

export default MobileMenu;
