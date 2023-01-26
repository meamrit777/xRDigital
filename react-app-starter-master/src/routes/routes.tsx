import React from 'react';
import Home from '../pages/Home';
import LogIn from '../pages/login/LogIn';
import SignUp from '../pages/signup/SignUp';
import TestPage from '../pages/TestPage';

const routes = [
    {
        route: '/home',
        title: 'Home',
        name: 'Home',
        element: <Home />,
    },
    {
        route: '/testpage',
        title: 'Home',
        name: 'Home',
        element: <TestPage />,
    },
    {
        route: '/login',
        title: 'LogIn',
        name: 'LogIn',
        element: <LogIn />,
    },
    {
        route: '/signup',
        title: 'SignUp',
        name: 'SignUp',
        element: <SignUp />,
    },
];

export default routes;
