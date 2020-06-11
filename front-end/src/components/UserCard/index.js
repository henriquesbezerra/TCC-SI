import React from 'react';

import { Container } from './styles';

const UserCard = ({user, onClick}) => {

  return (
    <Container onClick={onClick} style={onClick ? {cursor: 'pointer'} : {}}>
      <header>{user?.username}</header>
      <main>
        <p>{user?.name} - <small>{user.office}</small></p>
        <p className="info"></p>
        <p className="info">{user.biography}</p>
      </main>
      <footer>{user?.email}</footer>
    </Container>
  );
};

export default UserCard;