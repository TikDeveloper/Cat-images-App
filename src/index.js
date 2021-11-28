import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import common_de from './translations/de/common.json';
import common_en from './translations/en/common.json';

i18next.init({
  interpolation: { escapeValue: false }, // React already does escaping
  lng: 'de', // language to use
  resources: {
    en: {
      common: common_en, // 'common' is our custom namespace
    },
    de: {
      common: common_de,
    },
  },
});
ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <Provider store={store}>
        <App />
      </Provider>
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
