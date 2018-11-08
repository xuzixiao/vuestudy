// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from "./store"


Vue.config.productionTip = false
//Vue.config.silent=true     取消Vue 所有的日志与警告
//Vue.config.devtools=true   检查代码配置
// Vue.config.keyCodes = {
//   v:86
// }//给 v-on 自定义键位别名。
//使用@keyup.v="method"
//Vue.performance=true



/* eslint-disable no-new */
var vm=new Vue({
  router,
  store,
 // components: { App },
  render:h=>h(App)
  
 // template: '<App/>'
}).$mount("#app")
