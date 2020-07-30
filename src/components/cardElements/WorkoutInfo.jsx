import React from 'react';
import styled from 'styled-components';
import WorkoutDuration from './WorkoutDuration';

const Wrapper = styled.div`
  position: absolute;
  top: 75%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: start;
  z-index: 20;
  width: 75%;
  height: 80px;
  text-align: left;
  padding-left: 22px;
`;
const WorkoutTitle = styled.h1`
  font-weight: normal;
  font-size: 22px;
  color: white;
  @media ${(props) => props.theme.mediaQueries.smaller} {
    font-size: 1.2rem;
  }
`;

const WorkoutComment = styled.h2`
  font-weight: normal;
  font-size: 15px;
  color: white;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  @media ${(props) => props.theme.mediaQueries.smaller} {
    font-size: 1.1rem;
  }
  @media ${(props) => props.theme.mediaQueries.smallest} {
    display: hidden;
  }
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
