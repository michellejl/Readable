import React, { Component } from 'react'
import styled from 'styled-components'

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  
  li {
  
  }
`;

const SideBar = styled.div`
  padding: 25px 5px;
  width: 25%;
  h2 {
    border-bottom: 2px solid lightgray;
    margin: 0;
  }
`;

class CategoryList extends Component {
    render() {
        return (
            <SideBar>
                <h2>Category List</h2>
                <List>
                    <li>React</li>
                    <li>Redux</li>
                    <li>Bananas</li>
                </List>
            </SideBar>
        );
    }
}

export default CategoryList;