import React, { Component } from 'react';
import Post from './Post'
import styled from 'styled-components'
import CategoryList from './CategoryList'

const Container = styled.div`
    width: 75%;
    max-width: 850px;
    margin: 0 auto;
    display: flex;
    .postlist {
        width: 75%;
        padding-right: 15px;
    }
    .sidebar {
        align-self: stretch;
    }
`;

class App extends Component {
  render() {
    return (
      <div className="App">
          <Container>
              <div className={'postlist'}>
                  <Post full />
                  <Post summary />
              </div>
              <CategoryList />
          </Container>
      </div>
    );
  }
}

export default App;
