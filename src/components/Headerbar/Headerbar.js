import React, { Component } from 'react';
import styled from 'styled-components';
import logo from '../../assets/svg/logo.svg'
import Navigator from './Navigator';
import Search from './Search';

class Headerbar extends Component {
    render() {
        return (
            <HeaderWrapper>
                <HeaderInside>
                    <div className="left">
                        <Logo>
                            <img src={logo} alt="Logo" />
                            <h3>mikex<span>.dev</span></h3>
                        </Logo>
                        <Navigator />
                        <Search />
                    </div>
                </HeaderInside>
            </HeaderWrapper>
        );
    }
}

export default Headerbar;

const HeaderWrapper = styled.header`
    width: 100%;
    overflow: hidden;
    position: fixed;
    flex: 0;
    right: 0;
    top: 0;
    z-index: 80;
    margin-top: 0;
    height: 48px;
    background-color: #1a1a1b;
    color: #D7DADC;
    border-bottom: 1px solid #343536;
`

const HeaderInside = styled.div`
    height: 100%;
    border-bottom: 1px solid #343536;
    display: flex;
    align-items: center;
    padding: 0 20px;

    .left {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
    }

    .right {

    }
`

const Logo = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    padding-right: 15px;
    img {
        height: 30px;
        width: 30px;
    }
    h3 {
        margin-left: 7px;
        letter-spacing: 0.5px;

        span {
            color: #fb4503;
        }
    }
`