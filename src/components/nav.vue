<template>
  <div class="nav">
  <p>当前页面是：{{page}} </p>

    <router-link to="/index" active-class="active">首页</router-link>
    <router-link :to="{name:'search',query:{name:'xyy'}}" active-class="active">搜索页</router-link>
    <router-link to="/JADE"  active-class="active">JADE模板语法</router-link>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props:['page'],
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted:function(){
    console.log(this.$props);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
