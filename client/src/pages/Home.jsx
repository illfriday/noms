import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div.attrs({
  className: 'container'
})``
const Description = styled.p`
  margin-left, margin-right: 20px;
`

class Home extends Component {
  render () {
    return (
      <Container>
        <Description>
          This is the NOMS App. No One Must Starve. Help distribute food resources in your community.
        </Description>
      </Container>
    )
  }
}

export default Home;

