// container/src/App.js
import React from 'react';
import HelloReactApp from './components/HelloReactApp';
import { Route, Switch, Router, Link } from "react-router-dom";
import { createBrowserHistory } from "history";
import HelloVueApp from './components/HelloVueApp';

const history = createBrowserHistory();

const Header = () => (
    <div>
        <Link to='/'>Home</Link><br />
        <Link to='/react'>Use React</Link><br />
        <Link to='/vue'>Use Vue</Link>
    </div >
)

export default () => {
    return (
        <Router history={history}>
            <Header />
            <hr />
            <Switch>
                <Route path='/vue' component={HelloVueApp} />
                <Route path='/' component={HelloReactApp} />
            </Switch>
        </Router>
    )
}
