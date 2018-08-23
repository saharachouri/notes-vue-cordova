import Vue from 'vue'
import Router from 'vue-router';
import app from '@/App.vue';
import moment from 'moment';
import VueFilterDateFormat from 'vue-filter-date-format';

import { routes } from './routes';

Vue.config.productionTip = false

Vue.use (Router);

const router = new Router({
	routes: routes
});

Vue.filter('dateFormat', function (date) {
    if (!date) {
      return 'N/A'
    }
    return moment(date,"YYYY-MM-DDTHH:mm:ss[Z]").format('DD/MM/YYYY   HH:mm');
  });

new Vue({
  el: '#app',
  router: router,
  render: h =>h(app),
})