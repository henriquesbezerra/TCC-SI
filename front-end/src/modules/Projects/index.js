import React, {useEffect, useState} from 'react';
import { ContainerCards, Title, Header } from './styles';
import AddCard from '../../components/AddCard';
import Modal from '../../components/Modal';
import FormProject from '../../forms/Projects';
import ProjectCard from '../../components/ProjectCard';
import {formatDate} from '../../components/HelperFunctions';
import {useFetch} from '../../hooks/useFetch';

export default function Projects({history}) {
    const { get } = useFetch();
    const [projects, setProjects] = useState([]);
    const [modalActivity, seTModalActivity] = useState(false);
    

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
            <Modal active={modalActivity} toogleActive={()=>seTModalActivity(!modalActivity)}>
                <FormProject />
            </Modal>
            <Header>              
                <Title>Projetos</Title>
            </Header>
            <ContainerCards>
                <AddCard  label="Novo projeto" onClick={()=>seTModalActivity(!modalActivity)}/>
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
