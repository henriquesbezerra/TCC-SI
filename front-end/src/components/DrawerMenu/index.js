import React, {useState} from 'react';
import { Aside, MenuButton, MenuOptions } from './styles';

import Link from './Link';

export function DrawerMenu(props) {
  const [statusSidebar, toggleSidebar] = useState(true);  
  return (    
    <Aside sidebar={statusSidebar}>
      <MenuButton 
        className={statusSidebar? '' : 'on'}
        onClick={()=>toggleSidebar(!statusSidebar)} >
        <MenuButton.bar />
        <MenuButton.bar />
        <MenuButton.bar />
      </MenuButton>
      <MenuOptions>
        {
          props.menuOptions.map((option,index) =>(
            <Link 
              sidebar={statusSidebar ? 1 : 0}
              current={option.path === props.currentLocation.pathname ? 1 : 0}              
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
