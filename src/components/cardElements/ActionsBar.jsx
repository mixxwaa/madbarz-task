import React from 'react';

import styled from 'styled-components';

import { ReactComponent as ShareFeed } from '../../svg/share-feed.svg';
import { ReactComponent as CommentFeed } from '../../svg/comment-feed.svg';
import { ReactComponent as LikeFeed } from '../../svg/like-feed.svg';
import { ReactComponent as LikeActive } from '../../svg/like active.svg';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16.5px;
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

function ActionsBar() {
  return (
    <Wrapper>
      <ShareFeed />
      <ActionWrapper>
        <PairWrapper>
          <CommentIcon />
          <span>50</span>
        </PairWrapper>
        <PairWrapper>
          <LikeIconActive />
          <span>124</span>
        </PairWrapper>
      </ActionWrapper>
    </Wrapper>
  );
}

export default ActionsBar;
