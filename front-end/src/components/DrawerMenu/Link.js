import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default styled(Link)`
  display: flex;  
  flex-direction: row;
  align-items: center;
  text-decoration: none;
  width: 100%;  

  ${props => props.current ? 'color: blue;' : 'color: #b9b9b9;'}
  
  &:hover{
      color: red;
  }

  & div:nth-child(1){      
      width: ${props=> props.sidebar ? '0px' : '100%'};
      transition: width cubic-bezier(1, 0.08, 0.2, 0.51) 0.5s, 
      padding cubic-bezier(1, 0.08, 0.2, 0.51) 0.5s,
      color linear 0.2s; 
      overflow: hidden;
      font-size: 1.4rem;
      padding-left: ${props=> props.sidebar ? '0px' : '15px'};
      padding-top: 10px;
      padding-bottom: 10px;
  }
 
  & div:nth-child(2){        
    text-align: center;
    & svg{
        transition: color linear 0.2s; 
        font-size: 2rem;
        width: 60px;
    }
  }
`;
