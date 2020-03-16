import HomePage from '../modules/HomePage';
import Login from '../modules/HomePage/pages/Login';

export default [
    {
        path: '/',
        active: true,
        exact: true,
        type: 'public',
        layout: 'home',
        component: HomePage
    },
    {
        path: '/login',
        active: true,
        type: 'public',
        layout: 'home',
        component: Login
    }
]