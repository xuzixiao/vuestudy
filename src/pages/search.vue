<template>
<transition name="fade"> 
<div class="search">
     我是搜索页
<ul>
    <li><router-link to="/detail/1">文章一</router-link></li>
    <li><router-link to="/detail/2">文章二</router-link></li>
    <li><router-link to="/detail/3">文章三</router-link></li>
</ul>

</div>

</transition>
</template>
<script>
export default {
    components:{
       
    }
}
</script>

<style>

</style>
