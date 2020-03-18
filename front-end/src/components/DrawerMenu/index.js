import React, {useState} from 'react';
import { Aside, MenuButton } from './styles';

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
    </Aside>       
  );
}
