import React, { Component } from 'react'
import Button from './Button'

class Voting extends Component {
    render() {
        return (
            <div>
                <Button small delete text={'-'} />
                0
                <Button small add text={'+'} />
            </div>
        );
    }
}

export default Voting;