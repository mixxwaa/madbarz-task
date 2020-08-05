import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { respectWorkout, unrespectWorkout } from '../../actions';
import { ReactComponent as ShareFeed } from '../../svg/share-feed.svg';
import { ReactComponent as CommentFeed } from '../../svg/comment-feed.svg';
import { ReactComponent as LikeFeed } from '../../svg/like-feed.svg';
import { ReactComponent as LikeActive } from '../../svg/like active.svg';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 57px;
  padding: 0 15px;
`;
const ActionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 150px;
`;
const PairWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
const CommentIcon = styled(CommentFeed)`
  padding-right: 10px;
`;
const LikeIcon = styled(LikeFeed)`
  padding-right: 10px;
`;
const LikeIconActive = styled(LikeActive)`
  padding-right: 10px;
`;

const ActionsBar = ({ id, workout, respectWorkout, unrespectWorkout }) => {
  const RespectIconDisplay = workout.respected ? (
    <LikeIconActive
      onClick={() => unrespectWorkout(id, workout.isFromPlan, workout.id)}
    />
  ) : (
    <LikeIcon
      onClick={() => respectWorkout(id, workout.isFromPlan, workout.id)}
    />
  );

  return (
    <Wrapper>
      <ShareFeed />
      <ActionWrapper>
        <PairWrapper>
          <CommentIcon />
          <span>{workout.commentsCount}</span>
        </PairWrapper>
        <PairWrapper>
          {RespectIconDisplay}
          <span>{workout.respectsCount}</span>
        </PairWrapper>
      </ActionWrapper>
    </Wrapper>
  );
};

export default connect(null, {
  respectWorkout,
  unrespectWorkout,
})(ActionsBar);
