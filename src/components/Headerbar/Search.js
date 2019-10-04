import React, { Component } from "react";
import styled from "styled-components";

class Search extends Component {
  render() {
    return (
      <SearchWrapper>
        <i className="fas fa-search"></i>
        <input type="search" placeholder="Search mikex.dev" />
      </SearchWrapper>
    );
  }
}

export default Search;

const SearchWrapper = styled.div`
  position: relative;
  margin: 0 16px;
  width: max-content;
  max-width: 500px;
  flex-grow: 1;
  border: 1px solid transparent;
  border-radius: 4px;
  box-sizing: border-box;
  height: 36px;

  i {
    position: absolute;
    top: 59%;
    left: 0;
    height: 18px;
    margin-left: 16px;
    margin-top: -9px;
    color: #848484;
  }

  input {
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    font-family: inherit;
    background-color: #272729;
    border-radius: 4px;
    border: 1px solid #343536;
    box-shadow: none;
    color: #d7dadc;
    display: block;
    height: 36px;
    outline: none;
    padding: 0 16px 0 40px;
    width: 100%;

    &:hover {
      background-color: #1a1a1b;
      border: 1px solid #d7dadc;
    }

    &:focus {
      background-color: #1a1a1b;
      border: 1px solid #d7dadc;
    }
  }
`;
