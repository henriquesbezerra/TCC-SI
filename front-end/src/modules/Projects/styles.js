import styled from "styled-components";

export const ContainerCards = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;    
    grid-gap: 20px;
`;

export const RowHeader = styled.div`
    display: flex;    
    flex-direction: row;
    align-items: center;

    & h1{
        margin-right: 30px;
    }
`;

export const WrapperBoard = styled.div`
    max-width: 100vw;
    overflow-x: scroll;
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
    margin: 30px 0 10px 0;
    button{
        border: none;
        background-color: transparent;
        margin: 0 20px;
        cursor: pointer;
        svg{
            color: #7b7b7b;
        }
        &:hover svg{
            color: #5d5656;
        }
    }
`;

export const DateList = styled.div`
    display: flex;
    flex-direction: ${props => props.row ? 'row' : 'column'};
    align-items: center;    
    margin-bottom: 30px;
`;

export const DateItem = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-right: 20px;
    svg{
        margin-right: 5px;
        color: ${props => props.color || '#5d5656'};
    }
`;

export const Responsibles =  styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;

export const ResponsibleLabel = styled.div`
    padding: 5px;
    border-radius: 3px;
    margin: 0 10px;
    background-color: #dad7d7;
    font-size: 12px;
    text-transform: capitalize;
`;