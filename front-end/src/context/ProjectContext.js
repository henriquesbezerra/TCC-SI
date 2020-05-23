import React, { useEffect, useState } from 'react';
import { useFetch } from '../hooks/useFetch';

const Context  = React.createContext({});

const ProjectContext = ({...props}) => {
    const { get } = useFetch();
    const [users, setUsers] = useState([]);
    
    useEffect(()=>{
        const getUsers = async()=>{
          try {
            const result = await get(`/users`);              
            if(result){          
              setUsers(
                result.map(item=>({
                  value: item.id, 
                  label: item.username
                }))
              );
            }
          } catch (e) {
            console.log('Erro to fecth users',e);
          }
        }
        getUsers();
      // eslint-disable-next-line
    },[]);

    return(
        <Context.Provider value={{
            users,
            setUsers
        }}>
            {props.children}
        </Context.Provider>
    )
};

export { ProjectContext, Context };