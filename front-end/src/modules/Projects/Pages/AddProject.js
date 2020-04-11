import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import { useFetch } from '../../../hooks/useFetch';

import { Header, Title } from '../styles';
import SimpleCard from '../../../components/SimpleCard';
import { Form } from '../../../components/Form/styles';

import { MdKeyboardBackspace } from 'react-icons/md';

export default function AddProject(props) {
  
  const { history } = props;

  const { authPost } = useFetch();

  const [titulo, setTitulo] = useState('');
  const [cliente, setCliente] = useState('');
  const [descricao, setDescricao] = useState('');
  const [users, setUsers] = useState([]);

  const handleSave = async(e) => {
    e.preventDefault();
    try {      
      const result = await authPost('/project', {titulo, cliente, descricao, users});
      console.log('result: ', result);  
      history.replace({pathname: '/projetos'})
    } catch (error) {
      console.log('error: ', e); 
    }
  }

  return (
    <div>            
      <Header>
        <div className="df fdr alic">
            <Link  to="/projetos" className='circleButton'>
              <MdKeyboardBackspace size={30} color="#000" />
            </Link>                    
            <div style={{marginLeft: 10}}>Lista de projetos</div>
        </div>
        <Title>Novo projeto</Title>
      </Header>
      <SimpleCard>
        <Form onSubmit={(e)=>handleSave(e)}>
          <Form.label>
            <p>Título</p>
            <Form.input type="text" required value={titulo} onChange={e=>setTitulo(e.target.value)}/>
          </Form.label>

          <Form.label>
            <p>Descrição</p>
            <Form.textarea required value={descricao} onChange={e=>setDescricao(e.target.value)}></Form.textarea>
          </Form.label>

          <Form.label>
            <p>Cliente</p>
            <Form.input required type="text" value={cliente} onChange={e=>setCliente(e.target.value)}/>
          </Form.label>

          <Form.button type="submit" >Salvar</Form.button>
        </Form>
      </SimpleCard>
    </div>
  );
}
