import React, {useState, useEffect} from 'react';
import { useFetch } from '../../hooks/useFetch';
import SimpleCard from '../../components/SimpleCard';
import { Form } from '../../components/Form';
import DatePicker from 'react-datepicker';
import Select from 'react-select'

import moment from 'moment';


import "react-datepicker/dist/react-datepicker.css";

const options = [
  { value: 1, label: 'Chocolate' },
  { value: 2, label: 'Strawberry' },
  { value: 3, label: 'Vanilla' }
];

const optionsPriority = [
    { value: 0, label: 'Emergência' },
    { value: 1, label: 'Urgência' },
    { value: 2, label: 'Semi-urgência' },
    { value: 3, label: 'Não urgência' }
  ]

export default ({task, backlogId, ...props}) => {    

    const { authPost, authPut } = useFetch();

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState('');
    const [currentPriority, setCurrentPriority] = useState({});
    const [started_at, setStartedAt] = useState('');
    const [ending_at, setEndingAt] = useState('');
    const [users, setUsers] = useState([]);
    const [selectUsers, setSelectUsers] = useState([]);
    
    const handleSave = async(e) => {
        e.preventDefault();
        try {            
            let data = {
                name,
                description,
                priority,
                started_at: started_at ? moment(started_at).format('YYYY-MM-DD') : '',
                ending_at: ending_at ? moment(ending_at).format('YYYY-MM-DD') : '',
                users,
                backlog_id: backlogId    
            };
            
            let result = null;
            
            if(task){
                data.id = task.id;
                result = await authPut('/task', data);
            }else{
                result = await authPost('/task', data);
            }
            
            if(result){
                window.location.reload();
            }            
        } catch (error) {
            console.log('error: ', e); 
        }
    }

    useEffect(()=>{
        if(selectUsers?.length){
            let usersId = selectUsers.map(user=>user.value);
            setUsers(usersId);            
        }else{
            setUsers([])
        }
    },[selectUsers]);

    useEffect(()=>{
        if(Object.keys(task).length){
            console.log('CHORA',task);
            setName(task.name);
            setDescription(task.description);

            let objPriority = optionsPriority.filter(item=>item.value===task.priority);
            console.log(objPriority);
            setCurrentPriority(objPriority[0]);
        }
    },[task]);

    return (
        <SimpleCard>
            {task ? 'Editar tarefas' : 'Nova Tarefa'}
           <Form onSubmit={(e)=>handleSave(e)}>
            <Form.label>
                <p>Nome</p>
                <Form.input type="text" required value={name} onChange={e=>setName(e.target.value)}/>
            </Form.label>

            <Form.label>
                <p>Descrição</p>
                <Form.textarea required value={description} onChange={e=>setDescription(e.target.value)}></Form.textarea>
            </Form.label>

            <Form.label>
                <p>Prioridade</p>                
                <Select                     
                    placeholder="Selecione"                    
                    onChange={(value)=>setPriority(value.value)}
                    options={optionsPriority} 
                    value={currentPriority}
                />
            </Form.label>

            <Form.dateRange className="df fdr alib"> 
                <Form.label className="date">
                    <p>Início</p>
                    <DatePicker                        
                        placeholderText="dd/mm/aaaa"
                        selected={started_at}
                        onChange={date => setStartedAt(date)}
                        selectsStart
                        startDate={started_at}
                        endDate={ending_at}
                    />
                </Form.label>
                <Form.label className="date">
                    <p>Término</p>
                    <DatePicker                                           
                        placeholderText="dd/mm/aaaa"   
                        selected={ending_at}
                        onChange={date => setEndingAt(date)}
                        selectsEnd
                        startDate={started_at}
                        endDate={ending_at}
                        minDate={started_at}
                    />
                </Form.label>
            </Form.dateRange>
            <Form.label>
                <p>Usuários</p>
                <Select                     
                    placeholder="Selecione"
                    isMulti
                    onChange={(value)=>setSelectUsers(value)}
                    options={options} 
                />
            </Form.label>
            <Form.button type="submit" >Salvar</Form.button>
            </Form>
        </SimpleCard>
    )
}