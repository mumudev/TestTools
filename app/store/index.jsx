/*jshint esversion: 6 */
import Vuex from 'vuex';
import Vue from 'vue';
import state from './state';
import actions from './actions';
import mutations from './mutations';
Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

Vue.config.debug = debug;

export default new Vuex.Store({
    state,
    mutations,
    actions,
    strict: debug
});