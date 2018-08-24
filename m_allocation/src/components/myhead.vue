<template>
  <div class="top">
        <i @click="goback" class="iconfont icon-icon-arrow-left2"></i>
        <p class="title">{{title}}</p>
  </div>
</template>

<script>
export default {
  name: 'myhead',
  props:{
      title:{
          type:String,
          default:'默认title'
      }
  },
  data () {
    return {
    }
  },
  methods:{
      goback(){
          this.$router.go(-1);
      },
  }
}
</script>

<style scoped lang="scss">
    .top{
        width: 100%;
        height: 44px;
        line-height: 44px;
        background: red;
        color: #fff;
        i{
            display: inline-block;
            width: 10%;
            text-align: center;
        }
        p{
            display: inline-block;
            width: 80%;
            margin: 0 auto;
            text-align: center;
            font-size: 0.3rem;
        }
    }
</style>
