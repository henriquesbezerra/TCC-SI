import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { Container, Aside, Content, Header, Main, MenuButton, Nav } from './styles';

export default function Home(props) {
  const [statusSidebar, toggleSidebar] = useState(true);
  return (
    <Container  >
        <Aside sidebar={statusSidebar}>
          <MenuButton 
            className={statusSidebar? '' : 'on'}
            onClick={()=>toggleSidebar(!statusSidebar)} >
            <MenuButton.bar />
            <MenuButton.bar />
            <MenuButton.bar />
          </MenuButton>
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
