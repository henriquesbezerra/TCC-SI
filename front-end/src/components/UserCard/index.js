import React from 'react';

import { Container } from './styles';

const UserCard = ({user, onClick}) => {

  return (
    <Container onClick={onClick} style={onClick ? {cursor: 'pointer'} : {}}>
      <header>{user?.username}</header>
      <main>
        <p>{user?.email}</p>
        {/* <p className="clientName">{client}</p> */}
      </main>
      <footer>Eita</footer>
    </Container>
  );
};

export default UserCard;