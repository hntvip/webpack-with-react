import React , { lazy } from 'react';
// import HomePage from './pages/HomePage/HomePage';
// import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
// import ProductListPage from './pages/ProductListPage/ProductListPage';
// import ProductActionPage from './pages/ProductActionPage/ProductActionPage';
import loadable from '@loadable/component';

const HomePage = loadable(() => import('./pages/HomePage/HomePage'))
const HomePage2 = loadable(() => import('./pages/HomePage2/HomePage2'))
const HomePage3 = loadable(() => import('./pages/HomePage3/HomePage3'))
const ProductListPage = loadable(() => import('./pages/ProductListPage/ProductListPage'))
const ProductActionPage = loadable(() => import('./pages/ProductActionPage/ProductActionPage'))
const NotFoundPage = loadable(() => import('./pages/NotFoundPage/NotFoundPage'))
const routes = [
    {
        path: '/',
        exact: true,
        main: () => <HomePage />
    },
    {
        path: '/homepage2',
        exact: true,
        main: () => <HomePage2 />
    },
    {
        path: '/homepage3',
        exact: true,
        main: () => <HomePage3 />
    },
    {
        path: '/product-list',
        exact: false,
        main: () => <ProductListPage />
    },
    {
        path: '/product/add',
        exact: false,
        main: ({history}) => <ProductActionPage history={history}/>
    },
    {
        path: '/product/:id/edit',
        exact: false,
        main: ({match, history}) => <ProductActionPage match={match} history={history}/>
    },
    {
        path: '',
        exact: false,
        main: () => <NotFoundPage />
    }
];

export default routes;