import React from 'react';
import styled from 'styled-components';
import WorkoutInfo from './WorkoutInfo';

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`;
const Gradient = styled.div`
  position: absolute;
  background: linear-gradient(
    179.86deg,
    rgba(0, 0, 0, 0) 35.11%,
    #000000 99.85%
  );
  height: 100%;
  width: 100%;
`;

const WorkoutImg = styled.img`
  display: block;
  height: 375px;
  width: 100%;
  object-fit: cover;
`;
const TextOverlay = styled(WorkoutInfo)`
  position: absolute;
  top: 10%;
`;

function WorkoutComponent(feedInfo) {
  return (
    <>
      <ImageWrapper>
        <Gradient />
        <WorkoutImg src={feedInfo.workout.imageUrl} alt="" />
        <TextOverlay {...feedInfo.workout} {...feedInfo.workoutFromPlanInfo} />
      </ImageWrapper>
    </>
  );
}

export default WorkoutComponent;
