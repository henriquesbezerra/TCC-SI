import React from "react";

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import { isAuthenticated } from './AuthController';

import LayoutController from './LayoutController';
import Modules from './ModulesController';

const PublicRoute = ({component: Component, layout, ...rest}) =>(
    <Route 
        {...rest} 
        render={(props)=> 
            <LayoutController name={layout || 'none'}>                 
                <Component {...props}/>
            </LayoutController>
    }/>
);


const PrivateRoute = ({component: Component, layout, ...rest}) =>(
    <Route 
        {...rest} 
        render={(props)=> isAuthenticated() ? (
                <LayoutController name={layout || 'none'}>                    
                    <Component {...props}/>
                </LayoutController>
            ): (
                <Redirect to={{ pathname: "/", state: { from: props.location} }} />
            )
    }/>
);

const Routes = ()=>(
    <BrowserRouter>        
        <Switch>
            {
                Modules.map((item,index)=>{
                    if(item.active){
                        return item.type === 'private' ? (
                            <PrivateRoute key={`privateRoute${index}`} {...item} />
                        ):(
                            <PublicRoute key={`publicRoute${index}`} {...item} />
                        )
                    }
                    return null;
                })        
            }            
            <Route path="*" component={()=><h1>404 not found</h1>} />
        </Switch>        
    </BrowserRouter>
);

export default Routes;