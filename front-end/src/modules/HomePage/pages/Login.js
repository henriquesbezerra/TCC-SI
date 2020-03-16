import React, { useState } from 'react';

import { useFetch } from '../../../hooks/useFetch';

import { Container, Content, Banner, FormLogin } from '../styles';
import AppLogo from '../../../components/AppLogo';


export default function Login() {
  const { post } = useFetch();
  const [username, setUsername] = useState('henrique@mail.com');
  const [password, setPassword] = useState('password');  

  const handleLogin = async () => {
    if(username !== '' && password !== ''){
      const status = await post('/login',{
        "email": "henrique@mail.com",
        "password": "password"
      });
      console.log('status: ', status);
    }
  }

  return (    
    <Container>
      <Content>         
        
        <div style={{marginTop: 80, marginBottom: '20%'}}>
          <AppLogo />
        </div>
        
      <Content.pretitle>Olá, seja</Content.pretitle>
      <Content.title>Bem vindo!</Content.title>
      <Content.p>
        Informe suas credenciais no formulário ao lado <br />e acesse nossa super ferramenta.
        <Content.lineDecorator/>
        <br />
        <br />
        <small> Ainda não utiliza nossa plataforma?</small>
        <br />
        Cadastre-se e comece a usar hoje mesmo!
      </Content.p>

      <div style={{display:'flex', alignItems: 'center'}}>
        <Content.button>Cadastrar</Content.button>
        <Content.textForgetPassword>Esqueci minha senha</Content.textForgetPassword>
      </div>
    
      </Content>   

      <Banner>
        <FormLogin>
          <FormLogin.form>
            <FormLogin.title>Faça login para continuar</FormLogin.title>
            <FormLogin.label>
              <p>Email:</p>
              <FormLogin.input 
                type="email" 
                name="email" 
                value={username} 
                onChange={(e)=>setUsername(e.currentTarget.value)} 
                placeholder="Digite seu email" />
            </FormLogin.label>

            <FormLogin.label>
              <p>Senha:</p>
              <FormLogin.input 
                type="password" 
                name="password" 
                value={password} 
                onChange={(e)=>setPassword(e.currentTarget.value)}
                placeholder="Digite sua senha"/>
            </FormLogin.label>

            <FormLogin.button type="button" onClick={handleLogin}>login</FormLogin.button>
          </FormLogin.form>
        </FormLogin>
      </Banner>
      
      
    </Container>
    
  );
}
