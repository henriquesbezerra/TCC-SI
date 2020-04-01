import React from 'react';

import { Container } from './styles';

export default function ProjectCard({title, description, client, start_date, end_date}) {

  return (
    <Container>
      <header>{title}</header>
      <main>
        <p>{description}</p>
        <p className="clientName">{client}</p>
      </main>
      <footer>{start_date} à {end_date}</footer>
    </Container>
  );
}