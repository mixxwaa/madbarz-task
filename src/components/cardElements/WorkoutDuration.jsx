import React from 'react';
import styled from 'styled-components';

import { ReactComponent as Clock } from '../../svg/clock-feed.svg';

const Wrapper = styled.div`
  display: inline-flex;
  align-items: center;
  background: #000000;
  color: white;
  opacity: 0.7;
  border-radius: 5px;
  top: 250px;
  z-index: 20;
  width: 100%;
`;
const Svg = styled(Clock)`
  fill: #e5e5e5;
  width: 1em;
  height: 1em;
  padding-left: 6px;
  @media ${(props) => props.theme.mediaQueries.smaller} {
    display: hidden;
  }
`;
const Text = styled.h1`
  font-size: 13px;
  padding-left: 4px;
  padding-right: 16px;
  color: #e5e5e5;
`;

function WorkoutDuration() {
  return (
    <Wrapper>
      <Svg />
      <Text>02:03:21</Text>
      <Text>Intermediate - Week 1 - Workout 1</Text>
    </Wrapper>
  );
}

export default WorkoutDuration;
