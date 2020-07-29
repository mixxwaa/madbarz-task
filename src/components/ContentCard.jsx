import React from 'react';

import styled from 'styled-components';

import Avatar from './cardElements/Avatar';
import data from '../data.json';
import Header from './Header';
import Time from './cardElements/Time';
import WorkoutPhoto from './cardElements/WorkoutPhoto';

const UserWrapper = styled.div`
  margin: 11px 14px 11px 14px;
  display: flex;
  max-width: 500px;
  div:last-child {
    margin-left: auto;
  }
`;

const ContentCard = () => {
  return (
    <div>
      <UserWrapper>
        <Avatar
          src={
            data.byId['00471c7b-569f-481f-a233-ad968513cc6f'].user.profilePhoto
          }
          alt="#"
        />
        <Header />
        <Time />
      </UserWrapper>

      <div>
        <WorkoutPhoto />
        <div>
          <p>workout duration</p>
          <p>part of plan</p>
        </div>

        <div>
          <p>title</p>
          <p>subtitle</p>
        </div>
        <div>
          <p>footer card</p>
          <div>share arrow</div>
          <div>
            <p>likes</p>
            <p>comments</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContentCard;
