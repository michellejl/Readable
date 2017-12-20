import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import Voting from './Voting'
import PostMeta from './PostMeta'

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid lightgray;
  margin-bottom: 15px;
  div {
  align-self: flex-end;
  }
`;

class PostHeader extends Component {
    render() {
        return (
            <Header>
                <PostMeta />
                <Voting />
            </Header>
        );
    }
}

export default PostHeader;