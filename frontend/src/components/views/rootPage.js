import React, { Component } from 'react';
import Post from '../PostParts/Post'
import CategoryList from '../CategoryList'
import styled from 'styled-components'

const Div = styled.div`
  display: flex;
`;

const PostList = styled.div`
  width: 75%;
  padding-right: 15px;
`;

class RootPage extends Component {
    render() {
        return (
            <Div>
                <PostList>
                    <Post full />
                    <Post summary />
                </PostList>
                <CategoryList />
            </Div>
        );
    }
}

export default RootPage;
