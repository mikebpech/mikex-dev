import React, { Component } from 'react';
import styled from 'styled-components';

class TopStories extends Component {
    render() {
        return (
            <Wrapper>
                <Top>
                    <h2>Today's Top Links</h2>
                </Top>
                <List>
                    <li>
                        <a target="_blank" href="https://github.com/mikebpech">
                            <div className="content">
                                <span>1</span>
                                <i className="fas fa-caret-up"></i>
                                <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="github logo"/>
                                <div className="text">r/github</div>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a target="_blank" href="https://linkedin.com/in/mikexex">
                            <div className="content">
                                <span>2</span>
                                <i className="fas fa-caret-up"></i>
                                <img src="https://www.qtoptometry.com/wp-content/uploads/2018/11/LinkedIn-Logo.jpg" alt="linkedin logo"/>
                                <div className="text">r/linkedin</div>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a target="_blank" href="https://stackoverflow.com/users/7431331/exware">
                            <div className="content">
                                <span>3</span>
                                <i  style={{ color: "rgb(234, 0, 39)" }} className="fas fa-caret-down"></i>
                                <img src="data:image/png;base64,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" alt="stackoverflow logo"/>
                                <div className="text">r/stackoverflow</div>
                            </div>
                        </a>
                    </li>
                    
                </List>
                <Button>
                    <b>VIEW ALL</b>
                </Button>
            </Wrapper>
        );
    }
}

export default TopStories;

const Button = styled.div`
padding: 12px;
cursor: pointer;

b {
    display: block;
    width: 100%;
    background-color: #D7DADC;
    border-color: #D7DADC;
    color: #1A1A1B;
    fill: #1A1A1B;
    border: 1px solid transparent;
    border-radius: 4px;
    box-sizing: border-box;
    text-align: center;
    letter-spacing: 1px;
    text-decoration: none;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: .5px;
    line-height: 24px;
    text-transform: uppercase;
    padding: 3px 16px;

    &:hover {
        background-color:#ebeced;
    border-color:#ebeced;
    }
}
`

const List = styled.ol`
    list-style: none;
    padding: 0;
    margin: 0;

    li {
        border-bottom: thin solid #343536;

        a {
            text-decoration: none;
            -ms-flex-align: center;
    align-items: center;
    display: -ms-flexbox;
    display: flex;
    height: 48px;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding: 0 12px;

            .content {
                align-items: center;
    display: -ms-flexbox;
    display: flex;

                span {
                    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
    color: #D7DADC;
    text-align: right;
    width: 20px;
                }

                i {
                    color: rgb(70,209,96);
    height: 20px;
    font-size: 16px;
    margin-left: 8px;
    width: 10px;
    display: flex;
    align-items: center;
                }

                img {
                    background-position: 50%;
    background-repeat: no-repeat;
    background-size: 100%;
    border-radius: 24px;
    box-sizing: border-box;
    -ms-flex: none;
    flex: none;
    height: 32px;
    margin: 0 8px;
    width: 32px;
    background-color: rgb(0, 121, 211);
    vertical-align: middle;
                }

                .text {
                    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
    display: flex;
    color: #D7DADC;
                }
            }
        }
    }
`

const Wrapper = styled.div`
background-color:#1A1A1B;
    color:#D7DADC;
    fill: #D7DADC;
    border:thin solid #343536;
    border-radius: 5px 5px 4px 4px;
    overflow: visible;
    word-wrap: break-word;
`

const Top = styled.div`
background-image: url("https://www.redditstatic.com/desktop2x/img/leaderboard/banner-background.png");
        background-color: #0079d3;
    background-position: 50%;
    background-repeat: no-repeat;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    height: 80px;
    position: relative;

    &::before {
        background: linear-gradient(0deg,rgba(0,0,0,.7) 0,transparent);
    content: "";
    height: 80px;
    position: absolute;
    width: 100%;
    }

    h2 {
        font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    bottom: 8px;
    margin: 0;
    color: #fff;
    left: 16px;
    position: absolute;
    }

`