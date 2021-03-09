import React from 'react';
import ReactDom from 'react-dom';
import App from './app';
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";

import common_in from "./Translation/in/common.json";
import common_pk from "./Translation/pk/common.json";
import common_bd from "./Translation/bd/common.json";
import common_en from "./Translation/en/common.json";

i18next.init({
    whitelist:['pk','in','bd','en'],
    interpolation: { escapeValue: false },  // React already does escaping
    lng: 'en',                              // language to use
    resources: {
        en: {
            common: common_en               // 'common' is our custom namespace
        },
        bd: {
            common: common_bd
        },
        pk: {
            common: common_pk
        },
        in: {
            common: common_in
        },
    },
});

ReactDom.render(
    <I18nextProvider i18n={i18next}>
        <App />
    </I18nextProvider>, document.getElementById('root')
);