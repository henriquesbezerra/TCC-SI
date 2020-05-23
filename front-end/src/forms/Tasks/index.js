import React, {useState, useEffect, useContext} from 'react';
import { useFetch } from '../../hooks/useFetch';
import SimpleCard from '../../components/SimpleCard';
import { Form } from '../../components/Form';
import DatePicker, { registerLocale, setDefaultLocale  } from 'react-datepicker';
import pt from 'date-fns/locale/pt';
import Select from 'react-select'
import moment from 'moment';
import "react-datepicker/dist/react-datepicker.css";

import { Context } from '../../context/ProjectContext';

registerLocale('pt', pt);
setDefaultLocale('pt');

const optionsPriority = [
    { value: 0, label: 'Emergência' },
    { value: 1, label: 'Urgência' },
    { value: 2, label: 'Semi-urgência' },
    { value: 3, label: 'Não urgência' }
  ]

export default ({task, backlogId, ...props}) => {    

    const { authPost, authPut, authDelete } = useFetch();
    const { users } = useContext(Context);
    
    const [state, updateState] = useState({
        name: '',
        description: '',
        currentPriority: {},
        started_at: '',
        ending_at: '',
        users: [],
        usersOptions: [],
        screen: 'add'
    });

    const setState = (key, value) =>{
        updateState({...state, [key]:value });
    };

    const handleSave = async(e) => {
        e.preventDefault();
        try {            
            let data = {
                name: state.name,
                description: state.description,
                priority: state.currentPriority?.value,
                started_at: state.started_at ? moment(state.started_at).format('YYYY-MM-DD') : '',
                ending_at: state.ending_at ? moment(state.ending_at).format('YYYY-MM-DD') : '',  
                users: state.users,              
                backlog_id: backlogId    
            };
            
            let result = null;
            
            if(task?.id){
                data.id = task.id;                
                result = await authPut('/task', data);
            }else{                
                result = await authPost('/task', data);
            }
            
            if(result){                
                window.location.reload();
            }            
        } catch (error) {
            console.log('error: ', error); 
        }
    }

    const handleDelete = async() => {
        if(task?.id){
            let result = await authDelete('/task',task.id);
            if(result){                
                window.location.reload();
            }
        }
    };

    const selectUser = (value, { action }) => {
        const actions = {
            "select-option": ()=>{                
                let usersId = value.map(user=>user.value);            
                updateState({
                    ...state,
                    users: usersId,
                    usersOptions: value
                });                          
            },
            "remove-value":()=>{
                if(value?.length){
                    let usersId = value.map(user=>user.value);            
                    setState('users', usersId);
                }else{
                    setState('users', null);
                }                
                setState('usersOptions', value);
            },
            "clear":()=>{                
                updateState({
                    ...state,
                    users: [],
                    usersOptions: []
                });
            },
            "deselect-option":()=>{},
            "pop-value":()=>{},
            "set-value":()=>{},
            "clear-option":()=>{}
        };
        actions[action]();        
    };

    useEffect(()=>{     
        updateState({
            ...state,
            name: task?.name || '',
            description: task?.description || '',
            started_at: task?.started_at ? new Date(task?.started_at) : '',
            ending_at: task?.ending_at ? new Date(task?.ending_at) : '',
            
            currentPriority: task?.priority ? 
                optionsPriority.filter(item=> 
                    item.value === task.priority)[0] 
                : null,

            users: task?.users?.length ? 
            task.users.map(user => user.id) : [],

            usersOptions:  task?.users?.length ? 
            task.users.map(item=>({
                value: item.id, 
                label: item.username
            })) : []
        });
        // eslint-disable-next-line 
    },[task]);

    
    return (
        <SimpleCard>
        
            <Form.title>{task?.id ? 'Editar tarefa' : 'Nova Tarefa'}</Form.title>
            <Form onSubmit={(e)=>handleSave(e)}>
                <Form.label>
                    <p>Nome</p>
                    <Form.input type="text" required value={state.name} onChange={e=>setState('name',e.target.value)}/>
                </Form.label>

                <Form.label>
                    <p>Descrição</p>
                    <Form.textarea required value={state.description} onChange={e=>setState('description',e.target.value)}></Form.textarea>
                </Form.label>

                <Form.label>
                    <p>Prioridade</p>                
                    <Select                     
                        placeholder="Selecione"                    
                        onChange={(value)=>setState('currentPriority',value)}
                        options={optionsPriority} 
                        value={state.currentPriority}
                    />
                </Form.label>

                <Form.dateRange className="df fdr alib"> 
                    <Form.label className="date">
                        <p>Início</p>
                        <DatePicker      
                            locale="pt"                  
                            placeholderText="dd/mm/aaaa"    
                            dateFormat="dd/MM/yyyy"                    
                            selected={state.started_at}
                            onChange={date => setState('started_at',date)}
                            selectsStart
                            startDate={state.started_at}
                            endDate={state.ending_at}
                        />
                    </Form.label>
                    <Form.label className="date">
                        <p>Término</p>
                        <DatePicker    
                            locale="pt"                                       
                            placeholderText="dd/mm/aaaa" 
                            dateFormat="dd/MM/yyyy"  
                            selected={state.ending_at}
                            onChange={date => setState('ending_at',date)}
                            selectsEnd
                            startDate={state.started_at}
                            endDate={state.ending_at}
                            minDate={state.started_at}
                        />
                    </Form.label>
                </Form.dateRange>
                
                <Form.label>
                    <p>Usuários</p>
                    <Select                     
                        placeholder="Selecione"
                        isMulti
                        onChange={selectUser}
                        options={users} 
                        value={state.usersOptions}
                    />
                </Form.label>

                <Form.line />  

                {state.screen==='add'?<Form.action onClick={()=>setState('screen','setSprint')}>Definir sprint</Form.action>:null}
                {state.screen === 'setSprint' ? (<>            
                    <Form.label>
                        <p style={{textAlign:'center'}}>Escolha a sprint</p>
                        <Select                     
                            placeholder="Selecione"
                            isMulti
                            onChange={selectUser}
                            options={props?.sprint} 
                            value={state.sprintOptions}
                        />
                    </Form.label>
                    <Form.action onClick={()=>setState('screen','add')}>Cancelar</Form.action>
                </>): null}

                <Form.line />                
                <Form.button type="submit" >{task?.id ? 'Atualizar' : 'Salvar'}</Form.button>
                </Form>
                {task?.id ? <Form.action onClick={()=>handleDelete()}>Deletar</Form.action> :  <Form.line /> }
                
        </SimpleCard>
    )
}