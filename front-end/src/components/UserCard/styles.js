import styled from 'styled-components';

export const Container = styled.div`    
    position: relative;
    background: #FFF;
    border-radius: 5px;
    margin-bottom: 10px;
    padding: 15px;
    box-shadow: 0 1px 4px 0 rgba(192, 208, 230, 0.8);

    header{        
        color: #464646;
        font-size: 1.2rem;
        font-weight: 500;
        padding-bottom: 5px;
        margin-bottom: 15px;
        border-bottom: 1px solid rgba(192, 208, 230, 0.8);
    }

    p{
        font-weight: 500;
        line-height: 20px;
        color:#464646;
        font-size: 1rem;
        &.info{
            margin-top: 10px;
            margin-bottom: 5px;
            font-size: 0.8rem;
            color: #393a3c;
            font-weight: normal;
        }
    }

    footer{
        color: #7f91ab;      
        padding-top: 5px;
    }

`;

export const ContainerNew = styled.div`    
    position: relative;
    background: #FFF;
    border-radius: 5px;
    margin-bottom: 10px;
    padding: 15px;
    border: 2px dashed #ccc;
    color: #7b7b7b; 
    display: flex;
    flex-direction: row;    
`;

