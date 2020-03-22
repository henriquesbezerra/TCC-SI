import React, {useEffect, useState} from 'react';

import { ContainerCards } from './styles';

import ProjectCard from '../../components/ProjectCard';
import {formatDate} from '../../components/HelperFunctions';

import {useFetch} from '../../hooks/useFetch';

export default function Projects() {
    const { get } = useFetch();
    const [projects, setProjects] = useState([]);

    const loadProjects = async () =>{
        let response = await get('/project');
        if(response){
            console.log('projetos::',response);
            setProjects(response);
        }
    }
    useEffect(()=>{
        loadProjects();
    },[]);

    return (
        <div>
            
            <h1>Projetos</h1>
            <ContainerCards>
                {projects.map(item =>(<ProjectCard 
                    key={item?.id}
                    title={item?.titulo}
                    description={item?.descricao}
                    client={item?.cliente}
                    start_date={formatDate(item?.data_inicio)}
                    end_date={formatDate(item?.data_termino)}
                />))}
            </ContainerCards>
        </div>
    );
}
