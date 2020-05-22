import React, { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

import { useFetch } from '../../../hooks/useFetch';

import { Header, Title, WrapperBoard } from '../styles';

import Board from '../../../components/Board';

import { MdKeyboardBackspace } from 'react-icons/md';
import Backlog from './screens/Backlog';
import Sprints from './screens/Sprints';

import { loadLists } from '../../../services/api';

const data = loadLists();

export default function ViewProject(props) {
  
  const { match } = props;

  const { get } = useFetch();

  const [screen, setScreen] = useState('board');

  const [project, setProject] = useState('');
  
  const [productBacklog, setProductBacklog] = useState({});
  const [sprintsBacklog, setSprintsBacklog] = useState([]);

  const [users, setUsers] = useState([]);
  
  
  useEffect(()=>{    
    const getProject = async() => {    
      try {      
        const result = await get(`/project/${match.params.id}`);      
        setProject(result);
        console.log(result);
        let sprints = [];

        // eslint-disable-next-line        
        result.backlogs.map(item=>{
          if(item.type === 1){
            setProductBacklog(item);
          }else if(item.type === 2){
            sprints.push(item);
          }
        });
        setSprintsBacklog(sprints);
      } catch (e) {
        console.log('error: ', e); 
      }
    }
    getProject();

    const getUsers = async()=>{
      try {
        const result = await get(`/users`);              
        if(result){
          setUsers(
            result.map(item=>({
                value: item.id, 
                label: item.username
            }))
          );
        }
      } catch (e) {
        console.log('Erro to fecth users');
      }
    }
    getUsers();
    // eslint-disable-next-line
  },[]);

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
        <p>{project?.description}</p>
      </Header>
      <br />
      <div className="df fdr alic" style={{marginBottom: 30}}>
        <div style={{marginRight: 10}} onClick={()=>setScreen('backlog')}>Backlog</div>
        <div style={{marginRight: 10}} onClick={()=>setScreen('sprints')}>Sprints ({sprintsBacklog?.length})</div>
        <div style={{marginRight: 10}} onClick={()=>setScreen('board')}>Board</div>
      </div>
      {
        screen === 'board' ? (
          <WrapperBoard>        
            <Board data={data}/>
          </WrapperBoard>          
        ) : null
      }
      {
        screen === 'backlog' ? (                 
          <Backlog data={productBacklog} users={users}/>               
        ) : null
      }

      {
        screen === 'sprints' ? (          
            <Sprints projectId={project?.id} data={sprintsBacklog}/>
        ) : null
      }

      
    </div>
  );
}
