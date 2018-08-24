import Vue from 'vue'
import Router from 'vue-router'
import MyMain from '@/page/mymain'                                      //主页
import Register from '@/page/register'                                  //注册
import Login from '@/page/login'                                        //登录
import ForgetPassword from '@/page/forgetpassword'                      //找回密码
import ProtocolTrade from '@/page/protocoltrade'                        //操盘协议
import ProtocolPrivacy from '@/page/protocolprivacy'                    //隐私条款
import NewGuide from '@/page/newguide'                                  //新手指引
import Safety from '@/page/safety'                                      //法律保障 

import Other from '@/page/about/other'                                  //关于
import About from '@/page/about/about'                                  //公司介绍
import ContactUs from '@/page/about/contactus'                          //联系我们
import Market from '@/page/about/market'                                //招商加盟
import AppDown from '@/page/about/appdown'                              //app下载

import Trade from '@/page/trade/trade'                                  //配资
import FeederTrade from '@/page/trade/feedertrade'                      //免费体验
import DayTrade from '@/page/trade/daytrade'                            //按天
import MonthTrade from '@/page/trade/monthtrade'                        //按月

import NewsDefault from "@/page/news/newsdefault"                       //新闻
import Newscj from "@/page/news/newscj"                                 //新闻-财经
import Exercises from "@/page/news/exercises"                           //新闻-牛散
import Dynamic from "@/page/news/dynamic"                               //新闻-动态
import Consultation from "@/page/news/consultation"                     //新闻-咨询
import Problem from "@/page/news/problem"                               //新闻-问题
import NewsPage from "@/page/news/newspage"                             //新闻-详情页

import Member from "@/page/member/member"                             //个人中心
import Assets from "@/page/member/assets"                             //个人中心>账户充值
import Recharge from "@/page/member/recharge"                             //个人中心>账户充值》充值
import Setting from "@/page/member/setting"                             //个人中心》完善资料
import AddBank from "@/page/member/addbank"                             //个人中心》添加银行卡
import Flowing from "@/page/member/flowing"                             //个人中心》资金明细flowing
import Extend from "@/page/member/extend"                             //个人中心》邀请好友 
import ExtenddetailUser from "@/page/member/extenddetailUser"         //个人中心》推广明细  
import Message from "@/page/member/message"                           //个人中心》消息中心
import Drawings from "@/page/member/drawings"                           //个人中心》提现
import Mytrade from "@/page/trade/mytrade"                           //个人中心》我的交易

import No404 from '@/page/404'                                          //404

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    // 主页
    {
      path: '/',
      name: 'mymain',
      component: MyMain
    },
    // 注册
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    // 登录
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    // 找回密码
    {
      path: '/forgetpassword',
      name: 'forgetpassword',
      component: ForgetPassword
    },
    // 操盘协议
    {
      path: '/protocoltrade',
      name: 'protocoltrade',
      component: ProtocolTrade
    },
    // 新手指引
    {
      path: '/newguide',
      name: 'newguide',
      component: NewGuide
    },
    // 隐私条款
    {
      path: '/protocolprivacy',
      name: 'protocolprivacy',
      component: ProtocolPrivacy
    },
    // 法律保障
    {
      path: '/safety',
      name: 'safety',
      component: Safety
    },
    // 关于我们
    {
      path: '/other',
      redirect:'about',
      name: 'other',
      component: Other,
      children:[
        {
          path: 'about',
          name: 'about',
          component: About,
        },
        {
          path: 'contactus',
          name: 'contactus',
          component: ContactUs,
        },
        {
          path: 'market',
          name: 'market',
          component: Market,
        },
      ]
    },
    // APP下载
    {
      path: '/other/appdown',
      name: 'appdown',
      component: AppDown
    },
    {
      path: '/trade',
      redirect:'/trade/daytrade',
      name: 'trade',
      component: Trade,
      children:[
        {
          path: 'daytrade',
          name: 'daytrade',
          component: DayTrade
        },
        {
          path: 'monthtrade',
          name: 'monthtrade',
          component: MonthTrade
        }
      ]
    },
    //免费体验
    {
      path: '/trade/feedertrade',
      name: 'feedertrade',
      component: FeederTrade
    },
    // 新闻
    {
      path: '/news',
      redirect:'/news/newscj',
      name: 'newsdefault',
      component: NewsDefault,
      children:[
        {
          path: 'newscj',
          name: 'newscj',
          component: Newscj,
        },
        {
          path: 'exercises',
          name: 'exercises',
          component: Exercises,
        },
        {
          path: 'dynamic',
          name: 'dynamic',
          component: Dynamic,
        },
        {
          path: 'consultation',
          name: 'consultation',
          component: Consultation,
        },
        {
          path: 'problem',
          name: 'problem',
          component: Problem,
        },
      ]
    },
    //新闻详情页
    {
      path: '/news/newspage/:id',
      name: 'newspage',
      component: NewsPage
    },
    // 个人中心
    {
      path: '/member',
      redirect:'/member/assets',
      name: 'member',
      component: Member,
      children:[
        {
          path: 'assets',
          name: 'assets',
          component: Assets,
        },
        {
          path: 'recharge',
          name: 'recharge',
          component: Recharge,
        },
        {
          path: 'setting',
          name: 'setting',
          component: Setting,
        },
        {
          path: 'addbank',
          name: 'addbank',
          component: AddBank,
        },
        {
          path: 'flowing',
          name: 'flowing',
          component: Flowing,
        },
        {
          path: 'extend',
          name: 'extend',
          component: Extend,
        },
        // 推广明细
        {
          path: 'extenddetailUser',
          name: 'extenddetailUser',
          component: ExtenddetailUser,
        },
        // 消息中心
        {
          path:'message',
          name:'message',
          component:Message
        },
        {
          path:'drawings',
          name:'drawings',
          component:Drawings
        },
      ]
    },
    {
      path: '/member/mytrade',
      name: 'mytrade',
      component: Mytrade
    },
    //404
    {
      path: '*',
      name: 'no404',
      component: No404
    }
  ]
})
