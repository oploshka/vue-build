import Vue from 'vue';

import formatTextSlice from './modules/formatTextSlice';
Vue.filter('formatTextSlice', formatTextSlice);

import formatDateFull from './modules/formatDateFull';
Vue.filter('formatDateFull', formatDateFull);

