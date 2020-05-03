import React, {useState, useEffect} from 'react';
import { useFetch } from '../../hooks/useFetch';
import SimpleCard from '../../components/SimpleCard';
import { Form } from '../../components/Form';
import DatePicker, { registerLocale, setDefaultLocale  } from 'react-datepicker';
import pt from 'date-fns/locale/pt';
import Select from 'react-select'
import moment from 'moment';
import "react-datepicker/dist/react-datepicker.css";

registerLocale('pt', pt);
setDefaultLocale('pt');

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

    const { authPost, authPut, authDelete } = useFetch();

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');    
    const [currentPriority, setCurrentPriority] = useState({});
    const [started_at, setStartedAt] = useState('');
    const [ending_at, setEndingAt] = useState('');
    const [users, setUsers] = useState([]);
    const [usersOptions, setUsersOptions] = useState([]);
    const [selectUsers, setSelectUsers] = useState([]);
    
    const handleSave = async(e) => {
        e.preventDefault();
        try {            
            let data = {
                name,
                description,
                priority: currentPriority?.value,
                started_at: started_at ? moment(started_at).format('YYYY-MM-DD') : '',
                ending_at: ending_at ? moment(ending_at).format('YYYY-MM-DD') : '',
                users,
                backlog_id: backlogId    
            };
            
            let result = null;
            
            if(task.id){
                data.id = task.id;                
                result = await authPut('/task', data);
            }else{                
                result = await authPost('/task', data);
            }
            
            if(result){
                localStorage.setItem('current-backlog-task',JSON.stringify(result));
                window.location.reload();
            }            
        } catch (error) {
            console.log('error: ', e); 
        }
    }

    const handleDelete = async() => {
        if(task?.id){
            let result = await authDelete('/task',task.id);
            if(result){
                localStorage.setItem('current-backlog-task',JSON.stringify({}));
                window.location.reload();
            }
        }
    };


    useEffect(()=>{
        if(selectUsers?.length){
            let usersId = selectUsers.map(user=>user.value);
            setUsers(usersId);            
        }else{
            setUsers([])
        }
    },[selectUsers]);

    useEffect(()=>{                    
        setName(task?.name || '');
        setDescription(task?.description || '');        
        setStartedAt(task?.started_at ? new Date(task?.started_at) : '');
        setEndingAt(task?.ending_at ? new Date(task?.ending_at) : '');        
        setCurrentPriority(
            task?.priority ? 
            optionsPriority.filter(item=> 
                item.value === task.priority)[0] 
            : null
        );        
        setUsersOptions(
            task?.users?.length ? 
            task.users.map(item=>({
                value: item.id, 
                label: item.username
            })) : []
        );            
        
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
                    onChange={(value)=>setCurrentPriority(value)}
                    options={optionsPriority} 
                    value={currentPriority}
                />
            </Form.label>

            <Form.dateRange className="df fdr alib"> 
                <Form.label className="date">
                    <p>Início</p>
                    <DatePicker      
                        locale="pt"                  
                        placeholderText="dd/mm/aaaa"    
                        dateFormat="dd/MM/yyyy"                    
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
                        locale="pt"                                       
                        placeholderText="dd/mm/aaaa" 
                        dateFormat="dd/MM/yyyy"  
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
                    value={usersOptions}
                />
            </Form.label>
            <Form.button type="submit" >Salvar</Form.button>
            </Form>
            <div onClick={()=>handleDelete()}>Deletar</div>
        </SimpleCard>
    )
}