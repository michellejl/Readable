import React, { Component } from 'react';
import Post from './Post'
import styled from 'styled-components'

const Container = styled.div`
    width: 75%;
    max-width: 850px;
    margin: 0 auto;
`;

class App extends Component {
  render() {
    return (
      <div className="App">
          <Container>
              <Post full />
              <Post summary />
          </Container>
      </div>
    );
  }
}

export default App;
