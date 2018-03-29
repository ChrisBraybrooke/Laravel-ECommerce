import 'babel-polyfill';

import Vue from 'vue';
import Element from 'element-ui';
import router from './router/';
import store from './store/index.js';
import Admin from './admin.vue';
import locale from 'element-ui/lib/locale/lang/en';

import './axios.js';

Vue.use(Element, {locale});


import { mapActions, mapGetters } from 'vuex';
Vue.mixin({
  computed: {
    getSiteBaseURL(value) {
        return ecommerceConfig.site_url + '/';
    },
  }
});

import generateColors from './utils/color';
import objectAssign from 'object-assign';

const app = new Vue({
    router,
    el: '#app',
    store,
    render: h => h(Admin),
});