import React from 'react';

import { Container, Content, Background } from './styles';

export default ({active, toogleActive, children}) =>{
    return(
        <Container active={active}>
            <Background onClick={toogleActive}/>
            <Content>
                {children}
            </Content>
        </Container>
    );
};