import React, { Component } from 'react';
import styled from 'styled-components'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import RootPage from './views/rootPage'

const Container = styled.div`
    width: 75%;
    max-width: 850px;
    margin: 0 auto;
    display: flex;
`;

class App extends Component {
    render() {
        return (
            <div className="App">
                <Container>
                    <Route exact path='/' component={RootPage} />
                    <Route path='/category' component={RootPage} />
                </Container>
            </div>
        );
    }
}

export default App;
