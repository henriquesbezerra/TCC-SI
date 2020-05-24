import React, {useRef, useContext, useState} from 'react';

import BoardContext from '../Board/context';
import { Priority } from '../Priority';

import { useDrag, useDrop } from 'react-dnd';

import { Container } from './styles';
import { MdCreate } from 'react-icons/md';
import Modal from '../Modal';
import FormTask from '../../forms/Tasks';

export default function Card({data, backlogId, index, listIndex}) {

  const ref = useRef();
  const { move } = useContext(BoardContext);
  const [modal, setModal] = useState(false);

  const [{isDragging}, dragRef] = useDrag({
    item: { type: 'CARD', index, listIndex  },
    collect: monitor =>({
      isDragging: monitor.isDragging(),
    })
  });

  const [, dropRef] = useDrop({
    accept: 'CARD',
    hover(item, monitor){

      const draggedListIndex = item.listIndex;
      const targetListIndex =  listIndex;

      const draggedIndex = item.index;
      const targetIndex = index;

      if(draggedIndex === targetIndex && draggedListIndex === targetListIndex){
        return;
      }

      const targetSize = ref.current.getBoundingClientRect();
      
      const targetCenter = (targetSize.bottom - targetSize.top) / 2;
      
      const draggedOffset = monitor.getClientOffset();

      const draggedTop = draggedOffset.y - targetSize.top;

      if(draggedIndex < targetIndex && draggedTop < targetCenter){
        return;
      }

      if(draggedIndex > targetIndex && draggedTop > targetCenter){
        return;
      }

      move(draggedListIndex, targetListIndex, draggedIndex, targetIndex);

      item.index = targetIndex;
      item.listIndex = targetListIndex;
    }
  });

  dragRef(dropRef(ref));

  return (
    <>
      <Modal active={modal} toogleActive={()=>setModal(!modal)}>
        <FormTask task={data} backlogId={backlogId} />
      </Modal>
      <Container ref={ref} isDragging={isDragging}>        
        <header>
          <div>
            <Priority type="square" urgency={data.priority}/>
            {data.name}
          </div>
          <button type="button" onClick={()=>setModal(!modal)}>
            <MdCreate size={15}/>
          </button>
        </header>
        <p></p>
        <p>{data.description}</p>
        {data.user && (<img src={data.user} alt="Avatar Usuário" />)}
      </Container>
    </>
  );
}
