import React from 'react';

// import {} from '../../../../components/TaskCard/styles';
import TaskCard from '../../../../components/TaskCard';

export default function Backlog({data, ...props}) {
    console.log(data)
    return (
        <div>
            <h1>Backlog</h1>    

                                                               
            {data.tasks ? data.tasks.map( (item, idx)=>(
                <TaskCard key={`Task${item.id}`} task={item} />                        
            )):null}                        
    
            
        </div> 
    )
}
  