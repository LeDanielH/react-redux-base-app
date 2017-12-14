process.env.NODE_ENV === 'production' ? module.exports = require('./prod.js') : module.exports = require('./dev.js');

import React from 'react'
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
const thunkMiddleware = require('redux-thunk').default;
import reducers from './reducers/index'
import App from './components/App';

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

document.addEventListener("DOMContentLoaded", () => {
	ReactDOM.render(
		<Provider store={store}>
			<App />
		</Provider>
		,
		document.getElementById("root")
	)
});
