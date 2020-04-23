import styled from 'styled-components';

export const BulletPriority = styled.div`            
    display: block;
    margin-right: 15px;
    content: '';
    height: 16px;
    width: 16px;        
    border-radius: 16px;
    background-color: ${props => props.color || '#ccc'}
`;
export const SquarePriority = styled.div`
    height: 16px;
    width: 16px;        
    background-color: ${props => props.color || '#ccc'};
    margin-right: 7px;
`;
