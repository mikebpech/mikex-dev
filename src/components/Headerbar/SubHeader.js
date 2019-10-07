import React, { Component } from 'react';
import styled from 'styled-components';

class SubHeader extends Component {
    render() {
        return (
            <Wrapper>
                subheader
            </Wrapper>
        );
    }
}

export default SubHeader;

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    background: #1A1A1B;
    height: 40px;
    margin-top: 48px;
`