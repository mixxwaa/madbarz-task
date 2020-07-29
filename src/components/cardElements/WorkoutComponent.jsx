import React from 'react';
import styled from 'styled-components';

import WorkoutPhoto from './WorkoutPhoto';
import WorkoutDuration from './WorkoutDuration';
import WorkoutInfo from './WorkoutInfo';

const Test = styled(WorkoutDuration)`
  background-color: red;
`;

function WorkoutComponent() {
  return (
    <div>
      {/* <WorkoutInfo /> */}
      <WorkoutPhoto />
    </div>
  );
}

export default WorkoutComponent;
