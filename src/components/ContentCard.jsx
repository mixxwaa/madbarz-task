import React from 'react';
import styled from 'styled-components';

import CardHeader from './cardElements/CardHeader';
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
  @media (max-width: 437px) {
    padding: 0;
    margin: 1rem 0 15px 0;
  }
`;

const ContentCard = React.memo(({ feedInfo }) => {
  if (Object.keys(feedInfo).length) {
    return (
      <MainWrapper>
        <CardHeader {...feedInfo} />
        <WorkoutComponent {...feedInfo} />
        <ActionsBar id={feedInfo.id} {...feedInfo} />
      </MainWrapper>
    );
  }
  return (
    <MainWrapper>
      <div>Loading...</div>
    </MainWrapper>
  );
});

export default ContentCard;
