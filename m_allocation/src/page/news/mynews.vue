<template>
    <div class="news">
        <MyHead title="消息中心"></MyHead>
        <div class="wrap">
            <ul>
                <li class="mui-table-view-cell mui-media" v-for="(item,index) in lis" :key="index"> 
                    <a href="javascript:;" @click="jump(item)">
                        <img class="mui-media-object mui-pull-right" :src="item.img">
                        <div class="mui-media-body">
                            <div class="news-list-title">{{item.title}}</div>
                            <div class="news-list-zhaiyao">{{item.desc}}}</div>
                            <p class="news-list-time">{{item.date}}    阅读{{item.read}}</p>
                        </div>
                    </a>
                </li>
            </ul>
            <div style="text-align: center; font-weight: 700;color: #777; font-size: 15px; margin: 10px 10px 10px 10px;">
                <span id="loadmore" @click="getmore" style="">加载更多</span>
            </div>
        </div>
    </div>
</template>

<script>
import MyHead from "@/components/myhead"
export default {
    components:{
        MyHead
    },
  name: 'news',
  data () {
    return {
        lis:[
            {id:0,img:require('../../assets/img/thumb_201808210915427212.jpg'),title:'问题多多！千亿独角兽带病上市？',desc:"8月7日，住房和城乡建设部先是在辽宁沈阳召开部分城市房地产工作座谈会，对参会各城市未来房地产调控工作...",date:'2013-08-03',href:'',read:'6'},
            {id:1,img:require('../../assets/img/thumb_201808210915427212.jpg'),title:'问题多多！千亿独角兽带病上市？',desc:"8月7日，住房和城乡建设部先是在辽宁沈阳召开部分城市房地产工作座谈会，对参会各城市未来房地产调控工作...",date:'2013-08-03',href:'',read:'6'},
            {id:2,img:require('../../assets/img/thumb_201808210915427212.jpg'),title:'问题多多！千亿独角兽带病上市？',desc:"8月7日，住房和城乡建设部先是在辽宁沈阳召开部分城市房地产工作座谈会，对参会各城市未来房地产调控工作...",date:'2013-08-03',href:'',read:'6'},
            {id:3,img:require('../../assets/img/thumb_201808210915427212.jpg'),title:'问题多多！千亿独角兽带病上市？',desc:"8月7日，住房和城乡建设部先是在辽宁沈阳召开部分城市房地产工作座谈会，对参会各城市未来房地产调控工作...",date:'2013-08-03',href:'',read:'6'},
            {id:4,img:require('../../assets/img/thumb_201808210915427212.jpg'),title:'问题多多！千亿独角兽带病上市？',desc:"8月7日，住房和城乡建设部先是在辽宁沈阳召开部分城市房地产工作座谈会，对参会各城市未来房地产调控工作...",date:'2013-08-03',href:'',read:'6'},
            {id:5,img:require('../../assets/img/thumb_201808210915427212.jpg'),title:'问题多多！千亿独角兽带病上市？',desc:"8月7日，住房和城乡建设部先是在辽宁沈阳召开部分城市房地产工作座谈会，对参会各城市未来房地产调控工作...",date:'2013-08-03',href:'',read:'6'},
            {id:6,img:require('../../assets/img/thumb_201808210915427212.jpg'),title:'问题多多！千亿独角兽带病上市？',desc:"8月7日，住房和城乡建设部先是在辽宁沈阳召开部分城市房地产工作座谈会，对参会各城市未来房地产调控工作...",date:'2013-08-03',href:'',read:'6'},
            {id:7,img:require('../../assets/img/thumb_201808210915427212.jpg'),title:'问题多多！千亿独角兽带病上市？',desc:"8月7日，住房和城乡建设部先是在辽宁沈阳召开部分城市房地产工作座谈会，对参会各城市未来房地产调控工作...",date:'2013-08-03',href:'',read:'6'},
        ]
    }
  },
  methods:{
      jump(e){
          this.$router.push({path:'/news/newsdetails',query:{id:e.id}})
      },
      getmore(){
          console.log('加载更多')
      }
  },
  created(){
      var id=this.$route.query.id?this.$route.query.id:0;
  }
}
</script>

<style scoped lang="scss">
    .wrap {
        margin: 0 auto;
        width: 100%;
        min-width: 320px;
        overflow-x: hidden;
        padding-bottom: 1rem;
        position: relative;
        .mui-table-view-cell:after {
            position: absolute;
            right: 0;
            bottom: 0;
            left: 0;
            height: 1px;
            content: '';
            -webkit-transform: scaleY(.5);
            transform: scaleY(.5);
            background-color: #c8c7cc;
        }
        .mui-table-view-cell {
            position: relative;
            overflow: hidden;
            padding: 11px 15px;
            -webkit-touch-callout: none;
             a:not(.mui-btn) {
                position: relative;
                display: block;
                overflow: hidden;
                margin: -11px -15px;
                padding: inherit;
                white-space: nowrap;
                text-overflow: ellipsis;
                color: inherit;
            }
        }
        .mui-pull-right {
            float: right;
            width: 60px;
        }
        .news-list-title {
            font-size: 14px;
            color: #333;
            word-wrap: break-word;
            white-space: normal;
        }
        .news-list-zhaiyao {
            font-size: 12px;
            color: #6f6363;
            word-wrap: break-word;
            white-space: normal;
        }
        .news-list-time {
            font-size: 12px;
            color: #dbdbdb;
        }
    }
    
</style>
