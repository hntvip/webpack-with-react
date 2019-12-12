import React, { Component , Suspense, lazy } from 'react';
import './App.css';
import Menu from '../Menu/Menu';
import routes from '../../routes';
import { Switch, Route, HashRouter  as Router } from 'react-router-dom';
const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const ProductListPage = lazy(() => import('../../pages/ProductListPage/ProductListPage'));
const ProductActionPage = lazy(() => import('../../pages/ProductActionPage/ProductActionPage'));
const NotFoundPage = lazy(() => import('../../pages/NotFoundPage/NotFoundPage'));
const HomePage2 = lazy(() => import('../../pages/HomePage2/HomePage2'));
class App extends Component {
    render() {
        return (
            <Router >
                <div>
                    <Menu />
                    <div className="container">
                        <div className="row">
                            {/* {this.showContentMenus(routes)} */}
                            <Suspense fallback={<div>Loading...</div>}>
                                <Switch>
                                    <Route
                                        path='/'
                                        exact
                                        component={HomePage}
                                    />
                                    <Route
                                        path='/product-list'
                                        component={ProductListPage}
                                    />
                                    <Route
                                        path='/product/add'
                                        component={ProductActionPage}
                                    />
                                    <Route
                                        path='/notfound'
                                        component={ NotFoundPage }
                                    />
                                    <Route
                                        path='/homepage2'
                                        component={ HomePage2 }
                                    />
                                </Switch>
                            </Suspense>
                        </div>
                    </div>
                </div>
            </Router>
        );
    }

    showContentMenus = (routes) => {
        var result = null;

        if (routes.length > 0) {
            result = routes.map((route, index) => {
                return (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.main}
                    />
                );
            });
        }
        
        return (
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>{result}</Switch>
            </Suspense>
        );
    }

}

export default App;
