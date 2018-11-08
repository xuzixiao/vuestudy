import Vue from 'vue'
import Vuex from "vuex"
//使用vuex
Vue.use(Vuex);

export default new Vuex.Store({
    state:{
      count:3
    },
    mutations:{
        add:state=>state.count++,
        reove:state=>state.count--
    }
  })
  
  