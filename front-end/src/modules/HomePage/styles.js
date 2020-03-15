import styled from 'styled-components';


export const Container = styled.div` 
    display: grid;   
    grid-template-columns: 2fr 3fr;
    grid-template-rows: 100vh;
  
`;

export const Content = styled.div`
    padding: 60px 0px; 
    background: #ececec;
`;

export const Banner = styled.div`
    padding: 60px 0px;     
   
    background: rgb(4,23,55);
    background: -moz-linear-gradient(351deg, rgba(4,23,55,1) 0%, rgba(13,21,106,1) 10%, rgba(38,33,153,1) 34%, rgba(64,29,170,1) 100%);
    background: -webkit-linear-gradient(351deg, rgba(4,23,55,1) 0%, rgba(13,21,106,1) 10%, rgba(38,33,153,1) 34%, rgba(64,29,170,1) 100%);
    background: linear-gradient(351deg, rgba(4,23,55,1) 0%, rgba(13,21,106,1) 10%, rgba(38,33,153,1) 34%, rgba(64,29,170,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#041737",endColorstr="#401daa",GradientType=1);
   
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

Banner.image = styled.img`
    width: 80%;
    max-width: 700px;
    display: block;    
`;