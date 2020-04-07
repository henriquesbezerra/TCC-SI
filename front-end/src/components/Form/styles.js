import styled from 'styled-components';

export const Form = styled.form``;

Form.label = styled.label`
    display: block;

    & p {
        color: #353535;
        font-size: 1.5rem;
        margin: 10px 0;
    }

    & + label{
        margin-top: 30px;
    }
`;

Form.input = styled.input`
    color: #353535;
    border-radius: 5px; 
    background: #fff;
    border: 1px solid #ccc;    
    padding: 20px;
    width: 100%;
    font-size: 1.3rem;
    box-sizing: border-box;
    height: 45px;
`;

Form.textarea = styled.textarea`
    color: #353535;
    border-radius: 5px; 
    background: #fff;
    border: 1px solid #ccc;    
    padding: 20px;
    resize: vertical;
    width: 100%;
    font-size: 1.3rem;
`;

Form.button = styled.button`
    border: none;
    border-radius: 40px;
    margin: 40px auto 0 auto;
    width: 100%;
    padding: 20px;
    color: #FFF;
    font-size: 1.4rem;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 1.2px;
    cursor: pointer;   
    background-color: #262199;

    &:hover{
        background-color: #4b65b1;
    }
`;