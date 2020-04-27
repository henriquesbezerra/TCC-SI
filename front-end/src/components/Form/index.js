import styled from 'styled-components';

export const Form = styled.form``;

const inputBasic = `
    color: #353535;
    border-radius: 5px; 
    background: #fff;
    border: 1px solid #ccc;    
    padding: 10px;
    font-size: 1.1rem;
    width: 100%;
`;

Form.label = styled.label`
    display: block;

    & p {
        color: #353535;
        font-size: 1rem;
        margin: 10px 0;
    }

    & + label{
        margin-top: 15px;
    }

    .react-datepicker__input-container input{
        ${inputBasic}
    }
`;

Form.dateRange = styled.div`
    display: flex;
    flex-direction: row;
    align-items: baseline;
    
    .date:first-child{
        margin-right: 10px
    }
`;

Form.input = styled.input`
    ${inputBasic}
    height: 35px;
`;

Form.textarea = styled.textarea`
    ${inputBasic}
    resize: vertical;
`;

Form.button = styled.button`
    border: none;
    border-radius: 5px;
    margin: 40px auto 0 auto;
    width: 100%;
    padding: 10px;
    color: #FFF;
    font-size: 1.2rem;
    text-transform: uppercase;
    font-weight: 400;
    letter-spacing: 1.2px;
    cursor: pointer;   
    background-color: #262199;

    &:hover{
       opacity: 0.8;
    }
`;