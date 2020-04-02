import React from 'react';
import { Link } from 'react-router-dom';
import { Title } from '../styles';

import { MdKeyboardBackspace } from 'react-icons/md';

export default function AddProject(props) {  
  return (
    <div>            
      <Title>
          <Link to="/projetos">
            <MdKeyboardBackspace size={35} color="#000" />
          </Link>
          <h1>Novo projeto</h1>
      </Title>
      <div>
        Eita
      </div>
    </div>
  );
}
