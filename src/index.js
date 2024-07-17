import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import i18next from 'i18next';
import global_eng from './english/global.json';
import global_tel from './telugu/global.json';
import global_hin from './hindhi/global.json'
import { Language } from '@mui/icons-material';
import { I18nextProvider } from 'react-i18next';


i18next.init({
  
  interpolation:{escapeValue:false},
  lng:"en",
  resources:{
    en:{
      global:global_eng
    },
    tel:{
      global:global_tel
    },
    hin:{
      global:global_hin
    }

  },

})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
    <App />
    </I18nextProvider>
  </React.StrictMode>
);

