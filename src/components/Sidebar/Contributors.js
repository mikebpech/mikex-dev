import React, { Component } from "react";
import styled from "styled-components";
import { Spring } from "react-spring/renderprops";

class Contributors extends Component {
  render() {
    return (
      <Wrapper>
        <Top>
          <div className="text">MONTHLY CONTRIBUTORS</div>
        </Top>
        <Main>
            {contributors.map(cont => (
                <Item target="_blank" href={cont.url}>
                    <img src={cont.img} alt={cont.name}/>
                </Item>
            ))}
        </Main>
      </Wrapper>
    );
  }
}

export default Contributors;

const contributors = [
    { name : "CubedSEO", img: "https://i.imgur.com/qxcBogM.png", url: 'https://cubedseo.com' }
]

const Main = styled.div`
    padding: 0 12px;
    display: flex;
    align-items: center;
    margin-bottom: 12px;
    overflow-x: auto;
`

const Item = styled.a`
    margin-right: 10px;
    &:hover {
        background-color: #2a2a2b;
        border-color: #fff;
    }
    transition: all .2s;
    cursor: pointer;
    overflow: hidden;
    width: 30px;
    height: 30px;
    object-fit: cover;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #1a1a1b;
    border: thin solid transparent;
    padding: 3px;

    img {
        width: 25px;
        height: 25px;
        object-fit: contain;
    }
`

const Wrapper = styled.div`
  margin-top: 16px;
  background-color: #1a1a1b;
  color: #d7dadc;
  fill: #d7dadc;
  border: thin solid #343536;
  border-radius: 5px 5px 4px 4px;
  overflow: visible;
  word-wrap: break-word;
`;

const Top = styled.div`
    font-size: 10px;
    font-weight: 700;
    letter-spacing: .5px;
    line-height: 12px;
    text-transform: uppercase;
    background-color: #1A1A1B;
    border-radius: 4px 4px 0 0;
    color: #818384;
    display: -ms-flexbox;
    display: flex;
    fill: #818384;
    padding: 0 12px;

    .text {
        padding: 12px 0;
    }
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

`;
