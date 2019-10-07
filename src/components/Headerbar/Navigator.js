import React, { Component } from 'react';
import styled from 'styled-components';

class Navigator extends Component {
    render() {
        return (
            <Nav>
                <div className="left">
                    <i className="fas fa-satellite"></i>
                    <b>Home</b>
                </div>
                <div className="right">
                    <i className="fas fa-chevron-down"></i>
                </div>
            </Nav>
        );
    }
}

export default Navigator;

const Nav = styled.div`
@media (max-width: 640px) {
    display: none;
}
cursor: pointer;
    width: 230px;
    height: 36px;
    border: 1px solid transparent;
    border-radius: 4px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;

    .left {
        display: flex;
        align-items: center;
        b {
        font-size: 13px;
        margin-left: 10px;
    }

    i {
        margin-top: 2px;
        color: #0079d3;
        fill: #0079d3;
    }
    }
    .right {
        i {
            font-size: 12px;
        }
    }


    &:hover {
        border-color: #343536;
    }

    .shown {
        border-color: #343536;
        border-radius: 4px 4px 0 0;
    }
`