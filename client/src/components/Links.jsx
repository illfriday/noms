import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Collapse = styled.div.attrs({
  className: 'collapse navbar-collapse'
})``

const List = styled.div.attrs({
  className: 'navbar-nav mr-auto'
})``

const Item = styled.div.attrs({
  className: 'collapse navbar-collapse'
})``

class Links extends Component {
  render() {
    return (
      <>
        <Link to="/" className='navbar-brand'>
          Nom noms
        </Link>
        <Collapse>
          <List>
            <Item>
              <Link to="/items/list" className='nav-link'>
                List Items
              </Link>
            </Item>
            <Item to="/items/create" className='nav-link'>
              Create Item
            </Item>
          </List>
        </Collapse>
      </>
    )
  }
}

export default Links;