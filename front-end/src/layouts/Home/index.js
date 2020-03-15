import React, {useState} from 'react';

import { Container, Aside, Content, Header, Main, Footer, MenuButton } from './styles';

export default function Home(props) {
  const [statusSidebar, toggleSidebar] = useState(false);
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
          <Header> Eita</Header>
          <Main>
            {props.children}           
          </Main>
          <Footer>Footer</Footer>          
        </Content>                
    </Container>
  );
}
