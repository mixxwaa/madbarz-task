import React from 'react';

import styled from 'styled-components';

import data from '../data.json';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  background-color: red;
`;
const UserTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserAvatar = styled.img`
  position: absolute;
  left: 3.73%;
  right: 87.47%;
  top: 2.46%;
  bottom: 98.78%;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
`;

const TopBar = () => {
  return (
    <div>
      <Wrapper>
        <UserAvatar
          src={
            data.byId['00471c7b-569f-481f-a233-ad968513cc6f'].user.profilePhoto
          }
          alt="#"
        />
        <UserTextWrapper>
          <p>Mia Dimitrev</p>
          <p>Hot and Featured</p>
        </UserTextWrapper>
      </Wrapper>
    </div>
  );
};

export default TopBar;
