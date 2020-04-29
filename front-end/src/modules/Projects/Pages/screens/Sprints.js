import React, {useState, useEffect} from 'react';
import moment from 'moment';
// import priority, { Priority } from '../../../../components/Priority';
import SimpleCard from '../../../../components/SimpleCard';
import TaskCard from '../../../../components/TaskCard';

import { ContainerPages, ViewTitle, ViewProperty } from '../styles';

export default function Sprints({data, ...props}) {
    
    const [currentSprint, setCurrentSprint] = useState({});

    const toggleTask = item => {        
        setCurrentSprint(item);
        localStorage.setItem('current-sprint',JSON.stringify(item));
    };

    useEffect(()=>{
        if(data && data.length){            
            let storagedTask = localStorage.getItem('current-sprint');            
            if(storagedTask){                
                setCurrentSprint(JSON.parse(storagedTask));
            }else{
                toggleTask(data[0]);                
            }            
        }
    },[data]);    

    return (
        <ContainerPages grid="1fr 2fr">
            <div>
                {data ? data.map( (item, idx)=>(
                    <TaskCard key={`Task${item.id}`} task={item} onClick={()=>toggleTask(item)}/>                        
                )):null} 
            </div>
            {currentSprint ? (
                <SimpleCard>
                    <ViewTitle>
                        {/* <Priority type="square" label urgency={currentSprint?.priority || 0}/> */}
                        {currentSprint.name}
                    </ViewTitle>                                        

                    <ViewProperty>
                        <ViewProperty.label>Data de início:</ViewProperty.label>
                        <ViewProperty.value>{moment(currentSprint.started_at).format('DD/MM/YYYY')}</ViewProperty.value>
                    </ViewProperty>

                    {currentSprint.ending_at &&
                        <ViewProperty>
                            <ViewProperty.label>Data de término:</ViewProperty.label>
                            <ViewProperty.value>{moment(currentSprint.ending_at).format('DD/MM/YYYY')}</ViewProperty.value>
                        </ViewProperty>
                    }

                    {currentSprint.finished_at &&
                        <ViewProperty>
                            <ViewProperty.label>Data de conclusão:</ViewProperty.label>
                            <ViewProperty.value>{moment(currentSprint.finished_at).format('DD/MM/YYYY')}</ViewProperty.value>
                        </ViewProperty>
                    }
                    <ViewProperty>
                        <ViewProperty.label>Nº Tarefas:</ViewProperty.label>
                        <ViewProperty.value> 
                            {currentSprint?.tasks?.length}                            
                        </ViewProperty.value>
                    </ViewProperty>
                </SimpleCard>          
            ):null}                         
        </ContainerPages> 
    )
}
  