import styled from "styled-components";

export const ContainerCards = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-row: 100vh;
    grid-gap: 20px;
`;

export const Title = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;  
    a{
        display: flex;
        border-radius: 50%;
        background-color: #FFF;
        padding: 5px;
        align-items: center;
        justify-content: center;
        box-shadow: 0px 1px 3px #00000073;    
    }  
`;