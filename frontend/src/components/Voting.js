import React, { Component } from 'react'
import Button from './Button'

class Voting extends Component {
    render() {
        return (
            <div>
                <Button small delete>-</Button>
                0
                <Button small add>+</Button>
            </div>
        );
    }
}

export default Voting;