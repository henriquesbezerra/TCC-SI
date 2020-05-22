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

export default ({project, backlogId, ...props}) => {    

    const { authPost, authPut, authDelete } = useFetch();
    
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
                started_at: state.started_at ? moment(state.started_at).format('YYYY-MM-DD') : '',
                ending_at: state.ending_at ? moment(state.ending_at).format('YYYY-MM-DD') : '',  
                users: state.users                
            };
            
            let result = null;
            
            if(project?.id){
                data.id = project.id;                
                result = await authPut('/project', data);
            }else{                
                result = await authPost('/project', data);
            }
            
            if(result){                
                window.location.reload();
            }            
        } catch (error) {
            console.log('error: ', error); 
        }
    }

    const handleDelete = async() => {
        if(project?.id){
            let result = await authDelete('/project',project.id);
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
            name: project?.name || '',
            description: project?.description || '',
            started_at: project?.started_at ? new Date(project?.started_at) : '',
            ending_at: project?.ending_at ? new Date(project?.ending_at) : '',

            users: project?.users?.length ? 
            project.users.map(user => user.id) : [],

            usersOptions:  project?.users?.length ? 
            project.users.map(item=>({
                value: item.id, 
                label: item.username
            })) : []
        });
        // eslint-disable-next-line 
    },[project]);

    
    return (
        <SimpleCard>
        
            <Form.title>{project?.id ? 'Editar projeto' : 'Novo projeto'}</Form.title>
            <Form onSubmit={(e)=>handleSave(e)}>
                <Form.label>
                    <p>Nome</p>
                    <Form.input type="text" required value={state.name} onChange={e=>setState('name',e.target.value)}/>
                </Form.label>

                <Form.label>
                    <p>Descrição</p>
                    <Form.textarea required value={state.description} onChange={e=>setState('description',e.target.value)}></Form.textarea>
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
                        options={props?.users} 
                        value={state.usersOptions}
                    />
                </Form.label>
                <Form.line />                
                <Form.button type="submit" >{project?.id ? 'Atualizar' : 'Salvar'}</Form.button>
            </Form>
            {project?.id ? <Form.action onClick={()=>handleDelete()}>Deletar</Form.action> :  <Form.line /> }
                
        </SimpleCard>
    )
}