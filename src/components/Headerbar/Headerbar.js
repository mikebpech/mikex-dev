import React, { Component } from "react";
import styled from "styled-components";
import logo from "../../assets/svg/logo.svg";
import Navigator from "./Navigator";
import Search from "./Search";

class Headerbar extends Component {
  render() {
    return (
      <HeaderWrapper>
        <HeaderInside>
          <div className="left">
            <Logo>
              <img src={logo} alt="Logo" />
              <h3>
                mikex<span>.dev</span>
              </h3>
            </Logo>
            <Navigator />
            <Search />
          </div>
          <div className="right">
            <Actions>
              <div className="item">
                <i className="fas fa-file-download"></i>
              </div>
              <div className="item">
                <i className="fas fa-mail-bulk"></i>
              </div>
              <div className="item">
                <i className="fas fa-star"></i>
              </div>
            </Actions>
            <Actions noline>
              <div style={{ marginLeft: "0" }} className="item desktop">
                <i className="fas fa-lightbulb"></i>
              </div>
              <div onClick={() => this.props.toggleSidebar()} className="item bar">
                <i className={`fas fa-${this.props.shown ? 'times' : 'bars'}`}></i>
              </div>
            </Actions>
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
  color: #d7dadc;
  border-bottom: 1px solid #343536;
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  border-right: ${props => (props.noline ? "none" : "1px solid #343536")};
  margin-right: 8px;
  padding-right: 8px;

  .desktop {
    @media (max-width: 640px) {
      display: none !important;
    }
  }

  .bar {
    @media (min-width: 640px) {
      i {
        display: none !important;
      }
    }
    margin-left: 24px;
    width: fit-content;
    height: fit-content;
    background: transparent !important;
    &:hover {
      background: transparent !important;
    }

    i {
      width: 100%;
      justify-content: flex-end;
      align-items: flex-start;
      color: #fb4503;
      font-size: 24px;
      width: fit-content;
      height: fit-content;

    }
  }

  .item {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius: 2px;
    color: #d7dadc;
    height: 16px;
    line-height: 14px;
    padding: 8px;
    width: 16px;
    margin-left: 8px;
    &:hover {
      background-color: rgba(215, 218, 220, 0.1);
      outline: none;
    }
  }
`;

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
    display: flex;
    align-items: center;
    flex-grow: 0;
  }
`;

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
`;
