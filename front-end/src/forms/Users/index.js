import React, {useState, useEffect, useContext} from 'react';
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

export default function FormUsers({user , ...props}) {    

    const { authPost, authPut, authDelete } = useFetch();
        
    const [state, updateState] = useState({
        username: '',
        password: '',
        email: '',
        biography: '',
        phone: '',
        office: '',
        access_level: '',
        birthdate: ''
    });
   

    const setState = (key, value) =>{
        updateState({...state, [key]:value });
    };

    const handleSave = async(e) => {
        e.preventDefault();
        try {            
            let data = {
                username: state.username, 
                name: state.name,
                password: state.password,
                email: state.email,
                biography: state.biography,
                phone: state.phone,
                office: state.office,
                access_level: state.access_level,
                birthdate: state.birthdate ? moment(state.birthdate).format('YYYY-MM-DD') : ''
            };
            
            let result = null;

            if(user?.id){
                data.id = user.id;                
                result = await authPut('/add', data);
            }else{                
                result = await authPost('/add', data);
            }
            
            if(result){                                
                window.location.reload();
            }            
        } catch (error) {
            console.log('error: ', error); 
        }
    }

    const handleDelete = async() => {
        if(user?.id){
            let result = await authDelete('/add',user.id);
            if(result && props?.history){                
                props.history.replace({pathname: "/usuarios"});
            }
        }
    };

    
    useEffect(()=>{     
        updateState({
            ...state,
            username: user?.username || '',
            name: user?.name || '',
            email: user?.email || '',
            password: user?.password || '',
            biography: user?.biography || '',
            phone: user?.phone || '',
            office: user?.office || '',
            access_level: user?.access_level || '',
            birthdate: user?.birthdate ? new Date(user?.birthdate) : '',
        });     
        // eslint-disable-next-line 
    },[user]);

    
    return (
        <SimpleCard height="670px" width="460px">
            <Form.title>{user?.id ? 'Editar usuário' : 'Novo usuário'}</Form.title>
            <Form onSubmit={(e)=>handleSave(e)}>
                <Form.dateRange className="df fdr alib jc-sb">
                    <Form.label>
                        <p>Username*</p>
                        <Form.input type="text" required value={state.username} onChange={e=>setState('username',e.target.value)}/>
                    </Form.label>
                    <Form.label>
                        <p>Email*</p>
                        <Form.input type="email" required value={state.email} onChange={e=>setState('email',e.target.value)}/>                    
                    </Form.label>  
                </Form.dateRange>
                
                <Form.dateRange className="df fdr alib jc-sb">
                    <Form.label>
                        <p>Password*</p>
                        <Form.input type="password" required value={state.password} onChange={e=>setState('password',e.target.value)}/>                    
                    </Form.label>                                       
                    <Form.label>
                        <p>Telefone</p>
                        <Form.input type="text" value={state.phone} onChange={e=>setState('phone',e.target.value)}/>                    
                    </Form.label>
                </Form.dateRange>

                <Form.dateRange className="df fdr alib jc-sb">    
                    <Form.label>
                        <p>Nível de acesso*</p>
                        <Form.input type="text" required value={state.access_level} onChange={e=>setState('access_level',e.target.value)}/>                    
                    </Form.label>
                    <Form.label>
                        <p>Cargo</p>
                        <Form.input type="text" value={state.office} onChange={e=>setState('office',e.target.value)}/>
                    </Form.label>
                </Form.dateRange>
                
                <Form.dateRange className="df fdr alib jc-sb">
                    <Form.label>
                        <p>Nome completo</p>
                        <Form.input type="text" value={state.name} onChange={e=>setState('name',e.target.value)}/>
                    </Form.label>                           


                    <Form.label className="date">
                        <p>Data de nascimento</p>
                        <DatePicker      
                            locale="pt"                  
                            placeholderText="dd/mm/aaaa"    
                            dateFormat="dd/MM/yyyy"                    
                            selected={state.birthdate}
                            onChange={date => setState('birthdate',date)}                                                      
                        />
                    </Form.label>
                </Form.dateRange>

                <Form.label>
                    <p>Biografia</p>
                    <Form.textarea value={state.biography} onChange={e=>setState('biography',e.target.value)}></Form.textarea>
                </Form.label>

                
                <Form.line />                
                <Form.button type="submit" >{user?.id ? 'Atualizar' : 'Salvar'}</Form.button>
            </Form>
            {user?.id ? <Form.action onClick={()=>handleDelete()}>Deletar</Form.action> :  <Form.line /> }
        </SimpleCard>
    )
}