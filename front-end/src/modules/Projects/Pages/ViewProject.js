import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { MdKeyboardBackspace, MdCreate, MdDateRange, MdAlarm, MdCheckCircle } from 'react-icons/md';
import { useFetch } from '../../../hooks/useFetch';
import { Header, Title, WrapperBoard, DateList, DateItem, Responsibles, ResponsibleLabel } from '../styles';
import Board from '../../../components/Board';
import Modal from '../../../components/Modal';
import { ProjectContext } from '../../../context/ProjectContext';
import FormProject from '../../../forms/Projects';


export default function ViewProject(props) {
  
  const { match } = props;

  const { get } = useFetch();  
  
  const [project, setProject] = useState('');    
  const [modal, setModal]  = useState(false);
  
  useEffect(()=>{    
    const getProject = async() => {    
      try {      
        const result = await get(`/project/${match.params.id}`);     
        console.log('Result',result);
        setProject(result);
        console.log(moment(project?.created_at).format('DD/MM/YYYY'));
      } catch (e) {
        console.log('error: ', e); 
      }
    }
    getProject();
    // eslint-disable-next-line
  },[]);

  return (    
      <ProjectContext>
        <Modal active={modal} toogleActive={()=>setModal(!modal)}>
          <FormProject project={project}/>
        </Modal>
        <Header>        
          <div className="df fdr alic">
              <Link  to="/projetos" className='circleButton'>
                <MdKeyboardBackspace size={30} color="#000" />
              </Link>                    
              <div style={{marginLeft: 10}}>Lista de projetos</div>
          </div>     
          <Title>
            {project?.name}
            <button type="button" onClick={()=>setModal(!modal)}><MdCreate size={20}/></button>
          </Title>

          {project?.users?.length > 0 &&
            <Responsibles>
              <b>Responsável (s):</b>
              {project?.users.map((responsible,index)=>
                <ResponsibleLabel key={responsible.id+index}>
                  {responsible?.username}
                </ResponsibleLabel>)}
            </Responsibles>
          }

          
          <p><b>Cronograma:</b></p><br />
          <DateList row>
            <DateItem>
              <MdDateRange size={20} />
              {moment(project?.started_at || project?.created_at).format('DD/MM/YYYY')}
            </DateItem>

            {project?.ending_at && 
              <DateItem>
                <MdAlarm size={20} />
                {moment(project?.ending_at).format('DD/MM/YYYY')}
              </DateItem>
            }
            {project?.finished_at && 
              <DateItem color={project?.finished_at && '#2ecc71'}>
                <MdCheckCircle size={20} />
                {moment(project?.finished_at).format('DD/MM/YYYY')}
              </DateItem>
            }
          </DateList>                 
          
          <p><b>Descrição:</b> {project?.description}</p>
          
        </Header>

        <br />
        <br />
        
        <WrapperBoard>        
          <Board data={project}/>
        </WrapperBoard>  
     
      </ProjectContext>             
  );
}
