import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// const Collapse = styled.div.attrs({
//   className: 'collapse navbar-collapse'
// })``

const List = styled.div.attrs({
  className: 'navbar-nav mr-auto'
})``

const Item = styled.div.attrs({
  color: 'white'
})`
margin-right: 5px;`

class Links extends Component {
    render() {
        return (
            <React.Fragment>
                <Link to="/" className="navbar-brand">
                    Nom Noms
                </Link>
                <div>
                    <List>
                        <Item>
                            <Link to="/items/list" className="nav-link">
                                List Items
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/items/create" className="nav-link">
                                Create Item
                            </Link>
                        </Item>
                    </List>
                </div>
            </React.Fragment>
        )
    }
}

export default Links;