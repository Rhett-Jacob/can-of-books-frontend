import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App/App';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* 6-6-23 */}
    <Auth0Provider
          domain={process.env.REACT_APP_AUTH_DOMAIN}
          clientId={process.env.REACT_APP_AUTH_CLIENTID}
          authorizationParams={{
            redirect_uri: process.env.REACT_APP_AUTH_URI
          }}>
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
