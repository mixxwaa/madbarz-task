import React from 'react';

import styled from 'styled-components';

import Avatar from './cardElements/Avatar';
import data from '../data.json';
import Header from './Header';
import Time from './cardElements/Time';
import WorkoutPhoto from './cardElements/WorkoutPhoto';
import WorkoutDuration from './cardElements/WorkoutDuration';
import ActionsBar from './cardElements/ActionsBar';
import WorkoutComponent from './cardElements/WorkoutComponent';

const MainWrapper = styled.div`
  ${'' /* display: flex;
  flex-direction: column; */}
  max-width: 375px;
  max-height: 488px;
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
      <CenterSegmentWrap>
        {/* <WorkoutDuration /> */}
        <WorkoutComponent />
      </CenterSegmentWrap>
      <ActionsBar />
    </MainWrapper>
  );
};
export default ContentCard;
