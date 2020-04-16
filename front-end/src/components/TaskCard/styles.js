import styled from 'styled-components';

export const Container = styled.div`    
    width: 100%;
    position: relative;
    background: #FFF;
    border-radius: 5px;
    margin-bottom: 10px;
    padding: 15px;
    box-shadow: 0 1px 4px 0 rgba(192, 208, 230, 0.8);
    
`;

export const BulletPriority = styled.div`
    display: flex;
    flex-direction: row;
    align-item: center;
    margin-right: 30px;
    &:before{
        display: block;
        margin-right: 15px;
        content: '';
        height: 16px;
        width: 16px;        
        border-radius: 16px;
        background-color: ${props => props.color || '#ccc'}
    }
`;


export const TaskContent = styled.div`
   flex: 1;
   margin-right: 30px;
`;


export const TaskTitle = styled.div`
    font-size: 1rem;
    font-weight: 500;
    color: #484848;
    line-height: 23px;
`;

export const TaskDescription = styled.div`
    color: #868585;
    font-size: 0.8rem;
`;