import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

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
  @media ${(props) => props.theme.mediaQueries.small} {
    display: block;
    margin-left: 0px;
    margin-right: 0px;
    width: 100%;
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
