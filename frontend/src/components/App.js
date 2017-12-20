import React, { Component } from 'react';
import Button from './Button'

class App extends Component {
  render() {
    return (
      <div className="App">
        Hello World
          <Button delete text={'Hello'}/>
          <Button edit text={'Hello'}/>
          <Button add text={'Hello'}/>
          <Button text={'Hello'}/>
      </div>
    );
  }
}

export default App;
