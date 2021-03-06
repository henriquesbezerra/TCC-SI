import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto 10fr;
  grid-template-rows: 100vh;
  grid-template-areas: "aside main";
`;

export const Aside = styled.aside`
    grid-area: aside;   
`;

export const Content = styled.div`  
    grid-area: main;
    display: flex;
    flex-direction: column;
    overflow: auto;  
    padding: 60px 0;  
    position: relative;
`;

export const Header = styled.header`    
    min-height: 60px;
    position: absolute;
    top: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 0 100px 0px 20px;
    box-sizing: border-box;
    ${props => props.panel ? `
        background-color: #4445a8;
    `: ''}
`;

export const Nav = styled.nav`  
    & button{
        background-color: transparent;
        border: none;
    }  
    ${props => props.panel ? `
        & a, & button {
            color: #fff;
            font-size: 1.4rem;            
            text-decoration: none;
            margin: 0 10px;    
        }
        & a:hover, & button:hover{
            color: #fff;                    
        }
    `: `
        & a, & button {
            color: #fff;
            font-size: 1.4rem;
            font-weight: 600;
            text-decoration: none;
            margin: 0 10px;
            opacity: 0.7;
        }
        & a:hover, & button:hover{
            color: #fff;        
            opacity: 1;
        }
    `}
`;

export const Main = styled.main`      
    flex: 1;
    margin: -60px 0px;    
`;

Main.content = styled.div`
    padding: 80px 40px;
`;

export const Footer = styled.footer`        
    min-height: 60px;  
    position: absolute;
    bottom: 0;
    width: 100%;  
`;
