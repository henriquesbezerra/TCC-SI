import styled from 'styled-components';

import { 
    spanFirstOn, spanFirstOffs, 
    spanSecondOn, spanSecondOffs, 
    spanThirdyOn, spanThirdyOffs 
} from './keyframes';

export const Aside = styled.aside`
    grid-area: aside;
    width: ${props => props.sidebar ? '250px': '60px'};
    transition: all cubic-bezier(1, 0.08, 0.2, 0.51) 0.5s;    
    padding: 65px  0;
    position: relative;
    background: #fff;
    height: 100%;
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


export const MenuOptions = styled.div`
    display: flex;
    flex-direction: column;
`;

