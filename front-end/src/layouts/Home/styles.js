import styled from 'styled-components';


import { 
    spanFirstOn, spanFirstOffs, 
    spanSecondOn, spanSecondOffs, 
    spanThirdyOn, spanThirdyOffs 
} from './keyframes';

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto 10fr;
  grid-template-rows: 100vh;
  grid-template-areas: "aside main";
`;

export const Aside = styled.aside`
    grid-area: aside;
    width: ${props => props.sidebar ? '60px': '200px'};
    transition: all cubic-bezier(1, 0.08, 0.2, 0.51) 0.5s;    
    padding: 20px 5px;
    position: relative;
    background: #fff;
`;

export const Content = styled.div`  
    grid-area: main;
    display: flex;
    flex-direction: column;
    overflow: auto;  
    padding: 60px 0;  
    position: relative;
`;

export const Header = styled.header`    
    min-height: 60px;
    border: 1px solid blue;
    position: absolute;
    top: 0;
    width: 100%;
`;

export const Main = styled.main`      
    flex: 1;
    margin: -60px 0px;    
`;

export const Footer = styled.footer`        
    min-height: 60px;  
    position: absolute;
    bottom: 0;
    width: 100%;  
`;

export const MenuButton = styled.div`
    position: absolute;
    right: 0;
    top: 10px;
    width: 60px;       
    border: none;
    outline: none; 
    cursor: pointer;   
    padding: 10px;

    &.on{
        &:hover span::before{
            width: 100%
            transition: all 0.3s linear
        }

        span{
            
            & + span{
                margin-top: 0px;
            }

            &:nth-child(1){
                animation: ${spanFirstOn} 0.5s ease-in-out;
                animation-fill-mode: forwards
            }
        
            &:nth-child(2){
                animation: ${spanSecondOn} 0.5s ease-in-out;
                animation-fill-mode: forwards
            }
        
            &:nth-child(3){
                animation: ${spanThirdyOn} 0.5s ease-in-out;
                animation-fill-mode: forwards
            }
        }
    }
`;



MenuButton.bar = styled.span`    
    height: 4px;
    width: 40px;
    border-radius: 2px;    
    overflow: hidden;
    background: #b9b9b9;
    display: block;
    cursor: pointer;
    
    &:nth-child(1){
        animation: ${spanFirstOffs} 0.5s ease-in-out;
        animation-fill-mode: forwards
    }

    &:nth-child(2){
        animation: ${spanSecondOffs} 0.5s ease-in-out;
        animation-fill-mode: forwards
    }

    &:nth-child(3){
        animation: ${spanThirdyOffs} 0.5s ease-in-out;
        animation-fill-mode: forwards
    }
   
`;

