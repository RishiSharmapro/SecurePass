import React from 'react'
import { Auth0Provider } from '@auth0/auth0-react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-fwy7mobeha7szi20.us.auth0.com"
      clientId="fx0AWRHm27xIRLwPeawJ7l5ZUpmvYObV"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
      cacheLocation="localstorage" 
      useRefreshTokens={true} 
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>,
)
