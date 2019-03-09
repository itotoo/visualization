import 'core-js/es6/map';
import 'core-js/es6/set';
import 'babel-polyfill';
import 'url-search-params-polyfill';

import React , { Component } from 'react';
import ReactDOM from 'react-dom';
// 路由
import AppRouter from '../router/router';
ReactDOM.render(
    <AppRouter /> ,
     document.getElementById('root')
);


