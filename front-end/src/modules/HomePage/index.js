import React from 'react';

import { Container, Content, Banner } from './styles';
import HomeScrumBoard from './assets/homeScrumBoard.png';

export default function HomePage() {
  return (    
    <Container>
      <Content> Eita </Content>   

      <Banner>
        <Banner.image src={HomeScrumBoard} alt="teste" />
      </Banner>
      
      
    </Container>
    
  );
}
