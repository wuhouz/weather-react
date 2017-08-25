import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';

import Weather from './weather';

ReactDOM.render(<Weather />, document.getElementById('root'));
registerServiceWorker();
