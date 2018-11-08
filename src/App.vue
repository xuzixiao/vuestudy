<template>
  <div id="app">
    <my-nav></my-nav>
    <router-view/>
  </div>
</template>

<script>
import nav from "@/components/nav";
export default {
  name: "App",
  components: {
    myNav: nav
  },
  created() {
    console.log(this);
  },
  //生命周期

  beforeCreate() {
    console.log("1");
  },
  created() {
    console.log("2");
  },
  beforeMount() {
    console.log("3");
  },
  mounted() {
    console.log("4");
  }
};
</script>

<style>
#app {
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif; 
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
