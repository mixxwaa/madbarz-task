import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Waypoint } from 'react-waypoint';

import { getFeed, respectWorkout, updateFeed } from '../actions';

import ContentCard from './ContentCard';
import Loading from './Loading';
import Navbar from './Navbar';

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
`;
const ContentWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  margin-top: 50px;
  padding: 2rem 4rem 2rem 4rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media (max-width: 600px) {
    padding: 2rem 0em 2rem 0rem;
  }
`;

const App = ({ feed, getFeed, updateFeed, loading }) => {
  useEffect(() => {
    getFeed();
  }, []);

  const RenderCards = (feed) => {
    return feed.map((el) => <ContentCard feedInfo={el} key={el.id} />);
  };

  return (
    <MainWrapper>
      <Navbar />
      <ContentWrapper>
        {loading ? <Loading /> : RenderCards(feed)}
      </ContentWrapper>
      {!loading ? (
        <div>
          <Waypoint bottomOffset="-800px" onEnter={() => updateFeed()} />
        </div>
      ) : null}
    </MainWrapper>
  );
};

const mapStateToProps = ({ feed, loading }) => {
  if (Object.keys(feed).length) {
    return {
      feed: Object.keys(feed.byId).map((key) => feed.byId[key]),
      loading,
    };
  }
  return { feed: [], loading };
};

export default connect(mapStateToProps, {
  getFeed,
  respectWorkout,
  updateFeed,
})(App);
