import React from 'react';
import styled from 'styled-components';
import WorkoutDuration from './WorkoutDuration';

const Wrapper = styled.div`
  position: absolute;
  top: 220px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  z-index: 20;
  width: 320px;
  height: 80px;
  text-align: left;
  padding-left: 22px;
`;
const WorkoutTitle = styled.h1`
  font-weight: normal;
  font-size: 22px;
  color: white;
`;

const WorkoutComment = styled.h2`
  font-weight: normal;
  font-size: 15px;
  color: white;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

function WorkoutInfo() {
  return (
    <Wrapper>
      <WorkoutDuration />
      <WorkoutTitle>Squatting for the summer</WorkoutTitle>
      <WorkoutComment>
        Getting that peach asdas das das dasd asdas dasd asdasdasd ad
        asdasdasdasd
      </WorkoutComment>
    </Wrapper>
  );
}

export default WorkoutInfo;
