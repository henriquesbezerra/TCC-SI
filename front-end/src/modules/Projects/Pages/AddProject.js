import React from 'react';
import { Link } from 'react-router-dom';
// import { Container } from './styles';

export default function AddProject(props) {  
  return (
    <div>            
      <div>
          <h1>Novo projeto</h1>
          <Link to="/projetos">Voltar</Link>
      </div>
      <div>
        Eita
      </div>
    </div>
  );
}
