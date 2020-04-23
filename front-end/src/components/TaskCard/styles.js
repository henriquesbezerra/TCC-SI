import styled from 'styled-components';

export const Container = styled.div`    
    display: flex;
    flex-direction: row;    
    width: 100%;    
    position: relative;
    background: #FFF;
    border-radius: 5px;
    margin-bottom: 10px;
    padding: 15px;
    box-shadow: 0 1px 4px 0 rgba(192, 208, 230, 0.8);    

    & .content{
        flex: 1;
    }
`;

const overflowText = `       
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const TaskTitle = styled.div`
    font-size: 1rem;
    font-weight: 500;
    color: #484848;
    line-height: 23px;
    
    ${overflowText}
`;
