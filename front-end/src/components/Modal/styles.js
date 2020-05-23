import styled from 'styled-components';

export const Container =  styled.div`
    display: ${props => props.active ? "flex": "none"};
    flex: 1;
    align-items: center;
    justify-content: center;
    position: absolute;
    z-index: 9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
`;

export const Background = styled.div`
    background-color: black;
    opacity: 0.4;
    position: fixed;
    width: 100%;
    height: 100%;    
`;
export const Content = styled.div`
    z-index: 9;
    position: fixed;
`;