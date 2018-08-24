<template>
  <div class="mymain">
      <!-- 头部 -->
      <MyHead></MyHead>
      <div class="main">
          <!-- swiper -->
            <div class="swiper-container" id="swiper">
                <div class="swiper-wrapper">
                    <div v-for="(item,index) in myswiper.imgs" :key="index" class="swiper-slide">
                        <img  class="title a-flyTopIn" :src="item.src">
                    </div>
                </div>
                <div class="swiper-pagination"></div>
            </div>
            <!-- 固定登录注册 -->
            <div class="login-index">
                    <div class="login-box-tp1">
                        <div class="login-box-con">
                            <div class="tit">您炒股，我出钱</div>
                            <div class="line"></div>
                            <h1>注册领取2000元体验金</h1>
                            <p>资金安全双重保障，100%实盘交易</p>
                            <div id="userout">
                                <router-link to="/register" class="btn">马上注册</router-link>
                                <p class="log">已有账号？ <router-link to="/login">立即登录</router-link></p>
                            </div>
                            <div id="userin" style="display: none;">
                                <a href="/member/assets.html" class="btn">个人中心</a>
                                <p class="log"><a href="javascript:void(0);" onclick="loginout()" class="reg">安全退出</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 1 -->
            <div class="pb1">
                <ul>
                    <li :class="item.class" v-for="(item,index) in pb1" :key="index">
                        <span>{{item.title}}</span>
                        <strong>
                            <span>{{item.text}}</span>
                        </strong>
                    </li>
                </ul>
            </div>
            <!-- 2 -->
            <div class="index-sec index-pro">
                <div class="wrap">
                    <div class="index-tit">
                        <div class="en">FUNDING</div>
                        <div class="ch">申请·<span>领投</span></div>
                        <div class="line"></div>
                        <p>小资金 大利润 我出资金 盈利翻番</p>
                    </div>
                    <div class="index-prolist clearfix">
                        <ul>
                            <li v-for="(item,index) in pb2" :key="index">
                                <i class="ico" :class="item.class"></i>
                                <h3>{{item.title}}</h3>
                                <p v-html="item.p1"></p>
                                <p v-html="item.p2"></p>
                                <p  v-if="item.p3==''">&nbsp;</p>
                                <p v-else v-html="item.p3"></p>
                                <router-link :style="{background:item.bg}" :to="item.href" class="btn btn-red">我要领投</router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <!-- 3 -->
            <div class="index-sec index-join">
                <div class="wrap">
                    <div class="index-tit">
                        <div class="en">STOCK MARKET</div>
                        <div class="ch">招商·<span>加盟</span></div>
                        <div class="line"></div>
                        <p>市场巨大，发展前景一片蓝海</p>
                    </div>
                </div>
                <div class="index-join-main">
                    <div class="join-btn">国内最权威的股票操盘平台200元起配</div>
                    <p class="en">WE SINCERELY INVITE YOU TO JOIN US</p>
                    <p>现诚邀全国代理加盟，欢迎咨询合作！</p>
                    <p class="join-phone">0755-28997270</p>
                </div>
            </div>
            <!-- 4 -->
            <div class="index-sec nindex-news">
                <div class="wrap">
                    <div class="index-tit">
                        <div class="en">NEWS</div>
                        <div class="ch">最新·<span>资讯</span></div>
                        <div class="line"></div>
                        <p>精进不休，我们的最新动态</p>
                    </div>
                    <div class="nindex-news-main clearfix">
                        <div class="nindex-news-left fl">
                            <div class="nindex-news-tit clearfix">
                                <ul class="nav fl">
                                    <li v-for="(item,index) in pb3_t" :key="index">
                                        <a :class="{on:index==pb4nav}" @click="changepb4nav(index)"  href="javascript:;">
                                            {{item.text}}
                                        </a>
                                    </li>
                                </ul>
                                <router-link to="/news/dynamic" class="more fr" >MORE&gt;&gt;</router-link>
                            </div>
                            <div class="nindex-news-con">
                                <div class="nindex-news-list" id="con_Innews_1">
                                    <div class="news-with clearfix">
                                        <div class="imgs fl">
                                            <img :src="pb3_c1.slice(0,1)[0].img" :alt="pb3_c1.slice(0,1)[0].title">
                                        </div>
                                        <div class="content fr">
                                            <h1>{{pb3_c1.slice(0,1)[0].title}}</h1>
                                            <div class="des">{{pb3_c1.slice(0,1)[0].content}}</div>
                                            <router-link :to="pb3_c1.slice(0,1)[0].href" class="btn" target="_blank">
                                                查看详情
                                            </router-link> 
                                        </div> 
                                    </div>
                                    <ul>
                                        <li v-for="(item,index) in pb3_c1.slice(1)" :key="index">
                                            <router-link  :to="item.href" target="_blank">
                                                {{item.title}}
                                            </router-link>
                                            <span class="time fr">
                                                {{item.date}}
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                                <div  class="nindex-news-list" id="con_Innews_2">
                                    <div class="news-with clearfix">
                                        <div class="imgs fl">
                                            <img :src="pb3_c2.slice(0,1)[0].img" :alt="pb3_c2.slice(0,1)[0].title">
                                        </div>
                                        <div class="content fr">
                                            <h1>{{pb3_c2.slice(0,1)[0].title}}</h1>
                                            <div class="des">{{pb3_c2.slice(0,1)[0].content}}</div>
                                            <router-link :to="pb3_c2.slice(0,1)[0].href" class="btn" target="_blank">
                                                查看详情
                                            </router-link> 
                                        </div> 
                                    </div>
                                    <ul>
                                        <li v-for="(item,index) in pb3_c2.slice(1)" :key="index">
                                            <router-link  :to="item.href" target="_blank">
                                                {{item.title}}
                                            </router-link>
                                            <span class="time fr">
                                                {{item.date}}
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="nindex-news-right fr">
                            <div class="nindex-news-tit">
                                <span class="on fl">常见问题</span>
                                <a href="/news/problem" class="more fr" target="_blank">MORE&gt;&gt;</a>
                            </div>
                            <div class="nindex-news-qa">
                                <div class="qa-list" v-for="(item,index) in pb3_l" :key="index"> 
                                    <h1 class="qus"> 
                                        <i class="ico ico-q">问</i>
                                        <router-link :to="item.href" target="_blank">{{item.p}}</router-link> 
                                    </h1> 
                                    <div class="ans"> 
                                        <i class="ico ico-a">答</i> 
                                        <p>{{item.a}}</p> 
                                    </div> 
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 5 -->
            <div class="index-foot">
                <div class="wrap">
                    <ul>
                        <li v-for="(item,index) in pb5" :key="index">
                            <i class="ico" :style="{backgroundPosition:item.img}"></i>
                            <h3>{{item.title}}</h3>
                            <p>{{item.text}}</p>
                        </li>
                    </ul>
                </div>
            </div>
      <Sidebar></Sidebar>
      <MyFoot></MyFoot>
  </div>
</template>

<script>
import MyHead from '@/components/myhead'
import MyFoot from '@/components/myfoot'
import Sidebar from '@/components/sidebar'
// swiper
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';

export default {
  components: {
    MyHead,MyFoot,Sidebar
  },
  name: 'mymain',
  data () {
    return {
        // 新闻动态、子牛咨询切换
        pb4nav:'',
      myswiper:{
          imgs:[
            {id:0,src:'/static/img/201806291814092837.jpg'},
            {id:1,src:'/static/img/201806291814092837.jpg'},
          ]
      },
    //   pb1
      pb1:[
          {id:0,class:'s1',title:'资金保障',text:'资金第三方托管，专款专用',src:''},
          {id:1,class:'s2',title:'真实交易',text:'100%实盘，level2可查委托',src:''},
          {id:2,class:'s3',title:'快捷提现',text:'闪电提现，三十分钟到账',src:''},
          {id:3,class:'s4',title:'专业服务',text:'客户体验至上为宗旨',src:''},
      ],
    //   pb2
    pb2:[
        {id:0,class:'ico-1',bg:'#cd3733',title:'按天领投',p1:'最高<span>500</span>万按日计息<span>200</span>元',p2:'起配<span>3-10</span>倍杠杆期限<span>2-20</span>',p3:'天盈利放大<span>10<span>倍',src:'',href:'/trade/daytrade'},
        {id:1,class:'ico-2',bg:'#0071da',title:'按月领投',p1:'<span>200</span>元起配<span>3-9</span>倍杠杆期限',p2:'<span>1-3</span>月盈利放大<span>9</span>倍',p3:'',src:'0 -170px',href:'/trade/monthtrade'},
        {id:2,class:'ico-3',bg:'#264561',title:'免费体验',p1:'<span>100</span>元配<span>2000</span>元<span>20</span>倍杠杆期',p2:'限<span>2</span>天盈利放大<span>20</span>倍',p3:'',src:'0 -510px',href:'/trade/feedertrade'},
    ],
    pb3_t:[
        {id:0,text:'新闻动态'},
        {id:1,text:'子牛咨询'},
    ],
    pb3_c2:[
        {id:0,href:'/news/newspage/5',img:'/static/img/thumb_201808.png',title:'问题多多！千亿独角兽带“病”上市？',content:'最近，由于长生生物疫苗造假事件的发酵，叠加美年健康被曝出“假医生“，a股市场上的医疗板块市值已蒸发超过…',date:'2018-08-02'},
        {id:1,href:'/news/newspage/2',img:'/static/img/thumb_201808.png',title:'沪指七月收宫战翻红，八月能否跌穿2638点？',content:'最近，由于长生生物疫苗造假事件的发酵，叠加美年健康被曝出“假医生“，a股市场上的医疗板块市值已蒸发超过…',date:'2018-08-02'},
        {id:2,href:'/news/newspage/3',img:'/static/img/thumb_201808.png',title:'碧桂园是如何发家的？高周转模式可持续吗？',content:'最近，由于长生生物疫苗造假事件的发酵，叠加美年健康被曝出“假医生“，a股市场上的医疗板块市值已蒸发超过…',date:'2018-08-01'},
        {id:3,href:'/news/newspage/4',img:'/static/img/thumb_201808.png',title:'震撼！上市公司频现黑天鹅事件！',content:'最近，由于长生生物疫苗造假事件的发酵，叠加美年健康被曝出“假医生“，a股市场上的医疗板块市值已蒸发超过…',date:'2018-07-31'},
    ],
    pb3_c1:[
        {id:0,href:'/news/newspage/5',img:'/static/img/thumb_20180614112.jpg',title:'关于端午节休假安排的通知',content:'尊敬的合作伙伴： 2018年6月16日（星期六）—2018年6月18日（星期一）休市3天。2018年6月19日（星期二）…',date:'2018-08-02'},
        {id:1,href:'/news/newspage/2',img:'/static/img/thumb_20180614112.jpg',title:'合规声明',content:'最近，由于长生生物疫苗造假事件的发酵，叠加美年健康被曝出“假医生“，a股市场上的医疗板块市值已蒸发超过…',date:'2018-08-02'},
        {id:2,href:'/news/newspage/3',img:'/static/img/thumb_20180614112.jpg',title:'2018五一劳动节放假通知',content:'最近，由于长生生物疫苗造假事件的发酵，叠加美年健康被曝出“假医生“，a股市场上的医疗板块市值已蒸发超过…',date:'2018-08-01'},
        {id:3,href:'/news/newspage/4',img:'/static/img/thumb_20180614112.jpg',title:'创盈中心系统升级温馨提示',content:'最近，由于长生生物疫苗造假事件的发酵，叠加美年健康被曝出“假医生“，a股市场上的医疗板块市值已蒸发超过…',date:'2018-07-31'},
    ],
    pb3_l:[
        {id:0,p:'指数弱势震荡',href:'/news/newspage/2',a:'昨日深沪两市呈现探低反弹走势，各大指数低开后震荡走低，但随着创业板指率先企稳反弹，带动大盘整体实现大逆转。创业板个股表现最亮眼，总共有22只个股…'},
        {id:1,p:'指数震荡筑底',href:'/news/newspage/1',a:'消息面：1、中国外交部表示，中美经贸谈判刚刚开始，中美经贸谈判应该是互惠的。2、朝鲜最高领导人金正恩会见王毅。王毅表示中方支持和祝贺北南领导人成…'},

    ],
    // 
    pb5:[
        {id:0,img:'',title:'资金保障',text:'严谨的风控流程'},
        {id:1,img:'0 -60px',title:'信息保障',text:'资金由银行机构监管'},
        {id:2,img:'0 -120px',title:'项目保险',text:'资金秒到 收益放大10倍'},
        {id:3,img:'0 -180px',title:'极速开户',text:'30秒极速开户'},
    ]
    }
  },
  methods:{
      changepb4nav:function(index){
          this.pb4nav=index;
          localStorage.setItem('mymain_pb4nav',index);
          document.querySelectorAll('.nindex-news-list').forEach(element => {
              element.classList.remove('hide');
          });
          document.querySelector('.nindex-news-list:nth-of-type('+(index+1)+')').classList.add('hide');
      }
  },
  created(){
    //   document.querySelector('.nindex-news-list:nth-of-type(2)').classList.add('hide');
  },
  mounted(){
      var swiper = new Swiper('#swiper', {
      effect : 'fade',
      loop:true,
      autoplay:true,
      pagination: {
        el: '#swiper .swiper-pagination',
        clickable :true,
      },
    });
    
    
    this.pb4nav=localStorage.getItem('mymain_pb4nav')?localStorage.getItem('mymain_pb4nav'):0;
    document.querySelectorAll('.nindex-news-list')[this.pb4nav].classList.add('hide');
  }
}
</script>

<style scoped lang="scss">
    .wrap {
        margin: 0 auto;
        width: 1180px;
    }
    .main{
        margin-top: 118px;
    }
    #swiper{
        height: 400px;
    }
    // 固定
    .login-index {
        left: 0;
        margin: 0 auto;
        overflow: visible;
        position: relative;
        top: -370px;
        width: 1180px;
        z-index: 95;
        .login-box-tp1 {
            background: rgba(255,255,255,.4);
            padding: 10px;
            top: 0;
            right: 0;
            position: absolute;
            text-align: center;
            .login-box-con {
                background: #fff;
                height: 310px;
                width: 294px;
            }
            .tit {
                font-size: 21px;
                padding-top: 40px;
                line-height: 1.2;
                margin-bottom: 10px;
            }
            .line {
                background: #ccc;
                height: 3px;
                width: 56px;
                margin: 0 auto;
            }
            h1 {
                font-size: 24px;
                margin-top: 20px;
                color: #e20000;
                font-weight: bold;
            }
            p {
                color: #666;
                font-size: 12px;
                padding: 18px 0;
            }
            .btn {
                margin: 20px auto 25px;
                height: 45px;
                line-height: 45px;
                width: 246px;
                display: block;
                text-align: center;
                background: #f64a4a;
                color: #fff;
                border-radius: 10px;
                font-size: 18px;
            }
            p.log {
                padding: 0;
                a {
                    color: #f64a4a;
                }
            }
        }
    }
    // 1
    .pb1 {
        background: #eeeeee;
        border-bottom: 0px;
        height: 78px;
        ul {
            margin: 0 auto;
            width: 1180px;
            padding-top: 14px;
            display: flex;
            justify-content: space-between;
            li {
                width: 230px;
                float: left;
                height: 50px;
                overflow: hidden;
                padding-left: 60px;
                background: url(/static/img/index_ico.png) no-repeat;
                span {
                    font-size: 16px;
                    color: #000;
                    margin: 4px 0 2px;
                    display: block;
                }
                strong {
                    display: block;
                    font: 16px/18px "Microsoft YaHei",tahoma,arial;
                    color: #777;
                    font-weight: 600;
                    span {
                        font-size: 12px;
                        color: #666;
                        font-weight: 300;
                        padding-top: 0px;
                    }
                }
            }
            li.s1 {
                background-position: 0 1px;  
                padding-left: 50px;
            }
            li.s2 {
                background-position: 0 -78px;  
            }
            li.s3 {
                background-position: 0 -158px;  
            }
            li.s4 {
                background-position: 0 -238px;  
            }
        }
    }
    // 2
        .index-tit {
            text-align: center;
            line-height: 1.2;
            color: #666;
            .line {
                background: url(/static/img/index_tit_line.png) center no-repeat;
                height: 5px;
                margin: 20px 0 10px;
            }
            .en {
                font-size: 18px;
                font-family: Arial;
            }
            .ch {
                font-size: 30px;
                color: #333;
                span {
                    color: #cd3733;
                }
            }
        }
    .index-pro {
        padding: 60px 0;
        .index-prolist {
            margin-top: 50px;
            ul{
                display: flex;
                justify-content: space-between;
            }
            li {
                width: 175px;
                text-align: center;
                line-height: 1.8;
                h3 {
                    font-size: 18px;
                    margin: 20px 0 10px;
                }
                p {
                    font-size: 14px;
                    span {
                        color: #cd3733;
                    }
                }
                .ico {
                    width: 166px;
                    height: 166px;
                    margin: 0 auto;
                    background: url(/static/img/index_pro_ico.png) no-repeat;
                    display: block;
                }
                .ico-2 {
                    background-position: 0 -170px;
                }
                .ico-3 {
                    background-position: 0 -510px;
                }
                .btn {
                    height: 38px;
                    line-height: 38px;
                    width: 146px;
                    text-align: center;
                    display: block;
                    margin: 25px auto 0;
                    border-radius: 10px;
                    color: #fff;
                }
            }
        }
    }
    // 3
    .index-join-main {
        background: url(/static/img/index_join_bg.jpg) top center no-repeat;
        height: 428px;
        margin-top: 30px;
        text-align: center;
        padding-top: 224px;
        .join-btn {
            background: url(/static/img/index_join_btn.png) no-repeat;
            height: 47px;
            line-height: 47px;
            width: 320px;
            padding: 0 10px;
            text-align: center;
            color: #fff;
            font-size: 16px;
            margin: 0 auto;
        }
        p {
            font-size: 16px;
            color: #181818;
            margin-top: 10px;
        }
        p.en {
            font-size: 12px;
            opacity: .4;
        }
        p.join-phone {
            font-family: Impact;
            font-size: 30px;
            height: 38px;
            line-height: 38px;
            position: relative;
        }
        p.join-phone::after  {
            content: '';
            background: url(/static/img/join_phone.png) no-repeat;
            height: 38px;
            width: 38px;
            display: inline-block;
            vertical-align: top;
            margin-right: 10px;
        }
    }
    // 4
    .fl {float: left;text-align: right;}
    .fr {float: right;}
    .nindex-news {
        padding: 60px 0;
    }
    .nindex-news-main {
        margin-top: 40px;
        height: 390px;
    }
    .nindex-news-tit {
        height: 56px;
        line-height: 56px;
        background: #f3f3f3;
        width: 100%;
        span.on {
            width: 156px;
            display: block;
            background: #c73b30;
            color: #fff;
            text-align: center;
        }
        li {
            width: 156px;
            text-align: center;
            float: left;
            a{
                display: block;
            }
        }
        .more {
            font-size: 12px;
            padding-right: 10px;
            color: #666;
        }
    }
    .news-with {
        margin-top: 32px;
        height: 148px;
        .content {
            width: 332px;
            h1 {
                font-size: 14px;
                color: #000;
                line-height: 24px;
                margin-bottom: 5px;
            }
            .des {
                font-size: 12px;
                color: #666;
                line-height: 24px;
                height: 72px;
                overflow: hidden;
            }
            .btn {
                height: 35px;
                line-height: 35px;
                width: 136px;
                border-radius: 5px;
                background: #c73b30;
                color: #fff;
                display: block;
                text-align: center;
                margin-top: 12px;
            }
        }
    }
    .nindex-news-left,.nindex-news-right {
        width: 564px;
    }
        
    .nindex-news-list ul {
        margin-top: 20px;
        li {
            border-bottom: 1px solid #e0e0e0;
            height: 24px;
            padding: 10px 0 26px 24px;
            line-height: 24px;
            font-size: 12px;
            .time {
                color: #999;
            }
             a {
                display: block;
                float: left;
                max-width: 465px;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                color: #666;
            }
        }
    }
    .nindex-news-qa{
        .qa-list {
            padding: 32px 0;
            border-bottom: 1px solid #e0e0e0;
            .qus {
                height: 30px;
                line-height: 30px;
                margin-bottom: 10px;
                a {
                    max-width: 500px;
                    overflow: hidden;
                    font-size: 16px;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    color: #000;
                }
            }
            .ico {
                height: 30px;
                line-height: 30px;
                width: 30px;
                float: left;
                font-size: 16px;
                background: #cd3733;
                display: block;
                text-align: center;
                margin-right: 10px;
                color: #fff;
            }
            .ico-a {
                background: #4f4f4f;
            }
            p {
                font-size: 14px;
                color: #666;
                line-height: 1.8;
            }
        }
    }
    .nindex-news-tit li a{
        color: #000;
    }
    .nindex-news-tit li a:hover, .nindex-news-tit li a.on {
        background: #c73b30;
        color: #fff;
    }


    .index-foot {
        background: #f3f3f3;
        height: 80px;
        ul{
            display: flex;
            justify-content: space-between;
            li {
                float: left;
                height: 52px;
                margin-top: 14px;
                width: 200px;
                .ico {
                    background: url(/static/img/index_foot_ico.png) no-repeat;
                    height: 51px;
                    width: 51px;
                    overflow: hidden;
                    display: block;
                    float: left;
                    margin-right: 15px;
                }
                h3 {
                    font-size: 14px;
                    color: #000;
                    padding: 10px 0 5px;
                }
                p {
                    font-size: 12px;
                    color: #666;
                }
            }
        }
    }

    

.news-with .imgs, .news-with .imgs img {
    height: 148px;
    width: 206px;
}
.index-tit {
    text-align: center;
    line-height: 1.2;
    color: #666;
}

</style>
