import React from 'react';
import ReactDOM from 'react-dom';
import '@guestyci/atomic-design/dist/style/style.css';
import App from './App/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
