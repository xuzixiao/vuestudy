<template>

<div class="index">
    <creatcompon value="1234"></creatcompon>
<snav page="index"></snav>
     我是首页
<zujian page="index">
    <span slot="one">哈哈哈</span>
    <span slot="two">嘻嘻嘻</span>
</zujian>
<p>
    {{count}}</p>
    <button @click="add">加</button>
    <button @click="reove">减</button>

<div style="background：#ff0;color:#f0f;font-size:30px;" v-if="count==3" >
 状态等于3时我被插入dom


</div>



</div>


</template>
<script>
import zujian from '@/components/zujian';
import snav from '@/components/nav';
import creatcompon from '@/components/creatcompon';
export default {
    components:{
        zujian,snav,creatcompon
    },
    data(){
        return{

        }
    },
    computed:{
        count(){
            return this.$store.state.count;
        }
    },
    methods:{
        add:function(){
           this.$store.commit('add');
        },
        reove:function(){
            this.$store.commit('reove');
        }
    },
    mounted:function(){
        var cat={};
        Object.defineProperty(cat,"name",{
            value:"maru",
            writable:false,
            enumerable:true,
            configurable:false
        })
        Object.defineProperty(cat,"skill",{
            value:"oooooo",
            writable:true,
            enumerable:true,
            configurable:true
        })
        console.log(cat);
    }
}
</script>

<style>

</style>
