import React from 'react';

import { 
    Container, 
    BulletPriority,
    TaskContent,
    TaskTitle,
    TaskDescription
 } from './styles';

import {formatDate} from '..//HelperFunctions';

import Prioritys from '../Prioritys';

import { MdDelete } from 'react-icons/md';

export default function Table({header, task}) {

  return (
    <Container className="df fdr alic jc-sb">      
        <TaskContent className="df fdr alic jc-sb">
            <BulletPriority color={Prioritys[task.priority].color}>
                {Prioritys[task.priority].label}
            </BulletPriority>
            <div>
                <TaskTitle>{task.name || '-'}</TaskTitle>
                <TaskDescription>{task.description || '-'}</TaskDescription>
            </div>
            <div>
                {formatDate(task.started_at) || '-'}
                à
                {task.ending_at || '-'}
            </div>
        </TaskContent> 
        <div>
            <MdDelete size={24} color="#000" />
        </div>
    </Container>
  );
}

