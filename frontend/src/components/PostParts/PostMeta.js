import React, { Component } from 'react'
import styled from 'styled-components'

const Meta = styled.div`
  p {
    margin: 0;
  }
`;

const Title = styled.p`
  font-size: 2em;
`;

const ByLine = styled.p`
  font-size: 1.2em;
`;

const CategoryList = styled.p`
  font-size: 1.2em;
  font-style: italic;
`;

class PostMeta extends Component {
    render() {
        return (
            <Meta>
                <Title>This is the Post Title</Title>
                <ByLine>by Username on 12/13/14</ByLine>
                <CategoryList>react, redux, bananas</CategoryList>
                <p>0 Comments</p>
            </Meta>
        );
    }
}

export default PostMeta;