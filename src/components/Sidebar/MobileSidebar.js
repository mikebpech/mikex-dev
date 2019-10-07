import React, { Component } from 'react';
import styled from 'styled-components';
import TopStories from './TopStories';
import Contributors from './Contributors';
import CoffeeBuy from './CoffeeBuy';
import TrendingSkills from './TrendingSkills';

class MobileSidebar extends Component {
    render() {
        const { shown } = this.props;
        return (
            <Wrapper shown={shown}>
                <Inside>
                    <TopStories />
                    <Contributors />
                    <CoffeeBuy />
                    <TrendingSkills />
                </Inside>
            </Wrapper>
        );
    }
}
{/* <TopStories />
<Contributors />
<CoffeeBuy />
<TrendingSkills /> */}

export default MobileSidebar;

const Inside = styled.div`
    padding: 20px;
    width: 100%;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
`

const Wrapper = styled.div`
    @media (min-width: 768px) {
        display: none;
    }
    z-index: 70;
    top: ${props => props.shown ? '49px' : '-100vh'};
    transition: all .3s;
    position: fixed;
    display: flex;
    width: 100%;
    height: calc(100% - 49px);
    background-color: #030303;
    color: #D7DADC;
    fill: #D7DADC;
`