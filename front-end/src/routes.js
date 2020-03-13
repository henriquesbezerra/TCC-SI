import React from "react";

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import { isAuthenticated } from './auth';

// import Board from './components/Board';

const PrivateRoute = ({component: Component, ...rest}) =>(
    <Route 
        {...rest} 
        render={(props)=> isAuthenticated() ? (
                <Component {...props}/>
            ): (
                <Redirect to={{ pathname: "/", state: { from: props.location} }} />
            )
    }/>
);


const Routes = ()=>(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={()=><h1>Hellow</h1>} />
            <PrivateRoute path="/teste" component={()=><h1>Logado</h1>} />
        </Switch>
    </BrowserRouter>
);

export default Routes;