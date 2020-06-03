/* eslint-disable promise/always-return */
import React from 'react';
import ReactDOM from 'react-dom';
import * as Sentry from '@sentry/browser';
import App from './App';

Sentry.init({ dsn: process.env.SENTRY_URL });

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./service-worker.js')
    .then((reg) => {
      console.log("SW registration succeeded. Scope is ", reg.scope);
    })
    .catch((err) => {
      console.error("SW registration failed with error ", err);
    });
}