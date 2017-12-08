import Vue from 'vue'
import App from './App.vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import VueRouter from 'vue-router'
import {routes} from './routes'
import VueTabs from 'vue-nav-tabs'
import 'vue-nav-tabs/themes/vue-tabs.css'


Vue.use(VueMaterial)
Vue.use(VueRouter)
Vue.use(VueTabs)

const router = new VueRouter({
mode:'history',
routes
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
