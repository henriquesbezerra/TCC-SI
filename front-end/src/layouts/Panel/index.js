import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Content, Main, Header, Nav } from '../CommonStyles';

export default function Panel(props) {  
  
  return (
    <Container>        
        <Content>          
          <Main>
          <Header panel>
            <Nav panel>              
              <Link to="/projetos">Projetos</Link>
              <Link to="/projetos">Usuários</Link>
              <button type="button" onClick={()=>{
                localStorage.clear();
                window.location.reload();
              }}>Sair</button>
            </Nav>
          </Header>
            <Main.content>              
              {props.children}           
            </Main.content>
          </Main>
        </Content>                
    </Container>
  );
}
