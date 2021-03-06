import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import React from 'react';
import store from './store';

import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Home from './components/Home/Index';
import Login from './components/Login';

ReactDOM.render((
	<Provider store={store}>
		<Router history={hashHistory}>
  		<Route path="/" component={App}>
  			<IndexRoute component={Home} />
  			<Route path="login" component={Login} />
  		</Route>
  	</Router>
  </Provider>
), document.getElementById('root'));
