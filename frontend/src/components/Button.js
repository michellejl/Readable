import React, { Component } from 'react'
import styled, { css } from 'styled-components'

const Btn = styled.a`
    display: inline-block;
    text-align: center;
    border-radius: 3px;
    padding: 0.5rem 1rem;
    margin: 0.5rem 1rem 0.5rem 0;
    background: transparent;
    color: ${props => props.theme.mainc};
    border: 2px solid ${props => props.theme.mainc};
    
    ${props => props.delete && css`
        color: ${props => props.theme.deletec};
        border-color: ${props => props.theme.deletec};
    `}
    
    ${props => props.add && css`
        color: ${props => props.theme.addc};
        border-color: ${props => props.theme.addc};
    `}
     
    ${props => props.edit && css`
        color: ${props => props.theme.editc};
        border-color: ${props => props.theme.editc};
    `}
    
    ${props => props.small && css`
        padding: 0;
        width: 25px;
        height: 25px;
        line-height: 25px;
        margin: 0.5rem;
    `}
    
`;

class Button extends Component {
    render() {
        return (
            <Btn {...this.props}>{this.props.children}</Btn>
        );
    }
}

export default Button;