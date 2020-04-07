import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import { useFetch } from '../../../hooks/useFetch';

import { Header, Title } from '../styles';
import SimpleCard from '../../../components/SimpleCard';
import { Form } from '../../../components/Form/styles';

import { MdKeyboardBackspace } from 'react-icons/md';

export default function EditProject(props) {
  
  const { history, match } = props;

  console.log(props);

  const { authPut } = useFetch();

  const [titulo, setTitulo] = useState('');
  const [cliente, setCliente] = useState('');
  const [descricao, setDescricao] = useState('');
  const [users, setUsers] = useState([]);

  const handleSave = async(e) => {
    e.preventDefault();
    try {      
      const result = await authPut(`/project/${match.params.id}`, {titulo, cliente, descricao, users});
      console.log('result: ', result);  
      history.replace({pathname: '/projetos'})
    } catch (error) {
      console.log('error: ', e); 
    }
  }

  return (
    <div>            
      <Header>
        <Link className="goBackLink" to="/projetos">
          <MdKeyboardBackspace size={30} color="#000" />
        </Link>
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
