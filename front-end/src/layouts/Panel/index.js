import React from 'react';

import { DrawerMenu } from '../../components/DrawerMenu';

import { Container, Aside, Content, Main } from '../CommonStyles';

import { menuOptions } from './menuOptions';

export default function Panel(props) {  
  
  return (
    <Container>
        <Aside>
          <DrawerMenu menuOptions={menuOptions} currentLocation={props.currentLocation}/>
        </Aside>
        <Content>          
          <Main>
            <Main.content>              
              {props.children}           
            </Main.content>
          </Main>
        </Content>                
    </Container>
  );
}
