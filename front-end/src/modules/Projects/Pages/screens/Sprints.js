import React, {useState, useEffect} from 'react';
import SprintCard from '../../../../components/SprintCard';
import AddCard from '../../../../components/AddCard';
import { ContainerPages } from '../styles';
import FormBacklogs from '../../../../forms/Backlogs';
import _ from 'lodash';

export default function Sprints({projectId, data, users}) {    
        
    const [sprints, setSprints] = useState([]);
    const [currentSprint, setCurrentSprint] = useState({});        
    
    const toggleSprint = item => {           
        setCurrentSprint(item);        
        localStorage.setItem('current-sprint',JSON.stringify(item));
    };
    
    useEffect(()=>{ 
        if(data?.length){              
            let storagedTask = localStorage.getItem('current-sprint');                        
            if(storagedTask?.length > 2){ 
                setCurrentSprint(JSON.parse(storagedTask));
            }else{
                toggleSprint(data[0]);                
            }               
            setSprints(_.orderBy(data, 'updated_at', 'desc'));
        }
    },[data]);    

    return (
        <ContainerPages>
            <div>
                <AddCard label="Nova Sprint" onClick={()=>toggleSprint({})} />
                {sprints.map( item =>(
                    <SprintCard 
                        key={`Sprint${item.id}`} 
                        task={item} 
                        onClick={()=>toggleSprint(item)}                       
                    />
                ))} 
            </div>            
            <FormBacklogs projectId={projectId} backlog={currentSprint}/>
        </ContainerPages> 
    )
}
  