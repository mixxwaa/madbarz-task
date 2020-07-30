import React from 'react';
import styled from 'styled-components';

import { ReactComponent as Clock } from '../../svg/clock-feed.svg';

const Wrapper = styled.div`
 ${'' /*  display: inline-block;
  width: auto; */}
  background: #000000;
  ${'' /* align-items: center;
  background: #000000;
  color: white;
  opacity: 0.7;
  border-radius: 5px;
  top: 250px;
  width: 100%;
  float: left;
  white-space: nowrap; */}
`;
const Svg = styled(Clock)`
  fill: #e5e5e5;
  width: 1em;
  height: 1em;
  padding-left: 6px;
  @media ${(props) => props.theme.mediaQueries.small} {
    display: hidden;
  }
`;
const Text = styled.span`
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
