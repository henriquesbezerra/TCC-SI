import React from 'react';

import { Container } from './styles';

export default function SimpleCard({children, ...props}) {

  return (
    <Container {...props}>
      {children}
    </Container>
  );
}
