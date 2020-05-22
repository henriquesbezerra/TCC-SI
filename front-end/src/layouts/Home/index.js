import React from 'react';
import {Link} from 'react-router-dom';

import { Container, Content, Header, Main, Nav } from '../CommonStyles';

export default function Home(props) {  
  return (
    <Container >        
        <Content>
          <Header>
            <Nav>
              <Link to="/">Home</Link>
              <Link to="/login">Login</Link>                          
            </Nav>
          </Header>
          <Main>
            {props.children}           
          </Main>
        </Content>                
    </Container>
  );
}
