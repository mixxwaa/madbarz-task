import React from 'react';

import WorkoutPhoto from './WorkoutPhoto';

function WorkoutComponent({
  image,
  name,
  userComment,
  isFromPlan,
  Plan,
  duration,
}) {
  return (
    <>
      <WorkoutPhoto
        image={image}
        name={name}
        userComment={userComment}
        isFromPlan={isFromPlan}
        Plan={Plan}
        duration={duration}
      />
    </>
  );
}

export default WorkoutComponent;
