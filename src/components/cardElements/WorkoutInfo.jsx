import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as Clock } from '../../svg/clock-feed.svg';

const Wrapper = styled.div`
  position: absolute;
  top: 75%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 20;
  width: 75%;
  height: 90px;
  text-align: left;
  padding-left: 22px;
`;
const WorkoutTitle = styled.h1`
  font-weight: normal;
  font-size: 22px;
  color: white;
  margin-bottom: 5px;
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
//workout stles
const DurationWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  height: 20px;
  border-radius: 5px;
  white-space: nowrap;
  margin-bottom: 5px;
`;
const Svg = styled(Clock)`
  fill: #e5e5e5;
  width: 1em;
  padding-left: 6px;
  @media ${(props) => props.theme.mediaQueries.small} {
    display: hidden;
  }
`;
const Text = styled.span`
  font-size: 13px;
  padding-left: 5px;
  padding-right: 16px;
  color: #e5e5e5;
`;
const Container = styled.div`
  display: inline-flex;
  background: #000;
  color: white;
  border-radius: 10px;
  opacity: 0.7;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 1rem;
`;

function WorkoutInfo(info) {
  return (
    <Wrapper>
      <DurationWrapper>
        <Container>
          <Svg />
          <Text>{info.duration}</Text>
          {info.isFromPlan ? <Text>{info.planInfoFormatted}</Text> : null}
        </Container>
      </DurationWrapper>
      <WorkoutTitle>{info.name}</WorkoutTitle>
      <WorkoutComment>{info.userComment}</WorkoutComment>
    </Wrapper>
  );
}

export default WorkoutInfo;
