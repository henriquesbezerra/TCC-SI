import { isAuthenticated } from './AuthController';

import Dashboard from '../modules/Dashboard';
import HomePage from '../modules/HomePage';
import Login from '../modules/HomePage/Login';
import Projects from '../modules/Projects';
import ViewProject from '../modules/Projects/View';
import Users from '../modules/Users';

export default [
    {
        path: '/',
        active: true,
        exact: true,
        type: isAuthenticated() ? 'private' :'public',
        layout: isAuthenticated() ? 'panel' : 'home',
        component: isAuthenticated() ? Dashboard : HomePage
    },
    {
        path: '/login',
        active: true,
        type: 'public',
        layout: 'home',
        component: Login
    },
    {
        path: '/projetos',
        active: true,
        exact: true,
        type: 'private',
        layout: 'panel',
        component: Projects
    },      
    {        
        path: '/projetos/:id',
        active: true,                
        type: 'private',
        layout: 'panel',
        component: ViewProject
    },
    {        
        path: '/usuarios',
        active: true,                
        type: 'private',
        layout: 'panel',
        component: Users
    }

]