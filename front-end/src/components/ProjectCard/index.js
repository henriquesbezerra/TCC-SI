import React from 'react';

import { Container } from './styles';

const ProjectCard = ({title, description, client, started_at, ending_at, onClick}) => {

  return (
    <Container onClick={onClick} style={onClick ? {cursor: 'pointer'} : {}}>
      <header>{title}</header>
      <main>
        <p>{description}</p>
        <p className="clientName">{client}</p>
      </main>
      <footer>{started_at} à {ending_at}</footer>
    </Container>
  );
};

export default ProjectCard;