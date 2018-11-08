<template>
<div>
sadfasd
<p>{{id}}</p>
</div>
</template>
<script>
export default {
    data(){
        return {
            id:""
        }
    },
    created:function(){
        //console.log(this.$route.params.id)
       this.id=this.$route.params.id
    }
}
</script>
<style>

</style>
