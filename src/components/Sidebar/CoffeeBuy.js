import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

class CoffeeBuy extends Component {
    render() {
        return (
            <Coffee>
                <div className="content">
                    <i className="fas fa-coffee-togo"></i>
                    <div className="text">
                        <b>Buy Me Coffee</b>
                        <p>Get added to the contributor list for a month</p>
                    </div>
                        <a href="https://bmc.xyz/l/mikexdev" target="_blank"><button>BUY NOW</button></a>
                </div>
            </Coffee>
        );
    }
}

export default CoffeeBuy;

const Coffee = styled.div`
    margin-top: 16px;
    background-color: #1A1A1B;
    color: #D7DADC;
    fill: #D7DADC;
    border-radius: 5px 5px 4px 4px;
    overflow: visible;
    word-wrap: break-word;

    .content {
        padding: 8px 12px;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -ms-flex-align: center;
    align-items: center;
    
    a {
    height: 28px;
    flex: 0 0 84px;
    padding: 0;
    margin: 0;
    text-decoration: none;

    &:visited {
        color: #D7DADC;
    }

    }
    
    button {

        &:focus {
        outline: none;
    }
    font-size: 12px;
    font-weight: 700;
    letter-spacing: .5px;
    line-height: 24px;
    text-transform: uppercase;
    background-color: #ff4500;
    border-color: #ff4500;
    border: 1px solid transparent;
    border-radius: 4px;
    box-sizing: border-box;
    text-align: center;
    cursor: pointer;

    &:hover {
        background-color: #f94e0e;
    }
    }

    .text {
        flex: 1 1 auto;

        b {
            font-size: 12px;
    font-weight: 500;
    line-height: 16px;

        }

        p {
            margin: 0;
    padding: 0;
            font-size: 12px;
    font-weight: 400;
    line-height: 16px;
        }
    }

    i {
        display: flex;
        justify-content: center;
        align-items: center;
        color: #ff4500;
        height: 24px;
    -ms-flex: 0 0 24px;
    font-size: 20px;
    flex: 0 0 24px;
    margin-right: 12px;
    }
    }
`