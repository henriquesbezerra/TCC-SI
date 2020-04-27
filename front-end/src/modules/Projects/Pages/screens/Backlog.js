import React, {useState, useEffect} from 'react';
import moment from 'moment';
import priority, { Priority } from '../../../../components/Priority';
import SimpleCard from '../../../../components/SimpleCard';
import TaskCard from '../../../../components/TaskCard';
import AddCard from '../../../../components/AddCard';
import { ContainerPages, ViewTitle, ViewProperty } from '../styles';
import FormTasks from '../../../../forms/Tasks';

export default function Backlog({data}) {    
    
    const [currentTask, setCurrentTask] = useState({});
    const [editTask, SetEditTask] = useState(false);
    const [formTask, toggleFormTask] = useState(false);
    
    const toggleTask = item => {   
        toggleFormTask(false);
        setCurrentTask(item);
        localStorage.setItem('current-backlog-task',JSON.stringify(item));
    };

    const handleEdit = item => {
        console.log('EITAA',item);
        toggleFormTask(true);
        SetEditTask(item);
    }

    const handleDelete = id => {
        
    }

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
                <AddCard label="Nova tarefa" onClick={()=>toggleFormTask(!formTask)} />
                {data.tasks ? data.tasks.map( (item, idx)=>(
                    <TaskCard 
                        key={`Task${item.id}`} 
                        task={item} 
                        onClick={()=>toggleTask(item)}
                        onEdit={()=>handleEdit(item)}
                        onDelete={()=>handleDelete(item.id)}
                    />
                )):null} 
            </div>
            {currentTask && !formTask ? (
                <SimpleCard>
                    <ViewTitle>
                        <Priority type="square" label urgency={currentTask?.priority || 0}/>
                        {currentTask.name}
                    </ViewTitle>                                        

                    <ViewProperty>
                        <ViewProperty.label>Data de início:</ViewProperty.label>
                        <ViewProperty.value>{moment(currentTask.started_at).format('DD/MM/YYYY')}</ViewProperty.value>
                    </ViewProperty>

                    {currentTask.ending_at &&
                        <ViewProperty>
                            <ViewProperty.label>Data de término:</ViewProperty.label>
                            <ViewProperty.value>{moment(currentTask.ending_at).format('DD/MM/YYYY')}</ViewProperty.value>
                        </ViewProperty>
                    }

                    {currentTask.finished_at &&
                        <ViewProperty>
                            <ViewProperty.label>Data de conclusão:</ViewProperty.label>
                            <ViewProperty.value>{moment(currentTask.finished_at).format('DD/MM/YYYY')}</ViewProperty.value>
                        </ViewProperty>
                    }
                    <ViewProperty>
                        <ViewProperty.label>Prioridade:</ViewProperty.label>
                        <ViewProperty.value> 
                            {priority[currentTask?.priority]?.label || 0}                            
                        </ViewProperty.value>
                    </ViewProperty>

                    {currentTask?.users?.length ? 
                        <ViewProperty>
                            <ViewProperty.label>Responsável(s):</ViewProperty.label>
                            <ViewProperty.value>
                                {currentTask.users.map((user,idx)=>(
                                    <div key={user.username}>{user.username}{idx > 0 && idx < currentTask?.users?.length ? ', ':null }</div>
                                ))}
                            </ViewProperty.value>
                        </ViewProperty> 
                    : null}
                    
                    <br />
                    <ViewProperty>
                        <ViewProperty.label>Descrição:</ViewProperty.label>
                        <ViewProperty.value>{currentTask?.description}</ViewProperty.value>
                    </ViewProperty>  
                </SimpleCard>          
            ):null}   

            {formTask && <FormTasks backlogId={data.id} task={editTask} />}                      
        </ContainerPages> 
    )
}
  