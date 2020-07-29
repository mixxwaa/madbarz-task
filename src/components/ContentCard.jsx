import React from 'react';

import styled from 'styled-components';

import Avatar from './cardElements/Avatar';
import data from '../data.json';
import Header from './Header';
import Time from './cardElements/Time';
import ActionsBar from './cardElements/ActionsBar';
import WorkoutComponent from './cardElements/WorkoutComponent';

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 375px;
  max-width: 488px;
  box-shadow: 0rem 1rem 1rem rgba(0, 0, 0, 0.2);
  border: 1px solid black;
  margin: 2rem;
`;
const UserWrapper = styled.div`
  height: 56px;
  display: flex;
  div:last-child {
    margin-left: auto;
  }
`;

const CenterSegmentWrap = styled.div`
  background-color: yellow;
`;

const ContentCard = () => {
  return (
    <MainWrapper>
      <UserWrapper>
        <Avatar
          src={
            data.byId['00471c7b-569f-481f-a233-ad968513cc6f'].user.profilePhoto
          }
          alt="#"
        />
        <Header />
        <Time />
      </UserWrapper>
      {/* <CenterSegmentWrap> */}
      <WorkoutComponent />
      {/*  </CenterSegmentWrap> */}
      <ActionsBar />
    </MainWrapper>
  );
};
export default ContentCard;
