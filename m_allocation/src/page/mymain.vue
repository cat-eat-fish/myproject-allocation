<template>
  <div class="mymain">
      <div class="swiper-container">
        <div class="swiper-wrapper" >
          <div class="swiper-slide" v-for="(item,index) in bannerimgs" :key="index">
            <img :src="item.src" alt="">
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
      <!--  -->
      <ul class="date-nav">
        <li v-for="(item,index) in zs" :key="index">
          <p>{{item.text}}</p> 
          <p class="font-red">{{item.num}}</p> 
          <p class="font-red">
            <span>{{item.percentage1}}</span> 
            <span>+{{item.percentage2}}</span>
          </p>
        </li> 
      </ul>
      <!--  -->
      <ul class="peizi-nav">
        <li v-for="(item,index) in nav" :key="index">
          <a href="JavaScript:;" @click="navjump(item)">
            <span class="ico ico-stock-day">
                <img :src="item.src" alt="">
              </span>
              {{item.text}}
          </a>
        </li> 
      </ul>
      <!--  -->
      <div class="index-money">
        <ul class="clearfix">
          <li v-for="(item,index) in userinfo.slice(0,3)" :key="index">
            <p>{{item.text}}</p> 
            <p class="c-yel money">
              <span class="money_asset">{{item.num}}</span>元
            </p>
          </li> 
          </ul>
          <ul class="clearfix">
            <li v-for="(item,index) in userinfo.slice(3)" :key="index">
            <p>{{item.text}}</p> 
            <p class="c-yel money">
              <span class="money_asset">{{item.num}}</span>元
            </p>
          </li> 
          </ul>
      </div>

      <!--  -->
      <div class="nav-pro-list clearfix">
        <ul>
          <li v-for="(item,index) in newslis" :key="index">
            <div class="head" :style="{backgroundImage:'url('+ item.thumb+ ')'}">
              <strong>{{item.title}}</strong> 
              <span>{{item.desc}}</span>
              <a href="javascript:;" @click="getmore(item)">更多 &gt;</a>
            </div> 
            <div class="detail" v-for="(item2,index2) in item.content" :key="index2">
              <div class="first">
                <img :src="item2.thumb"> 
                <p class="pic">
                  <a href="javascript:;" @click="jump(item2)">{{item2.desc}}</a> 
                  <span>来源:<i>{{item2.source}} </i> 时间：<i>{{item2.time}}</i></span>
                </p>
              </div>
              </div>
              </li>
        </ul>
      </div>



      <MyMask></MyMask>
      <MyPrompt></MyPrompt>
      <MyFoot></MyFoot>
  </div>
</template>

<script>
// swiper
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';

import MyFoot from "@/components/myfoot"
import MyMask from "@/components/mask"
import MyPrompt from "@/components/prompt"
export default {
    components:{
        MyFoot,MyMask,MyPrompt
    },
  name: 'mymain',
  data () {
    return {
      bannerimgs:[
        {id:0,src:require('../assets/img/201806291810370181.jpg'),alt:'',href:''},
        {id:1,src:require('../assets/img/201806291810370181.jpg')},
      ],
      zs:[
        {id:0,text:'上证指数',num:'26532.268',percentage1:'26%',percentage2:'21.6%'},
        {id:1,text:'深证指数',num:'26532.268',percentage1:'26%',percentage2:'21.6%'},
        {id:2,text:'创业板指数',num:'26532.268',percentage1:'26%',percentage2:'21.6%'},
      ],
      nav:[
        {id:0,src:require('../assets/img/peizi-01.png'),text:'按天操盘',href:'/trade/daytrade'},
        {id:1,src:require('../assets/img/peizi-02.png'),text:'按月操盘',href:'/trade/monthtrade'},
        {id:2,src:require('../assets/img/peizi-03.png'),text:'免费体验',href:'/trade/freetrade'},
        {id:3,src:require('../assets/img/peizi-04.png'),text:'充值中心',href:'/personcenter/pay'},
      ],
      userinfo:[
        {id:0,text:'动态资产',num:'0.00'},
        {id:1,text:'可用资金',num:'0.00'},
        {id:2,text:'冻结资金',num:'0.00'},
        {id:3,text:'实盘可买',num:'0.00'},
        {id:4,text:'证劵市值',num:'0.00'},
        {id:5,text:'持仓盈亏',num:'0.00'},
      ],
      newslis:[
        {id:0,title:'财经早餐',desc:'(最新鲜最全面的财经资讯)',thumb:require('../assets/img/caijing.png'),content:[
          {id:0,href:'/news/newsdetails',thumb:require('../assets/img/thumb_20180.jpg'),desc:'A股三大股指周一全线探底回升，盘中一度齐创本轮调整新低。截止收盘，沪指上涨1.11%，收报2698....',source:'本站',time:'2018-08-21'},
          {id:1,href:'/news/newsdetails',thumb:require('../assets/img/thumb_20180.jpg'),desc:'周五沪深两市全天再现单边下挫走势，沪指下跌1.34%，报收2668点；深成指下跌1.69%，报收83...',source:'本站',time:'2018-08-20'},
        ]},
        {id:1,title:'牛散实操',desc:'(经典实操，牛散的操作)',thumb:require('../assets/img/shicao.png'),content:[
          {id:0,href:'/news/newsdetails',thumb:require('../assets/img/thumb_20180.jpg'),desc:'A股三大股指周一全线探底回升，盘中一度齐创本轮调整新低。截止收盘，沪指上涨1.11%，收报2698....',source:'本站',time:'2018-08-21'},
          {id:1,href:'/news/newsdetails',thumb:require('../assets/img/thumb_20180.jpg'),desc:'周五沪深两市全天再现单边下挫走势，沪指下跌1.34%，报收2668点；深成指下跌1.69%，报收83...',source:'本站',time:'2018-08-20'},
        ]},
        {id:0,title:'新闻动态',desc:'(新闻动态早知道)',thumb:require('../assets/img/xinwen.png'),content:[
          {id:0,href:'/news/newsdetails',thumb:require('../assets/img/thumb_20180.jpg'),desc:'A股三大股指周一全线探底回升，盘中一度齐创本轮调整新低。截止收盘，沪指上涨1.11%，收报2698....',source:'本站',time:'2018-08-21'},
          {id:1,href:'/news/newsdetails',thumb:require('../assets/img/thumb_20180.jpg'),desc:'周五沪深两市全天再现单边下挫走势，沪指下跌1.34%，报收2668点；深成指下跌1.69%，报收83...',source:'本站',time:'2018-08-20'},
        ]},
      ]
    }
  },
  methods:{
    navjump(e){
      this.$router.push(e.href)
    },
    getmore(e){
      this.$router.push({path:'/news/news',query:{id:e.id}})
    },
    jump(e){
      this.$router.push({path:'/news/newsdetails',query:{id:e.id}})
    }
  },
  mounted(){
        var mySwiper = new Swiper('.swiper-container', {
          pagination: {
            el: '.swiper-pagination',
          },
        })
    },
  created(){
    if(!(localStorage.getItem('islogin'))){
      localStorage.setItem('islogin',false)
    }
  }
}
</script>

<style scoped lang="scss">
.mymain{
  background: #f5f5f5;
  overflow: hidden;
}
  .mymain .mask,.mymain .prompt{
    display: none;
  }

  //banner
  .swiper-container {
      width: 100%;
      img{
        width: 100%;
      }
  }

  // 
  .date-nav{
        padding: 10px 15px 15px;
        background: #fff;
        margin-bottom: 10px;
        overflow: hidden;
    li {
    float: left;
      border: 1px solid #d5d5d5;
      width: 30%;
      margin-right: 5%;
      padding: 10px 0;
      border-radius: 5px;
      box-shadow: 0 1px 2px 2px rgba(0,0,0,0.1);
      text-align: center;
      p:first-child {
          font-weight: bold;
      }
      p:nth-child(2) {
          font-size: 16px;
          font-weight: bold;
      }
      p {
          line-height: 20px;
          font-size: 13px;
      }
    }
      li:last-child {
          margin-right: 0;
      }
  }

  // 
  .peizi-nav{
        padding: 10px 15px 15px;
        background: #fff;
        margin-bottom: 10px;
        overflow: hidden;
        li {
            width: 25%;
            float: left;
            text-align: center;
            a {
                color: #666;
                font-size: 0.2rem;
                span{
                      height: 1rem;
                      width: 1rem;
                      display: block;
                      margin: 0 auto;
                      margin-bottom: 0.1rem;
                      img{
                        width: 100%;
                      }
                }
            }
        }
  }
  // 
  .index-money {
    padding: 0 15px;
    background: #fff;
      position: relative;
      ul:first-child{
        border-bottom: 1px solid #dcdcdc;
      }
      ul:last-child{
        border: none;
      }
    ul{
     
      li {
          width: 33%;
          text-align: center;
          border-right: 1px solid #dcdcdc;
          float: left;
          margin: 0.2rem 0;
          font-size: 0.24rem;
          .c-yel {
              color: #ff3c3c;
          }
      }
      li:nth-of-type(3),li:nth-of-type(6) {
          border-right: 0;
      }
    }
  }
  // 
  .nav-pro-list{
      padding-bottom: 1.2rem;
  }
  .nav-pro-list li {
      background: #fff;
      margin-top: 10px;
      padding: 15px;
      font-size: 14px;
      span {
          font-size: 12px;
      }
      .head {
          padding-bottom: 10px;
          border-bottom: 1px solid #e4e4e4;
          background-repeat:  no-repeat;
          background-position: left top;
          background-color: #fff;
          background-size: 8%;
          padding-left: 9%;
          strong {
              font-size: 16px;
              font-weight: bold;
          }
          a {
              display: block;
              float: right;
              color: #ff3c3c;
              font-size: 12px;
          }
      }
      .detail {
          padding: 15px 0 0;
          overflow: hidden;
      }
      .first {
          overflow: hidden;
          img {
              display: block;
              float: left;
              width: 45px;
              height: 45px;
          }
          p {
              float: right;
              width: 84%;
          }
      }
      p {
          font-size: 0.2rem;
          color: #666;
          text-align: left;
          span {
              display: block;
              float: right;
              padding-left: 5px;
              margin: 10px 0 10px;
              font-size: 12px;
          }
      }
  }
</style>
