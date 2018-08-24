<template>
  <div class="newsdefault">
      <!-- 头部 -->
      <MyHead></MyHead>
      
            <div class="ui-view-wrap">
                <div class="inner-page-content-wrap">
                    <div class="crumbs">
                        <router-link to="/">首页<i>&gt;</i></router-link>
                        <h1 style="display: inline-block;"><router-link to="/news">资讯中心</router-link></h1>
                    </div>
                    <ul class="news-contentItem-wrap clearfix">
                        <li  v-for="(item,index) in nav" :key="index">
                            <a href="javascript:;" :class="{active:active==index}" @click="jump(item)">
                                {{item.text}}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <router-view></router-view>
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
  name: 'newsdefault',
  data () {
    return {
        active:0,
        nav:[
            {id:0,text:'财经早餐',href:'/news/newscj'},
            {id:1,text:'牛散实操',href:'/news/exercises'},
            {id:2,text:'新闻动态',href:'/news/dynamic'},
            {id:3,text:'创赢中心咨询',href:'/news/consultation'},
            {id:4,text:'常见问题',href:'/news/problem'},
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
    .ui-view-wrap{
        margin-top: 120px;
        width: 100%;
        .inner-page-content-wrap {
            padding: 0;
            margin-bottom: 100px;
            width: 1180px;
            margin: 0 auto;
            .crumbs {
                font-size: 14px;
                color: #546B96;
                height: 60px;
                line-height: 60px;
                i {
                    margin: 0 6px;
                    font-size: 12px;
                }
                h1{
                    font-size: 12px;
                    font-weight: normal;
                    margin: 0;
                    padding: 0;
                }
            }
            .news-contentItem-wrap {
                border-top: 2px solid #303849;
                border-bottom: 1px solid #DDD;
                height: 50px;
                padding: 16px 0;
                margin-bottom: 20px;
                display: flex;
                justify-content: space-between;
                li {
                    width: 100px;
                    text-align: center;
                    a{
                        font-size: 14px;
                        color: #333;
                    }
                    a.active{
                        font-weight: bold;
                    }
                }
            }
        }
    }
</style>
