import React, { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

import { useFetch } from '../../../hooks/useFetch';

import { Header, Title, WrapperBoard } from '../styles';

import Board from '../../../components/Board';

import { MdKeyboardBackspace } from 'react-icons/md';
import Backlog from './screens/Backlog';
import Sprints from './screens/Sprints';

export default function ViewProject(props) {
  
  const { history, match } = props;

  const { authPut, get } = useFetch();

  const [screen, setScreen] = useState('backlog');

  const [project, setProject] = useState('');
  
  const [productBacklog, setProductBacklog] = useState({});
  

  const getProject = async() => {    
    try {      
      const result = await get(`/project/${match.params.id}`);      
      setProject(result);
    } catch (e) {
      console.log('error: ', e); 
    }
  }


  useEffect(()=>{
    getProject();
  },[]);

  useEffect(()=>{
    if(project){

      if(project.backlogs.length){
        setProductBacklog(project.backlogs.filter(item=>item.type === 1)[0]);
      }
      console.log('result: ', project.backlogs);  
    }
  },[project]);


  return (
    <div>            
      <Header>        
        <div className="df fdr alic">
            <Link  to="/projetos" className='circleButton'>
              <MdKeyboardBackspace size={30} color="#000" />
            </Link>                    
            <div style={{marginLeft: 10}}>Lista de projetos</div>
        </div>
        <Title>{project?.name}</Title>
      </Header>
      <div className="df fdr alic">
        <div style={{marginRight: 10}} onClick={()=>setScreen('backlog')}>Backlog</div>
        <div style={{marginRight: 10}} onClick={()=>setScreen('sprints')}>Sprints (2)</div>
        <div style={{marginRight: 10}} onClick={()=>setScreen('board')}>Board</div>
      </div>
      {
        screen === 'board' ? (
          <WrapperBoard>        
            <Board />
          </WrapperBoard>          
        ) : null
      }
      {
        screen === 'backlog' ? (                 
          <Backlog data={productBacklog} />               
        ) : null
      }

      {
        screen === 'sprints' ? (
          <WrapperBoard>        
            <Sprints />
          </WrapperBoard>            
        ) : null
      }

      
    </div>
  );
}
