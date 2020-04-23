import React from 'react';

import { 
    Container,         
 } from './styles';

import { MdAddCircleOutline } from 'react-icons/md';

export default function AddCard({onClick, label}) {

  return (
    <Container onClick={onClick} className="df fdr jc-c alic">        
        <MdAddCircleOutline size={24} color="#7b7b7b" />   
        {label && <div className="AddCard--label">{label}</div> }
    </Container>
  );
}

