import React, {useState, useEffect} from 'react';
import { useFetch } from '../../hooks/useFetch';
import SimpleCard from '../../components/SimpleCard';
import { Form } from '../../components/Form';
import DatePicker, { registerLocale, setDefaultLocale  } from 'react-datepicker';
import pt from 'date-fns/locale/pt';
import moment from 'moment';
import "react-datepicker/dist/react-datepicker.css";

registerLocale('pt', pt);
setDefaultLocale('pt');

export default ({projectId, backlog,  ...props}) => {    

    const { authPost, authPut, authDelete } = useFetch();
    const [name, setName] = useState('');    
    const [started_at, setStartedAt] = useState('');
    const [ending_at, setEndingAt] = useState('');    
    
    const handleSave = async(e) => {
        e.preventDefault();
        try {            
            let data = {
                name,                                
                started_at: started_at ? moment(started_at).format('YYYY-MM-DD') : '',
                ending_at: ending_at ? moment(ending_at).format('YYYY-MM-DD') : '',
                type: 2
            };
            
            let result = null;

            if(projectId){ data.project_id = projectId; }
            
            if(backlog?.id){
                data.id = backlog.id;                
                result = await authPut('/backlog', data);
            }else{                
                console.log('VAMOS SALVAR');
                result = await authPost('/backlog', data);
            }
            
            if(result){
                localStorage.setItem('current-sprint', JSON.stringify(result));
                console.log(result);
                setTimeout(()=>{
                    window.location.reload();
                },200);                
            }            
        } catch (error) {
            console.log('error: ', e); 
        }
    }

    const handleDelete = async() => {
        if(backlog?.id){
            let result = await authDelete('/backlog',backlog.id);
            if(result){                                
                window.location.reload();
            }
        }
    };

 
    useEffect(()=>{                    
        setName(backlog?.name || '');         
        setStartedAt(backlog?.started_at ? new Date(backlog?.started_at) : '');
        setEndingAt(backlog?.ending_at ? new Date(backlog?.ending_at) : '');
    },[backlog]);

    
    return (
        <SimpleCard>
            <Form.title>{backlog?.id ? 'Editar Sprint' : 'Nova Sprint'}</Form.title>
           <Form onSubmit={(e)=>handleSave(e)}>
            <Form.label>
                <p>Nome</p>
                <Form.input type="text" required value={name} onChange={e=>setName(e.target.value)}/>
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
            
            <Form.line />
            <Form.button type="submit" >{backlog?.id ? 'Atualizar' : 'Salvar'}</Form.button>
            </Form>
            {backlog ? 
                <Form.action onClick={()=>handleDelete()}>Deletar</Form.action>
            : null}
        </SimpleCard>
    )
}