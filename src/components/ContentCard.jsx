import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import styled from 'styled-components';

import Avatar from './cardElements/Avatar';
import data from '../data.json';
import Header from './Header';
import Time from './cardElements/Time';
import ActionsBar from './cardElements/ActionsBar';
import WorkoutComponent from './cardElements/WorkoutComponent';
import { setUsers } from '../actions';

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 488px;
  max-width: 375px;
  box-shadow: 0rem 1rem 1rem rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(0, 0, 0, 0.1);
  margin: 2rem;
`;
const UserWrapper = styled.div`
  height: 56px;
  display: flex;
  div:last-child {
    margin-left: auto;
  }
`;

const ContentCard = ({ feedInfo }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <MainWrapper>
      <UserWrapper>
        <Avatar
          onLoad={() => setLoaded(true)}
          src={feedInfo.user.profilePhoto}
          alt="#"
          premium={feedInfo.user.isPremium}
        />
        <Header
          name={feedInfo.user.displayName}
          featured={feedInfo.workout.respected}
        />
        <Time date={feedInfo.dateFormatted} />
      </UserWrapper>
      <WorkoutComponent
        image={feedInfo.workout.imageUrl}
        name={feedInfo.workout.name}
        userComment={feedInfo.workout.usersComment}
        isFromPlan={feedInfo.workout.isFromPlan}
        Plan={feedInfo.workoutFromPlanInfo.planInfoFormatted}
        duration={feedInfo.workout.duration}
      />
      <ActionsBar />
    </MainWrapper>
  );
};

export default ContentCard;
