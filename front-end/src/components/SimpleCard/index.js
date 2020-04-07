import React from 'react';

import { Container } from './styles';

export default function SimpleCard({children}) {

  return (
    <Container>
      {children}
    </Container>
  );
}
