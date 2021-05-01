import React from 'react';
import ReactDOM from 'react-dom';
import Routers from './Routers';

//
import 'jquery/dist/jquery.slim.min.js';

//style
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.scss';

ReactDOM.render(
  <Routers />,
  document.getElementById('root')
);

