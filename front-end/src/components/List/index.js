import React, {useState, useContext} from 'react';

import { MdAddCircleOutline } from 'react-icons/md';

import Card from '../Card';
import Modal from '../Modal';
import FormTasks from '../../forms/Tasks';

import { Container } from './styles';

import { Context} from '../../context/ProjectContext';

export default function List({data, index: listIndex}) {
  
  const {users}  = useContext(Context);
  
  const [modalState, setModalState] = useState(false);  

  return (
    <Container done={data.done}>
      <Modal 
        idBacklog={data.id}
        active={modalState} 
        toogleActive={()=>setModalState(!modalState)} 
      >
        <FormTasks backlogId={data.id} users={users}/>
      </Modal>

      <header>
        <div>
          <h2>{data.type === 1 ? 'Backlog' : 'Sprint'}</h2>
          <h3>{data.name}</h3>
        </div>

        <button type="button" onClick={()=>{          
          setModalState(!modalState);
        }}>
          <MdAddCircleOutline  size={24} color={'#7b7b7b'} />
        </button>        
        
      </header>

      <ul>        
        {data?.tasks.map((task, index) => <Card key={task.id} listIndex={listIndex} index={index}  data={task} />)}
      </ul>
    </Container>
  );
}
