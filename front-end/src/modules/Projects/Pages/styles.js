import styled from "styled-components";

export const ContainerPages = styled.div`
    display: grid;
    grid-template-columns: ${props=> props.grid? props.grid : '1fr 1fr'};
    grid-template-row: 100vh;   
    grid-gap: 20px; 
`;

export const ViewTitle = styled.div`
    font-size: 1.3rem;
    font-weight: 500;
    color: #484848;
    line-height: 23px;
    margin: 5px 0 10px 0;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const ViewProperty = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 5px 0px;
`;

ViewProperty.label = styled.div`
    font-weight: 500;
    margin-right: 5px;
`;

ViewProperty.value = styled.div` 
    word-break: break-all;
`;

export { ViewProperty };