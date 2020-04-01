import React from 'react';
import { GoGraph, GoProject } from 'react-icons/go'

export const menuOptions = [
    {
        path: '/',
        label: 'Dashboard',
        icon: <GoGraph />
    },
    {
        isParent: true,
        path: '/projetos',
        label: 'Projetos',
        icon: <GoProject />
    },
];