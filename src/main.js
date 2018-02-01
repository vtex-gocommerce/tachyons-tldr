import Vue from 'vue';
import { polyfill } from 'scroll-behaviour';
import { sync } from 'vuex-router-sync';
import router from './router';
import App from './App';
import store from './store';
import './components';

polyfill();

sync(store, router);

require('@gocommerce/tachyons');
require('./index.css');

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<app />',
  router,
  store,
  ...App,
});
