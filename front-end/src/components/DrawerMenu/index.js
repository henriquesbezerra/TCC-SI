import React, {useState, useEffect} from 'react';
import { Aside, MenuButton, MenuOptions } from './styles';

import Link from './Link';

export function DrawerMenu(props) {
  const [statusSidebar, toggleStatus] = useState(true);  
  
  useEffect(()=>{
    let status = localStorage.getItem('drawer-menu');
    if(status){
      toggleStatus(true);
    }else{
      toggleStatus(false);
    }
  },[]);

  useEffect(()=>{  
    localStorage.setItem('drawer-menu',statusSidebar);    
  },[statusSidebar]);

  const checkCurrent =(option)=>{      
    if(option?.isParent){
      if(props.currentLocation.pathname.indexOf(option.path) > -1){
        return 1;
      }
    }
    return option.path === props.currentLocation.pathname ? 1 : 0    
  }


  return (    
    <Aside sidebar={statusSidebar}>
      <MenuButton 
        className={statusSidebar? 'on' : ''}
        onClick={()=>toggleStatus(!statusSidebar)} >
        <MenuButton.bar />
        <MenuButton.bar />
        <MenuButton.bar />
      </MenuButton>
      <MenuOptions>
        {
          props.menuOptions.map((option,index) =>(
            <Link 
              sidebar={statusSidebar ? 0 : 1}
              current={checkCurrent(option)}              
              key={`meuOption${index}`} to={option.path} >
              <div>{option.label}</div>
              <div>{option.icon}</div>
            </Link>
          ))
        }
        
      </MenuOptions>
    </Aside>       
  );
}
