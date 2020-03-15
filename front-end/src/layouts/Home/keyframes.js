
import {keyframes} from 'styled-components';

export const spanFirstOn = keyframes`
    0%{
        transform: translate(0%, 0%);
    }    
    30%{
        transform:  translate(0%, 2px) ;
    }     
    100%{
        transform: translate(0%, 4px) rotate(45deg) ;
    }
`;
export  const spanFirstOffs = keyframes`
    0%{
        transform: translate(0%, 4px) rotate(45deg);         
    }
    30%{
        transform: translate(0%, 4px) rotate(0deg);
    }
    100%{
        transform: translate(0%, 0%)   
    }
`;


export const spanSecondOn = keyframes`
    0%{
        transform: translate(0%, 5px)        
    }
    25%{
        background: #dedede;
    }
    50%{
        transform: translate(0%, -1px) scale(1)
    }
    100%{
        transform: translate(0%, -1px) scale(0);        
    }
`;
export const spanSecondOffs = keyframes`
    0%{
        transform: translate(0%, -1px) scale(0);
    }
    25%{
        background: #b9b9b9;
    }
    50%{
        transform: translate(0%, 2px);
    }
    100%{
        transform: translate(0%, 5px) scale(1);        
    }
`;



export const spanThirdyOn = keyframes`
    0%{
        transform: translate(0%, 10px)
        
    }
    30%{
        transform: translate(0%, -6px)
    }
    100%{
        transform: rotate(-45deg) 
        translate(4%, -4px);               
    }
`;
export const spanThirdyOffs = keyframes`
    0%{
        transform: rotate(-45deg) translate(4%, -4px); 
    }
    30%{
        transform: rotate(0deg) translate(4%, -4px); 
        
    }
    100%{
        transform: translate(0%, 10px)
    }
`;