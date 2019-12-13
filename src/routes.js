import React from 'react';
import loadable from '@loadable/component';
import Loading from './components/Loading/Loading';

const AsyncPage = loadable(props => import(`./pages/${props.page}/${props.page}`),{
    fallback: <Loading/>
})
const routes = [
    {
        path: '/',
        exact: true,
        main: () => <AsyncPage page="HomePage" />
    },
    {
        path: '/homepage2',
        exact: true,
        main: () => <AsyncPage page="HomePage2"/>
    },
    {
        path: '/homepage3',
        exact: true,
        main: () => <AsyncPage page="HomePage3"/>
    },
    {
        path: '/product-list',
        exact: false,
        main: () => <AsyncPage page="ProductListPage" />
    },
    {
        path: '/product/add',
        exact: false,
        main: ({history}) => <AsyncPage page="ProductActionPage" history={history}/>
    },
    {
        path: '/product/:id/edit',
        exact: false,
        main: ({match, history}) => <AsyncPage page="ProductActionPage" match={match} history={history}/>
    },
    {
        path: '',
        exact: false,
        main: () => <AsyncPage page="NotFoundPage" />
    }
];

export default routes;