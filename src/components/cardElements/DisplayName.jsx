import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 12px;
  text-align: left;
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

function DisplayName({ user, workout }) {
  return (
    <Wrapper>
      <Name>{user.displayName}</Name>
      {workout.featured && <Featured>Hot & Featured</Featured>}
    </Wrapper>
  );
}

export default DisplayName;
