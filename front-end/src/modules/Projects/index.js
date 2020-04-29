import React, {useEffect, useState} from 'react';

import { ContainerCards, Title, Header } from './styles';

import { MdAdd  } from 'react-icons/md';


import ProjectCard from '../../components/ProjectCard';
import {formatDate} from '../../components/HelperFunctions';

import {useFetch} from '../../hooks/useFetch';
import { Link } from 'react-router-dom';

export default function Projects({history}) {
    const { get } = useFetch();
    const [projects, setProjects] = useState([]);

    const loadProjects = async () =>{
        let response = await get('/project');
        if(response){
            setProjects(response);
        }
    }
    useEffect(()=>{
        loadProjects();
        // eslint-disable-next-line 
    },[]);

    return (
        <div>            
            <Header>
                <div className="df fdr alic">
                    <Link  to="/projetos/novo" className='circleButton'>
                        <MdAdd size={30} color="#000" />
                    </Link>                    
                    <div style={{marginLeft: 10}}>Novo Projeto</div>
                </div>
                <Title>Lista projetos</Title>
            </Header>
            <ContainerCards>
                {projects.map(item =>(<ProjectCard 
                    onClick={()=>{
                        history.replace({pathname: `/projetos/${item?.id}`})
                    }}
                    key={item?.id}
                    title={item?.name}
                    description={item?.description}                    
                    started_at={formatDate(item?.started_at)}
                    ending_at={formatDate(item?.ending_at)}
                />))}
            </ContainerCards>
        </div>
    );
}
