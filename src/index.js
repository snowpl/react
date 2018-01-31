import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
//import App from './App';
//import Menu from './nav';
import NightMode from './nightMode';
import registerServiceWorker from './registerServiceWorker';
import './styles/menu.css';
import './styles/offer.css';
import './styles/galery.css';

ReactDOM.render(<NightMode />, document.getElementById('nightMode'));
/*ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Menu />, document.getElementById('navbar'));*/
registerServiceWorker();
module.hot.accept();
