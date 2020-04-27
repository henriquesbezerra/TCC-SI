import React from 'react';
import {     
    BulletPriority,
    SquarePriority   
 } from './styles';
//Pallet: https://flatuicolors.com/palette/defo

const priority = {
    "0": {
        label: "Emergência",
        color: "#e74c3c"
    },
    "1": {
        label: "Urgência",
        color: "#f1c40f"
    },
    "2": {
        label: "Semi-urgência",
        color: "#2ecc71"
    },
    "3": {
        label: "Não urgência",
        color: "#3498db"
    },
};

const Priority = ({label, type, urgency }) => {    
    return(<>
        {type === "bullet" ? (
            <BulletPriority color={priority[urgency]?.color} />
        ): null}  
        {type === "square" ? (
            <SquarePriority color={priority[urgency]?.color} />                
        ): null}  
    </>);
}


export default priority;
export { Priority };