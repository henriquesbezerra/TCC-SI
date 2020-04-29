import React from 'react';

import { 
    Container,         
    TaskTitle    
 } from './styles';

import {Priority} from '../Priority';

export default function TaskCard({header, onClick, onEdit, onDelete, task}) {

  return (
    <Container  onClick={onClick}>              
        <div  className="content df fdr alic">
            {task?.priority ?
            <Priority type="bullet" label urgency={task.priority} /> : null} 
            <div>
                <TaskTitle>{task.name || '-'}</TaskTitle>                
            </div>            
        </div>            
    </Container>
  );
}

