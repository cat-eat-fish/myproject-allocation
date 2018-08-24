<template>
    <div class="mytrade">
        <MyHead title="账户中心"></MyHead>
        <div class="rank-nodata">
                <img src="../../assets/img/nodata.png">
                <span>请先操盘再交易</span>
            </div>
    </div>
</template>

<script>
import MyHead from "@/components/myhead"
export default {
    components:{
        MyHead
    },
  name: 'mytrade',
  data () {
    return {
    }
  },
  created(){
      let islogin=localStorage.getItem('islogin')
      if(islogin=='false'){
          this.$router.push('/login')
      }else{
          this.$router.push('/trade/mytrade')
      }
  }
}
</script>

<style  lang="scss">
.rank-nodata {
    position: relative;
    padding: 15px;
    text-align: center;
    span {
        position: absolute;
        font-size: 14px;
        left: 50%;
        top: 50%;
        margin-top: -20px;
        margin-left: -10px;
    }
}
</style>
