import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import store from './redux/store';

import { positions, transitions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

const container = document.getElementById('root');

const options = {
	timeout: 5000,
	position: positions.BOTTOM_CENTER,
	transition: transitions.SCALE,
};

const root = ReactDOM.createRoot(container);
root.render(
	<Provider store={store}>
		<AlertProvider template={AlertTemplate} {...options}>
			<App />
		</AlertProvider>
	</Provider>
);
