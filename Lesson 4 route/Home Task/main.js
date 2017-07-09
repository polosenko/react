import ReactDOM from 'react-dom';
import React from 'react';
import { Router, Route, hashHistory } from 'react-router';

import App from './App.jsx';
import AboutPage from './components/AboutPage.jsx';

ReactDOM.render(
<Router history={hashHistory}>
    <Route path='/' component={App}>
    <Route path='/about' component={AboutPage} />
    </Route>
    </Route>
    </Router>,
    document.getElementById('mount-point')
);