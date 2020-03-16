import React from 'react';

import { Container, Content, Banner } from './styles';
import AppLogo from '../../components/AppLogo';

export default function HomePage() {
  return (    
    <Container>
      <Content>         
        
        <div style={{marginTop: 80, marginBottom: '20%'}}>
          <AppLogo />
        </div>
        
      <Content.pretitle>+ Agilidade em seus projetos</Content.pretitle>
      <Content.title>Gerencie projetos<br/>de forma prática,<br/>rápida e segura!</Content.title>
      <Content.p>
        Supere obstáculos e aprimore sua gestão de projetos, 
        pois o diferencial de grandes empresas é fazer rápido e com
        qualidade. 
        <br />Venha crescer conosco!
      </Content.p>
      
      <Content.button>Saiba mais</Content.button>
    
      </Content>   

      <Banner center>
        <Banner.image />
      </Banner>
      
      
    </Container>
    
  );
}
