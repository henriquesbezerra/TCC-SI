import styled from 'styled-components';

import HomeScrumBoard from './assets/homeScrumBoard.png';

import { backgroundGradient, backgroundGradient_invert, highlightGradient, highlightGradient_hover } from '../../styles/global';

export const Container = styled.div` 
    display: grid;   
    grid-template-columns: 2fr 3fr;
    grid-template-rows: 100%;
    height: 100%;
`;

export const Content = styled.div`
    padding: 60px 0px; 
    background: #ececec;
    display: flex;
    flex-direction: column;    
    padding: 60px 30px;
`;


Content.pretitle = styled.p`
    font-size: 1.5rem;
    color: #4646a9;    
    margin-bottom: 5px;
    font-weight: 400;
`;

Content.title = styled.h1`
    font-size: 3.4rem;
    color: #122868;    
    margin-bottom: 60px;
`;

Content.p = styled.p`
    color: #152450;    
    line-height: 30px;
    letter-spacing: 0.6px;
    font-size: 1.4rem;
    padding-right: 50px;
    margin-bottom: 40px
`;

Content.button = styled.button`
    ${backgroundGradient}
    border-radius: 30px;
    color: #FFF;
    text-transform: uppercase;
    border: none;
    padding: 10px 5px;
    width: 200px;
    font-weight: 600;
    letter-spacing: .7px;
    font-size: 1rem;
    box-shadow: 1px 4px 9px 2px #b9b9b9;   
    cursor: pointer;
    
    &:hover{
        ${backgroundGradient_invert}
    }
`;

Content.lineDecorator = styled.span`
    display: block;
    width: 80px;
    height: 5px;
    margin-top: 10px;
    ${backgroundGradient}
`;

Content.textForgetPassword = styled.div`
    margin-left: 30px;
    font-size: 1.2rem;
    font-weight: 400;
    color: #6d6868;
    cursor: pointer;
    opacity: 0.5;

    &:hover{
        opacity: 1;
    }

`;



export const Banner = styled.div`
    padding: 60px 0px;     
   
    ${backgroundGradient}

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;


`;

Banner.image = styled.div`
    width: 100%;
    height: 100%;
    background-image: url(${HomeScrumBoard});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
`;


export const FormLogin = styled.div`
    height: 60%;
    width: 60%;
`;

FormLogin.title = styled.div`
    font-size: 2.5rem;
    margin-bottom: 30px;
    color: #6e78dc;
    text-align: center;
    font-weight: 500;
`;

FormLogin.form = styled.form`
    background: #ececec;
    border-radius: 6px;
    padding: 30px;
    box-shadow: 0px 3px 6px 6px #00000042;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

FormLogin.label = styled.label`
    color: #0b2973;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;
    & p {
        font-size: 1.5rem;
        margin: 10px 0;
    }

    & + label{
        margin-top: 30px;
    }
`;

FormLogin.input = styled.input`
    color: #0b2973;
    border-radius: 40px; 
    background: #fff;
    border: 1px solid #FFF;
    text-align: center;
    padding: 20px 10px;
    width: 100%;
    font-size: 1.3rem;

    
`;

FormLogin.button = styled.button`
    border: none;
    border-radius: 40px;
    margin: 40px auto 0 auto;
    width: 90%;
    padding: 20px;
    color: #FFF;
    font-size: 1.4rem;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 1.2px;
    cursor: pointer;
    ${highlightGradient}
    
    &:hover{
        ${highlightGradient_hover}        
    }
    
`;