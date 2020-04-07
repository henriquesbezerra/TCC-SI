import { isAuthenticated } from './AuthController';

import Dashboard from '../modules/Dashboard';
import HomePage from '../modules/HomePage';
import Login from '../modules/HomePage/pages/Login';
import Projects from '../modules/Projects';
import AddProject from '../modules/Projects/Pages/AddProject';
import EditProject from '../modules/Projects/Pages/EditProject';

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
        path: '/projetos/novo',        
        active: true,
        type: 'private',
        layout: 'panel',
        component: AddProject
    },    
    {        
        path: '/projetos/:id',
        active: true,                
        type: 'private',
        layout: 'panel',
        component: EditProject
    }

]