import React from 'react';

import { 
    Container,         
    TaskTitle    
 } from './styles';

import {Priority} from '../Priority';
import { MdDelete } from 'react-icons/md';

export default function TaskCard({header, onClick, task}) {

  return (
    <Container onClick={onClick}>              
        <div  className="content df fdr alic">
            {task?.priority ?
            <Priority type="bullet" label urgency={task.priority} /> : null} 
            <div>
                <TaskTitle>{task.name || '-'}</TaskTitle>                
            </div>            
        </div>
        <div className="df fdc jc-c">
            <MdDelete size={24} color="#000" />
        </div>        
    </Container>
  );
}

