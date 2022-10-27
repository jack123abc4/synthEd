import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
  domain="dev-qepwf8qu.us.auth0.com"
  clientId="6dfW5Cqx3MkpnrRsj7IsVQI3EJ35tndH"
  redirectUri={window.location.origin}
>
    <App />
    </Auth0Provider>,
  document.getElementById('root')
);
