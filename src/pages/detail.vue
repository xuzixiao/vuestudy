<template>
    <div>
        <p>当前文章ID{{query}}</p>
        <mynavs page="detail"></mynavs>
        <h1></h1>
        <p>{{art.title|firstbignum}}</p>
        <input type="text" v-model="art.title" v-focus ref="input">
        <button @click="gotoindex">回到首页</button>
        <div v-demo="msg"></div>
        <p v-changcolor="color">我可以变化颜色</p>
        <marquee class="gundong">
            <p>{{sortarr}}</p>
            <p>{{sortarr}}</p>
        </marquee>

<p>嵌套路由显示</p>
<router-view></router-view>
<!-- <input type="text" @keyup.v="ale" /> -->
<button @click="changearr">显示大于500的数组</button>
{{nowarrdate}}

<input type="text" v-model="shurunum" />
<button @click="querynum">查询数组中是否有此值</button>
<p>
    查询结果：{{result}}
</p>

    </div>
</template>
<script>
import mynavs from "@/components/nav";
export default {
    data(){
        return {
            art:{
                title:"sdfasd"
            },
            color:"#854554",
            msg:{
                name:"喜羊羊",
                value:"2018",
                like:"吃草"
            },
            sortarr:[5,8,9,51,1584,155,18,133,155,265,255],
            query:"",
            shurunum:"",
            result:""
        }
    },
    beforeCreate:function(){
        console.log("beforecreate")
    },
    created:function(){
        console.log("created");
        this.query=this.$route.params.query
    },
    beforeMount:function(){
        console.log("beformounted");
    },
    mounted:function(){
        console.info(this)
        //console.log(this.$route);
        //console.log("mounted");
        //this.$refs.input.focus();
        //console.log(this.$refs.input.value)
        //console.log(this.$parent)
    },
    beforeUpdate:function(){
      //  console.log("beforeUpdate");
    },
    updated:function(){
        //console.log("updated")
    },
    beforeDestroy:function(){
       // console.log("beforeDestroy")
    },
    destroyed:function(){
       //  console.log("destroyed")
    },
    computed:{
       //console.log("计算属性")
       nowarrdate(){
       var nowarrdates=this.sortarr.filter(function(e){
            return e>200
        })
        return nowarrdates;
       }
    },
    watch:{
       //console.log("侦察属性")
       '$route' (to,from){
           if(confirm("确定要……？")){
               console.log(to)
           }
       }
    },
    methods:{
        ale:function(){
            alert("666")
        },
        gotoindex:function(){
           // this.$route.path="/index";
           //this.$router.go(-2);
            console.log(this.$router);
            console.log(window.history.length)
            window.history.length>1
            ?this.$router.push("/search")
            :this.$router.push("/")
        },
        changearr:function(){
            let shurunum=this.shurunum;
            this.sortarr.filter(function(e){
                return e > shurunum
            })
        },
        querynum:function(){
             let shurunum=parseInt(this.shurunum);
        //    this.result=this.sortarr.filter(arr=> arr>shurunum);
             console.log(this.sortarr.indexOf(shurunum));
             if(this.sortarr.indexOf(shurunum)==-1){
                 this.result="没有此值"
             }else{
                 this.result="有值,坐标是"+this.sortarr.indexOf(shurunum)     
            }
        }
    },
    directives:{
        //自定义指令
        focus:{
            bind:function(el){
                el.style.backergroundcolor="green";
            },
            inserted:function(el){
                //被绑定元素插入父节点时调用
                el.style.backgroundColor="red";
                el.focus();
            },
            componentUpdated:function(el){
                //组件更新时调用
               // el.value="componentUpdated";
            }
        },
        demo:{
            bind:function(el,binding,vnode){
                el.innerHTML ="我是"+binding.value.name+"，我爱"+binding.value.like+"今年"+binding.value.value+"岁";
                //console.log(binding);
                //console.log(vnode);
            }
        },
        changcolor:{
            bind:function(el,binding){
                el.style.backgroundColor=binding.value
            }
        }
    },
    components:{
        mynavs
    },
    //  render:function(createElement){
    //      console.log(createElement);
    //      return createElement("h1","我是大标题。")
    // }
    filters:{
        //过滤器
        firstbignum:function(value){
            if(!value) return ''
             value=value.toString()
             return value.charAt(0).toUpperCase()+value.slice(1);
        },
        //数组按照大小排序
        sortfilers:function(value){
           var nowvalue=value.sort(function(a,b){
              return a-b;
          })
           // console.log(this);
          return nowvalue;
        }
    },
    //当路由进入页面时
    // beforeRouteEnter (to, from, next) {
    //     if(window.confirm("确定要去详情页吗?")){
    //         next();
    //     }
    // },
    // //当路由离开页面时
    // beforeRouteLeave(to,from,next){
    //     if(window.confirm("确定要离开吗？")){
    //         next();
    //     }
    // }

    
}
</script>
<style>
.gundong{
    width: 500px;
    height: 30px;
    line-height: 30px;
    background:#ff0;
    color: #f0f;
}
</style>
