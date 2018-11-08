<template>

<el-container>

<el-header>
   头部区域
<i class="el-icon-edit"></i>

</el-header>

<el-aside>
    左侧栏区域<i class="el-icon-loading"></i>
</el-aside>


<el-main>
<el-button icon="el-icon-search" circle></el-button>
<el-input v-model="con"  suffix-icon="el-icon-date" prefix-icon="el-icon-loading"></el-input>

<el-button @click="open">弹出窗口</el-button>


</el-main>

<el-footer>

尾部区域

</el-footer>



</el-container>
    
</template>
<script>
export default {
    data(){
        return{
            con:"我是concent"
        }
    },
    methods:{
        open:function(){
            console.log(this);
            return;
            this.$confirm("确定要继续吗?","提示",{
                confirmButtonText:"确定",
                cancelButtonText:"取消",
                type:"warning"
            }).then(()=>{
                
                this.$message({
                    type:"success",
                    message:"操作成功"
                })

            }).catch(()=>{
                console.log("取消")
            })
        }
    
    }
}
</script>
<style>

</style>
