import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import WorkoutDuration from './WorkoutDuration';
import { getText } from '../../actions';

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

function WorkoutInfo({ name, userComment, isFromPlan, Plan, duration }) {
  const [nameAndComment, setnameAndComment] = useState([]);
  useEffect(() => {
    getText();
  }, []);
  return (
    <Wrapper>
      <WorkoutDuration duration={duration} plan={Plan} />
      <WorkoutTitle>{name}</WorkoutTitle>
      <WorkoutComment>{userComment}</WorkoutComment>
    </Wrapper>
  );
}

export default WorkoutInfo;
