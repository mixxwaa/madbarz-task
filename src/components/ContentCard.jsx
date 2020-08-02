/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';

import styled from 'styled-components';

import Avatar from './cardElements/Avatar';

import Header from './Header';
import Time from './cardElements/Time';
import ActionsBar from './cardElements/ActionsBar';
import WorkoutComponent from './cardElements/WorkoutComponent';

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 488px;
  width: 375px;
  box-shadow: 0rem 1rem 1rem rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(0, 0, 0, 0.1);
  margin: 2rem;
  ${'' /* @media (max-width: 375px) {
    display: block;
    margin: 0 0 15px 0;
    width: 100%;
    border-right: 0;
    border-left: 0;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  } */}
  @media (max-width: 437px) {
    padding: 0;
    margin: 0 0 15px 0;
  }
`;
const UserWrapper = styled.div`
  height: 56px;
  display: flex;
  div:last-child {
    margin-left: auto;
  }
`;

const ContentCard = ({ feedInfo }) => {
  if (Object.keys(feedInfo).length) {
    return (
      <MainWrapper>
        <UserWrapper>
          <Avatar
            src={feedInfo.user.profilePhoto}
            alt="#"
            premium={feedInfo.user.isPremium}
          />
          <Header {...feedInfo} />
          <Time date={feedInfo.dateFormatted} />
        </UserWrapper>
        <WorkoutComponent {...feedInfo} />
        <ActionsBar {...feedInfo} />
      </MainWrapper>
    );
  }
  return (
    <MainWrapper>
      <div>Loading...</div>
    </MainWrapper>
  );
};

export default ContentCard;
