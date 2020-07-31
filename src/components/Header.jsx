import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 12px;
  text-align: center;
  justify-content: center;
`;

const Name = styled.h1`
  font-weight: 600;
  font-style: 'normal';
  font-size: 14px;
`;
const Featured = styled.h1`
  font-size: 12px;
  color: #ff8f00;
`;

function Header({ name, featured }) {
  return (
    <Wrapper>
      <Name>{name}</Name>
      {featured ? <Featured>Hot & Featured</Featured> : null}
    </Wrapper>
  );
}

export default Header;
