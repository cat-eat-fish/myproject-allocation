<template>
  <div class="other">
      <!-- 头部 -->
      <MyHead></MyHead>
      
        <div class="ui-view-wrap">
            <div class="about-banner"></div>
            <div class="about-nav">
                <a href="javascript:;" :class="{curr:active==index}"  @click="jump(item)" v-for="(item,index) in nav" :key="index">{{item.text}}</a>
            </div>
            <router-view></router-view>
        </div>

      <Sidebar></Sidebar>
      <MyFoot></MyFoot>
  </div>
</template>

<script>
import MyHead from '@/components/myhead'
import MyFoot from '@/components/myfoot'
import Sidebar from '@/components/sidebar'
export default {
  components: {
    MyHead,MyFoot,Sidebar
  },
  name: 'other',
  data () {
    return {
        active:0,
        nav:[
            {id:0,text:'公司介绍',href:'/other/about'},
            {id:1,text:'联系我们',href:'/other/contactus'},
            {id:2,text:'招商加盟',href:'/other/market'},
            {id:3,text:'APP下载',href:'/other/appdown'},
        ]
    }
  },
  methods:{
      jump(e){
          this.$router.push(e.href);
          this.active=e.id;
      }
  },
  created(){

  },
  mounted(){

  }
}
</script>

<style scoped lang="scss">
    .ui-view-wrap {
        width: 100%;
        text-align: center;
        margin-top: 120px;
        .about-banner {
            background: url(/static/img/about_banner.jpg) center no-repeat;
            width: 100%;
            height: 350px;
        }
        .about-nav {
            height: 66px;
            line-height: 66px;
            border-bottom: 1px solid #e8e8e8;
            font-size: 14px;
            text-align: center;
            a{
                color: #000;
                margin-left: 40px;
            }
            a:nth-of-type(1){
                margin: 0;
            }
            a.curr {
                color: #cd3733;
            }
        }
    }
</style>
