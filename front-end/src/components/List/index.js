import React, {useState, useContext} from 'react';

import { MdCreate } from 'react-icons/md';

import AddCard from '../AddCard';
import Card from '../Card';
import Modal from '../Modal';
import FormTasks from '../../forms/Tasks';
import FormBacklogs from '../../forms/Backlogs';

import { Container } from './styles';

import { Context} from '../../context/ProjectContext';

export default function List({data, index: listIndex}) {
  
  const {users}  = useContext(Context);
  
  const [modalState, setModalState] = useState(false);     
  const [modalBacklog, setModalBacklog] = useState(false);  

  return (
    <Container done={data.done}>
      <Modal 
        idBacklog={data.id}
        active={modalState} 
        toogleActive={()=>setModalState(!modalState)} 
      >
        <FormTasks backlogId={data.id} users={users}/>
      </Modal>

      <Modal 
        idBacklog={data.id}
        active={modalBacklog} 
        toogleActive={()=>setModalBacklog(!modalBacklog)} 
      >
        <FormBacklogs backlog={data} />
      </Modal>

      <header>
        <div>
          <h2>{data.type === 1 ? 'Backlog' : 'Sprint'}</h2>
          <h3>{data.name}</h3>
        </div>
        
        {data.type === 2 ? 
          <button type="button" onClick={()=>{                      
            setModalBacklog(!modalBacklog);       
          }}>
            <MdCreate  size={24} color={'#7b7b7b'} />
          </button>   
        : null}          
        
      </header>

      <br /><br />
      <AddCard 
        label="Nova Tarefa"
        onClick={()=>{          
          setModalState(!modalState);
        }}
      />      

      <ul>        
        {data?.tasks.map((task, index) => <Card key={task.id} listIndex={listIndex} index={index}  data={task}  backlogId={data.id} />)}
      </ul>
    </Container>
  );
}
