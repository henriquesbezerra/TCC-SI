import React, {useEffect, useState} from 'react';
import { ContainerCards, Title, Header } from './styles';
import AddCard from '../../components/AddCard';
import Modal from '../../components/Modal';
import FormUsers from '../../forms/Users';
import UserCard from '../../components/UserCard';
import {useFetch} from '../../hooks/useFetch';

export default function Users({history}) {
    const { get } = useFetch();
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState(null);
    const [modalActivity, seTModalActivity] = useState(false);
    
    const loadProjects = async () =>{
        let response = await get('/users');
        if(response){
            setUsers(response);
        }
    }
    
    useEffect(()=>{
        loadProjects();
        // eslint-disable-next-line 
    },[]);

    return (
        <> 
            <Modal active={modalActivity} toogleActive={()=>seTModalActivity(!modalActivity)}>
                <FormUsers user={user}/>
            </Modal>
            <Header>              
                <Title>Usuários</Title>
            </Header>
            <ContainerCards>
                <AddCard  label="Novo usuário" onClick={()=>{
                    setUser(null);
                    seTModalActivity(!modalActivity);
                }}/>
                {users.map(user =>(<UserCard 
                    onClick={()=>{
                        setUser(user);
                        seTModalActivity(!modalActivity);
                    }}
                    key={user?.id}
                    user={user}                 
                />))}
            </ContainerCards>
        </>
    );
}
