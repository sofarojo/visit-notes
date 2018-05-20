import React from 'react';
import ReactDOM from 'react-dom';
// eslint-disable-next-line
import css from './index.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();