// $ = jQuery = require('jquery');
import 'babel-polyfill';
import *  as React from 'react';
import { render } from 'react-dom';
// var ReactDOM = require('react-dom');

import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import { Router, hashHistory, Route, IndexRoute,
            RouterState, RedirectFunction } from 'react-router';

import { App } from './App';
// import { EcpRoutesContainer } from './routes';

import { IntlProvider, addLocaleData } from 'react-intl';
import * as en from 'react-intl/locale-data/en';
// import * as es from 'react-intl/locale-data/es';
// import * as fr from 'react-intl/locale-data/fr';
// import * as it from 'react-intl/locale-data/it';
// Our translated strings
import localeData from './translations/all';
// add other imported localData as needed
addLocaleData([...en]);
// Define user's language. Different browsers have the user locale defined
// on different fields on the `navigator` object, so we make sure to account
// for these different by checking all of them
const language = ((navigator as any).languages && (navigator as any).languages[0]) ||
                     navigator.language ||
                     (navigator as any).userLanguage;
// Split locales with a region code
const languageWithoutRegionCode = language.toLowerCase().split(/[_-]+/)[0];
// Try full locale, try locale without region code, fallback to 'en'
const messages = localeData[languageWithoutRegionCode] || localeData[language] || localeData.en;

import HomePage from './home/HomePage';
import { Whoops404 } from './common/Whoops404';
import { NotSupported } from './common/notSupported';
import { NotAuthorized } from './common/notAuthorized';
import {AsyncComponentLoader} from './common/asyncComponentLoader';

// these are polyfills to make fetch work in IE/Firefox
import * as es6P from 'es6-promise';
import 'isomorphic-fetch';
es6P.polyfill();

declare const System: any;

const store = configureStore({});
store.subscribe( () => {
  console.log(store.getState()); // TODO testing
});

render(
    <div>
        <IntlProvider locale={language} messages={messages}>
            <Provider store={store}>
                <Router history={hashHistory}>
                    <Route path='/' component={App}>
                        <IndexRoute component={HomePage} />
                        <Route path='overview' component={HomePage}/>
                        {/*
                            example of using asyncloader for code splitting
                        <Route path='route-path' component={() => <AsyncComponentLoader load={System.import('./path')} /> }
                                                        onEnter={requireAuth} />*/}
                        <Route path='not-supported' component={NotSupported} />
                        <Route path='not-authorized' component={NotAuthorized} />
                        <Route path='*' component={Whoops404} />
                    </Route>
                </Router>
            </Provider>
        </IntlProvider>
    </div>
,
    document.getElementById('react-container')
, () => {}
);
