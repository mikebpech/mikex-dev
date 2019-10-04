import React from 'react';
import styled from 'styled-components';
import Headerbar from './components/Headerbar/Headerbar';
import NewsFeed from './components/Main/NewsFeed';
import TopStories from './components/Sidebar/TopStories';
import CoffeeBuy from './components/Sidebar/CoffeeBuy';
import TrendingSkills from './components/Sidebar/TrendingSkills';
import Contributors from './components/Sidebar/Contributors';

function App() {
  return (
    <Wrapper>
      <Headerbar />
      <Main>
        <NewsFeed />
        <RightSide>
        <TopStories />
        <Contributors />
        <CoffeeBuy />
        <TrendingSkills />
        </RightSide>
      </Main>
    </Wrapper>
  );
}

export default App;

const RightSide = styled.div`
  margin-left: 24px;
    margin-top: 0px;
    flex: 0 0 312px;
    width: 312px;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    height: 100%;`

const Wrapper = styled.div`
overflow: auto;
display: flex;
flex-direction: column;
align-items: center;
  background-color: #030303;
  height: 100%;
`

const Main = styled.div`
  margin: 0 auto;
  margin-top: 50px;
  height: calc(100% - 100px);
  display: flex;
  align-items: center;
  max-width: 100%;
  padding: 20px 24px;
  justify-content: center;

  .holder {
    height: 100%;
    width: 312px;
    margin-left: 24px;
    background: gray;
  }
`