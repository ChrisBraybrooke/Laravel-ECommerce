window.ecommerceConfig.web_version = '0.0.33';

import 'babel-polyfill'
import Vue from 'vue'
import Element from 'element-ui'
import router from './router/'
import store from './store/index.js'
import Admin from './admin.vue'
import locale from 'element-ui/lib/locale/lang/en'
import { mapActions, mapGetters } from 'vuex'
import VueClipboard from 'vue-clipboard2'
window.has = require('lodash.has')
var numeral = require('numeral')
import { code_converter } from 'utils/currency'

Vue.use(Element, {locale})
Vue.use(VueClipboard)

Vue.mixin({
    computed: {
        getSiteBaseURL(value) {
            return ecommerceConfig.site_url + '/';
        },

        ecommerceConfig()
        {
            return window.ecommerceConfig;
        }
    },
    methods: {
        currencyCodeToSymbol(code, fallback = '')
        {
            return code_converter(code, fallback)
        },

        objectHas(object, value)
        {
            return has(object, value);
        },

        copy(val)
        {
            this.$copyText(val).then((e) => {
                this.$message({
                  message: 'Successfully copied text!',
                  type: 'success',
                  showClose: true,
                });
            }, (e) => {
                this.$message({
                  message: 'Cannot copy text.',
                  type: 'error',
                  showClose: true,
                });
            })
        },

        capitalize(str)
        {
            var lower = str.toLowerCase();
            return lower.replace(/(^| )(\w)/g, function(x) {
              return x.toUpperCase();
            });
        },

        simplePrice(price)
        {
            price = String(price);
            return parseFloat(price.replace(/,/g, ''));
        },

        formatPrice(price, prepend = '', append = '')
        {
            var number = this.simplePrice(price)
            return prepend + numeral(number).format('0,0.00') + append;
        }
    }
});

Vue.config.productionTip = false

const app = new Vue({
    router,
    store,
    render: h => h(Admin),
}).$mount('#app');
