import React, { Component , Suspense, lazy } from 'react';
import './App.css';
import Menu from '../Menu/Menu';
import routes from '../../routes';
import { Switch, Route, HashRouter  as Router } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <Router >
                <div>
                    <Menu />
                    <div className="container">
                        <div className="row">
                            {this.showContentMenus(routes)}
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
