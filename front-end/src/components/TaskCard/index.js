import React from 'react';

import { 
    Container,         
    TaskTitle    
 } from './styles';

import {Priority} from '../Priority';
import { MdDelete, MdEdit, MdRemoveRedEye } from 'react-icons/md';

export default function TaskCard({header, onClick, onEdit, onDelete, task}) {

  return (
    <Container >              
        <div  className="content df fdr alic">
            {task?.priority ?
            <Priority type="bullet" label urgency={task.priority} /> : null} 
            <div>
                <TaskTitle>{task.name || '-'}</TaskTitle>                
            </div>            
        </div>
        <div className="df fdr jc-c alic">
            <MdRemoveRedEye size={24} color="#000" style={{marginRight: 10, cursor: 'pointer'}} onClick={onClick} />
            <MdEdit size={24} color="#000" style={{marginRight: 10, cursor: 'pointer'}} onClick={onEdit} />
            <MdDelete size={24} color="#000" style={{cursor: 'pointer'}} onClick={onDelete} />
        </div>        
    </Container>
  );
}

