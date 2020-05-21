import React from 'react';
import { render } from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import Make from './components/Make';
// import ListPage from './components/ListPage';


render(
  <Make />
  , document.getElementById('root')
);
registerServiceWorker();
