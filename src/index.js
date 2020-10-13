import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// Connecting to Bootstrap 4 here...!
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import MyRoutes from './Routes';

ReactDOM.render(
  <React.StrictMode>
    <MyRoutes />
  </React.StrictMode>,
  document.getElementById('root')
);