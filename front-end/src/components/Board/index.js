import React, { useState } from 'react';

import produce from 'immer';

import BoardContext from './context';

import List from '../List';
import { Container } from './styles';

export default function Board({data}) {

  const [lists, setLists] = useState(data);

  
  function move(fromList, toList, from, to){
    setLists(produce(lists, draft =>{
      const dragged = draft[fromList].cards[from];
      draft[fromList].cards.splice(from,1);
      draft[toList].cards.splice(to, 0, dragged);
    }));
  }

  return (
    <BoardContext.Provider value={{ lists, move }} >
      <Container>
        {data?.backlogs?.length && data?.backlogs?.map((backlog, index) => <List           
          key={`in${index}`} 
          index={index} 
          data={backlog}/>)}          
      </Container>
    </BoardContext.Provider>
  );
}
