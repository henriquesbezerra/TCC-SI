import React from 'react';
import {Link} from 'react-router-dom';

import { DrawerMenu } from '../../components/DrawerMenu';

import { Container, Aside, Content, Header, Main, Nav } from '../CommonStyles';

export default function Home(props) {  
  return (
    <Container  >
        <Aside>
          <DrawerMenu menuOptions={[]} />
        </Aside>
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
