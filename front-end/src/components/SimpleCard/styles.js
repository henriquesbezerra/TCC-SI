import styled from 'styled-components';

export const Container = styled.div`    
    position: relative;
    background: #FFF;
    border-radius: 5px;
    margin-bottom: 10px;
    padding: 15px;
    box-shadow: 0 1px 4px 0 rgba(192, 208, 230, 0.8);
    overflow: auto;
    ${({height})=> height ? `height:${height};`:''}
    ${({width})=> width ? `width:${width};`:''}
`;

