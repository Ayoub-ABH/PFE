require('./bootstrap');

window.Vue = require('vue');

import VueRouter from 'vue-router';
import routes from './routes';

import app from "./components/app";

Vue.use(VueRouter);

const App = new Vue({
   el: '#app',
   router: new VueRouter(routes),
   components:{
      app
   }
});
