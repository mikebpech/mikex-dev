import React, { Component } from 'react';
import styled from 'styled-components';

class Hamburger extends Component {
    render() {
        return (
            <Wrap>
                <i className="fas fa-bars"></i>
            </Wrap>
        );
    }
}

export default Hamburger;

const Wrap = styled.div`
    @media (min-width: 640px) {
        display: none;
    }

    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
`