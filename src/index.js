import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {questionsArray} from './components/main'


ReactDOM.render(
  <React.StrictMode>
      <App questionsArray={questionsArray}/>
  </React.StrictMode>,
  document.getElementById('root')
);


