import styled from 'styled-components';

export const Container = styled.div`    
    display: flex;
    flex-direction: row;    
    width: 100%;    
    position: relative;    
    border-radius: 5px;
    margin-bottom: 10px;
    padding: 15px;    
    border: 2px dashed #ccc;
    color: #7b7b7b; 
    cursor: pointer;

    & .AddCard--label{
        margin-left: 7px;
    }
`;
