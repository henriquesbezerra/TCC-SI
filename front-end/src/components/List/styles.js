import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 15px;
  height: 100%;
  flex: 0 0 320px;
  opacity: ${props => props.done ? 0.6 : 1 };

  & + div {
      border-left: 1px solid rgba(0, 0, 0, 0.5);
  }

  header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 42px;
   
    h2{
        font-weight: 500;
        font-size: 16px;
        padding: 0 10px;
    }

    h3{
      font-weight: normal;
      font-size: 14px;
      margin-top: 10px;
      padding: 0 10px;
    }

    button{
        width: 30px;
        height: 30px;
        border-radius: 20px;        
        background-color: transparent;
        border: 0;
        cursor: pointer;
    }
  }

  ul{
      margin-top: 30px;
  }

`;
