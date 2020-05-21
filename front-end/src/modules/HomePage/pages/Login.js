import React, { useEffect, useState } from 'react';

import { isAuthenticated } from '../../../controllers/AuthController';
import { useFetch } from '../../../hooks/useFetch';

import { Redirect } from 'react-router-dom';

import { Container, Content, Banner, FormLogin } from '../styles';
import AppLogo from '../../../components/AppLogo';


export default function Login({history}) {
  const { post } = useFetch();
  const [email, setEmail] = useState('henrique@mail.com');
  const [password, setPassword] = useState('12345');  
  const [isLogged, setLogged] = useState(false);

  
  const handleLogin = async() => {
    if(email !== '' && password !== ''){
      const result = await post('/login',{email, password});
      if(result){
        localStorage.clear();        
        localStorage.setItem('access_token',result.token);      
        window.location.reload();        
      }
    }
  }

  useEffect(()=>{
    if(isAuthenticated()){
      setLogged(true);
    }
  },[])

  return isLogged ? (<Redirect to="/" />) : (    
    <Container>
      <Content>         
        
        <div style={{marginTop: 60, marginBottom: 30}}>
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
                value={email} 
                onChange={(e)=>setEmail(e.currentTarget.value)} 
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
