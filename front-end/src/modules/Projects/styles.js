import styled from "styled-components";

export const ContainerCards = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-row: 100vh;
    grid-gap: 20px;
`;

export const Header = styled.div`

    .goBackLink{
        display: flex;
        height: 50px;
        width: 50px;
        border-radius: 50%;
        background-color: #FFF;
        padding: 5px;
        align-items: center;
        justify-content: center;
        box-shadow: 0px 1px 3px #00000073;    
    } 
`;

export const Title = styled.h1`
    margin: 30px 0;
`;