<template>
  <div class="myhead">
      <div class="cf-head-wrap">
        <div class="head-line1 clearfix">
            <div class="warp">
                <div class="fl">欢迎来到创盈中心：0755-28896306&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;服务时间：7x24小时</div>
                <div class="fr">
                    <a  href="javascript:;"   id="show" >
                        关注公众号
                        <img class="wxbox" src="/static/img/thumb_201712141425154357.jpg">
                    </a>
                    <a href="javascript:;"  @click="jump(item)" :id="item.id"  v-for="(item,index) in topnav" :key="index">
                        {{item.text}}
                    </a>
                </div>
            </div>
        </div>
        <div class="head-line2 clearfix">
            <router-link to="/" class="logo">
                <img src="/static/img/logo.png" alt="创盈中心" style="height: 58px;" title="股票操盘平台">
            </router-link>
            <ul class="nav">
                <li v-for="(item,index) in bonav" :key="index">
                    <a @click="jump(item)" href="javascript:;" :class="{colorred:index==2}">{{item.text}}</a>
                </li>
                <li class="user-photo dropdown clearfix">
                    <a href="javascript:;" class="user-center"><i class="icon-wo"></i>&nbsp;个人中心&nbsp;<i class="icon-moreunfold"></i></a>
                    <ul class="niu-dropdown-menu">
                        <li v-for="(item,index) in personnav" :key="index">
                            <a href="javascript:;" @click="jump(item)">
                                <i :class="item.icon"></i>
                                {{item.text}}
                            </a>
                        </li>
                        <li class="JSsignin" id="JS-login2"><router-link to="/login" rel="nofollow"><i class="iconfont icon-tubiao211"></i><span class="color-orange fb JSsignin pr10">登录</span></router-link></li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'myhead',
  data () {
    return {
        topnav:[
            {id:0,thisid:'app',text:'APP下载',href:'/other/appdown'},
            {id:1,thisid:'JS-login1',text:'登录',href:'/login'},
            {id:2,thisid:'JS-free-register1',text:'免费注册',href:'/register'},
            {id:3,thisid:'ystk',text:'隐私条款',href:'/protocolprivacy'},
        ],
        bonav:[
            {id:0,thisid:'JS-head',text:'首页',href:'/',},
            {id:1,thisid:'A2',text:'关于我们',href:'/other/about',},
            {id:2,thisid:'JS-free-practice',text:'免费体验',href:'/trade/feedertrade',},
            {id:3,thisid:'JS-stock-capital',text:'股票操盘',href:'/trade/daytrade',},
            {id:4,thisid:'A7',text:'新手指引',href:'/newguide',},
        ],
        personnav:[
            {id:0,icon:'iconfont icon-mokuai',text:'账户充值',href:'/member/assets',},
            {id:1,icon:'iconfont icon-mokuai',text:'申请操盘',href:'/trade/daytrade',},
            {id:2,icon:'iconfont icon-fenxi2',text:'交易股票',href:'/member/mytrade',},
            {id:3,icon:'iconfont icon-shezhi',text:'完善资料',href:'/member/setting',},
            {id:4,icon:'iconfont icon-shuoming',text:'资金明细',href:'/member/flowing',},
            {id:5,icon:'iconfont icon-yaoqingchengyuan',text:'邀请好友',href:'/member/extend',},
            {id:6,icon:'iconfont icon-xiaoxi',text:'消息中心',href:'/member/message',},
        ]
    }
  },
  methods:{
      jump(item){
          this.$router.push({path:item.href});
      },

  }
}
</script>

<style scoped lang="scss">
    //顶部 
    .cf-head-wrap {
        position: fixed;
        z-index: 100;
        background: #fff;
        top: 0;
        left: 0;
        width: 100%;
        box-shadow: 1px 1px 1px 1px #F7F7F7;
        // 顶部上
        .head-line1 {
            height: 42px;
            line-height: 42px;
            margin: 0 auto;
            text-align: center;
            background: #cd3733;
            color: #fff;
            #show{
                position: relative;
            }
            #show:hover .wxbox{
                display: block;
            }
            .wxbox {
                width: 100px;
                height: 100px;
                position: absolute;
                border: 1px solid #ccc;
                left: -100px;
                top: 15px;
                display: none;
                z-index: 100;
            }
            .warp{
                display: flex;
                justify-content: space-between;
            }
            // 左侧
            .fl {
                
            }
            // 右侧
            .fr {
                display: flex;
                justify-content: space-between;
                a {
                    padding: 0 10px;
                    font-size: 16px;
                    color: #fff;
                }
                a:hover{
                    text-decoration: underline;
                }
            }
        }
        // 顶部下
        .head-line2 {
            position: relative;
            background: #fff;
            width: 1180px;
            margin: 0 auto;
            height: 76px;
            display: flex;
            justify-content: space-between;
            // logo
            .logo {
                float: left;
                height: 57px;
                margin: 10px 0;
            }
            // 右侧导航
            .nav {
                display: flex;
                justify-content: space-between;
                li {
                    position: relative;
                    .colorred {
                        color: red;
                    }
                    a {
                        display: block;
                        height: 100%;
                        padding: 0 10px;
                        text-align: center;
                        color: #666;
                        font-size: 16px;
                        line-height: 76px;
                        width: 100%;
                        border-bottom: 2px solid transparent;
                    }
                    a:hover{
                        border-color: red; 
                    }
                }
                li.user-photo .user-center {
                    width: 100%;
                    height: 40px;
                    line-height: 40px;
                    margin: 18px 0;
                    border: 1px solid #5196B9;
                    border-radius: 10px;
                    color: #317FAC;
                }
                li.user-photo:hover .niu-dropdown-menu{
                    display: block;
                    z-index: 10;
                    height: 382px;
                    -webkit-background-clip: padding-box;
                    -webkit-box-shadow: 0 6px 12px rgba(0,0,0,.175);
                    box-shadow: 0 6px 12px rgba(0,0,0,.175);
                }
                .niu-dropdown-menu {
                    position: absolute;
                    top: 65px;
                    right: 0;
                    display: none;
                    float: left;
                    width: 200px;
                    text-align: left;
                    -webkit-transform-origin: left top;
                    -moz-transform-origin: left top;
                    -ms-transform-origin: left top;
                    transform-origin: left top;
                    color: #555964;
                    padding: 20px 10px 10px;
                    background: #fff;
                    transition: all 0.5s;
                    li {
                        height: 44px;
                        width: 100%;
                        float: left;
                        position: relative;
                        a:hover i{
                            color: #fff;
                        }
                        a:hover{
                            background: rgb(49, 127, 172);
                            border: none;
                            color: #fff;
                        }
                        a {
                            width: 100%;
                            height: 44px;
                            line-height: 44px;
                            font-size: 14px;
                            text-align: left;
                            padding: 0;
                            color: #666;
                            display: block;
                            i {
                                color: #317FAC;
                                margin-left: 20px;
                                margin-right: 10px;
                                font-size: 18px;
                            }
                        }
                    }
                }
            }
        }
    }
    .warp {
        width: 1180px;
        margin: 0 auto;
        text-align: left;
    }
</style>
