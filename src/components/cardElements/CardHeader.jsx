import React from 'react';
import styled from 'styled-components';

import Avatar from './Avatar';
import DisplayName from './DisplayName';
import Time from './Time';

const UserWrapper = styled.div`
  height: 56px;
  display: flex;
  div:last-child {
    margin-left: auto;
  }
`;

function CardHeader(feedInfo) {
  return (
    <UserWrapper>
      <Avatar
        src={feedInfo.user.profilePhoto}
        premium={feedInfo.user.isPremium}
      />
      <DisplayName {...feedInfo} />
      <Time date={feedInfo.dateFormatted} />
    </UserWrapper>
  );
}

export default CardHeader;
