import React, { Component } from 'react'
import styled from 'styled-components'
import Voting from '../Voting'
import PostMeta from './PostMeta'

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  border-bottom: 2px solid lightgray;
  margin: 25px 0 15px;
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