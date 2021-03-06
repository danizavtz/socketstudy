import Vue from 'vue'
import App from './App.vue'
import VueSocketIO from 'vue-socket.io'
 
const options = { path: '/socket.io/' };
 
Vue.use(new VueSocketIO({
    debug: true,
    connection: 'http://localhost:3001',
    options
  })
);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
