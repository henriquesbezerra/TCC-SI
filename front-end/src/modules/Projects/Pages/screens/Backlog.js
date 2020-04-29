import React, {useState, useEffect} from 'react';
import TaskCard from '../../../../components/TaskCard';
import AddCard from '../../../../components/AddCard';
import { ContainerPages } from '../styles';
import FormTasks from '../../../../forms/Tasks';

export default function Backlog({data}) {    
        
    const [currentTask, setCurrentTask] = useState({});        
    
    const toggleTask = item => {           
        setCurrentTask(item);        
        localStorage.setItem('current-backlog-task',JSON.stringify(item));
    };
    
    useEffect(()=>{
        if(data.tasks && data.tasks.length){            
            let storagedTask = localStorage.getItem('current-backlog-task');            
            if(storagedTask){                
                setCurrentTask(JSON.parse(storagedTask));
            }else{
                toggleTask(data.tasks[0]);                
            }            
        }
    },[data]);    

    return (
        <ContainerPages>
            <div>
                <AddCard label="Nova tarefa" onClick={()=>toggleTask({})} />
                {data.tasks ? data.tasks.map( item =>(
                    <TaskCard 
                        key={`Task${item.id}`} 
                        task={item} 
                        onClick={()=>toggleTask(item)}                       
                    />
                )):null} 
            </div>            
            <FormTasks backlogId={data.id} task={currentTask} />
        </ContainerPages> 
    )
}
  