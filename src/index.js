import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import PublicRoutes from './pages/public/PublicPagesContainer';
import ProtectedRoutes from './pages/protected/ProtectedPagesContainer';
import * as serviceWorker from './serviceWorker';
import './styles/main.scss';

ReactDOM.render(
  <BrowserRouter>
    <div className="min-1440">
      <ProtectedRoutes />
      <PublicRoutes />
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
