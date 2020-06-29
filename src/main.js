import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './components/Home'
import About from './components/About'

Vue.config.productionTip = false
Vue.use(VueRouter)


const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About }
]

const router = new VueRouter({
  routes
})



new Vue({
  render: h => h(App),
  router
}).$mount('#app')
