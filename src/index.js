import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './store/store';

ReactDOM.render(
<Provider store={store}>
    <App addEmployee={true} />
</Provider>, 
document.getElementById('root'));
registerServiceWorker();
