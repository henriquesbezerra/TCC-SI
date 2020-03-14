import React from 'react';

// import { Container } from './styles';

export default function Home(props) {
  return (
    <div>
        <h1>Home Page</h1>
        {props.children}
    </div>
  );
}
