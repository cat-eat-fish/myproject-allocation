import Vue from 'vue'
import Router from 'vue-router'



import CeShi from '@/page/ceshi'                                    //测试




import MyMain from '@/page/mymain'

import Login from '@/page/login'                                    //登录
import Register from '@/page/register'                              //注册
import ForGetPassword from '@/page/forgetpassword'                  //找回密码

import Trade from '@/page/trade/trade'                              
import Tradet from '@/page/trade/tradet'
import DayTrade from '@/page/trade/daytrade'                        //按天配资
import MyTrade from '@/page/trade/mytrade'                          //我的操盘
import FreeTrade from '@/page/trade/freetrade'                      //免费体验
import JoinFreeMatch from '@/page/trade/joinfreematch'                      //加入免费
import MonthTrade from '@/page/trade/monthtrade'                    //按月配资
import Remainder from '@/page/trade/remainder'                      //余额充值
import Recharge from '@/page/trade/recharge'                        //账户充值

import MyNews from '@/page/news/news'                                 //新闻
import News from '@/page/news/mynews'                                 //新闻
import NewsDetails  from '@/page/news/newsdetails'                    //新闻详情页

import Protocol from '@/page/protocol/protocol'                         //协议
import ProtocolTrade from '@/page/protocol/protocoltrade'               //操盘协议
import Zcxy from '@/page/protocol/zcxy'                                 //注册协议
import Hgtzrsm from '@/page/protocol/hgtzrsm'                           //合格投资人声明
import Fxxys from '@/page/protocol/fxxys'                               //风险协议书

import Personcenter from '@/page/personcenter/personcenter'             //
import AddBank from '@/page/personcenter/addbank'                       //绑定银行卡
import Personcenterindex from '@/page/personcenter/personcenterindex'   //个人中心首页
import Alipay from '@/page/personcenter/alipay'   //支付宝支付
import Ddrawing from '@/page/personcenter/drawing'                      //账户提现
import PersoncenterSet  from '@/page/personcenter/personcenterset'      //个人资料
import SetPassWord from '@/page/personcenter/setpassword'               //设置交易密码
import FundDetail from '@/page/personcenter/funddetail'                 //资金明细
import StockPool from '@/page/personcenter/stockpool'                   //自选股票

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    // 首页
    {
      path: '/',
      name: 'mymain',
      component: MyMain
    },
    // 测试
    {
      path: '/ceshi',
      name: 'ceshi',
      component: CeShi
    },
    // 登录
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    // 注册
    {
      path: '/register',
      name: 'register',
      component: Register
    },
     // 找回密码
    {
      path: '/forgetpassword',
      name: 'forgetpassword',
      component: ForGetPassword
    },
    {
      path: '/trade',
      redirect:'/trade/daytrade',
      name: 'trade',
      component: Trade,
      children:[
        // {
        //   path: '',
        //   name: 'daytrade',
        //   component: DayTrade,
        // },
        
        {
          path: 'remainder',
          name: 'remainder',
          component: Remainder,
        },
        {
          path: 'mytrade',
          name: 'rmytrade',
          component: MyTrade,
        },
        // 免费体验
        {
          path: 'freetrade',
          name: 'freetrade',
          component: FreeTrade,
        },
        // 加入免费
        {
          path: 'joinfreematch',
          name: 'joinfreematch',
          component: JoinFreeMatch,
        },
        {
          path: 'recharge',
          name: 'recharge',
          component: Recharge,
        },
        {
          path: '',
          redirect:'/trade/daytrade',
          name: 'tradet',
          component: Tradet,
          children:[
            {
              path: 'daytrade',
              name: 'daytrade',
              component: DayTrade,
            },
            {
              path: 'monthtrade',
              name: 'monthtrade',
              component: MonthTrade,
            },
          ]
        },
      ]
    },

    // 新闻
    {
      path: '/news',
      redirect:'/news/news',
      name: 'mynews',
      component: MyNews,
      children:[
        {
          path: 'news',
          name: 'news',
          component: News,
        },
        {
          path: 'newsdetails',
          name: 'newsdetails',
          component: NewsDetails,
        }
      ]
    },

    // 协议
    {
      path: '/protocol',
      redirect:'/protocol/protocoltrade',
      name: 'protocol',
      component: Protocol,
      children:[
        {
          path: 'protocoltrade',
          name: 'protocoltrade',
          component: ProtocolTrade,
        },
        {
          path: 'zcxy',
          name: 'zcxy',
          component: Zcxy,
        },
        {
          path: 'hgtzrsm',
          name: 'hgtzrsm',
          component: Hgtzrsm,
        },
        {
          path: 'fxxys',
          name: 'fxxys',
          component: Fxxys,
        },
      ]
    },


    // 个人中心
    {
      path: '/personcenter',
      redirect:'/personcenter/personcenterindex',
      name: 'personcenter',
      component: Personcenter,
      children:[
        {
          path: 'personcenterindex',
          name: 'personcenterindex',
          component: Personcenterindex,
        },
        // 绑定银行卡
        {
          path: 'addbank',
          name: 'addbank',
          component: AddBank,
        },
        // 支付宝支付
        {
          path: 'alipay',
          name: 'alipay',
          component: Alipay,
        },
        // 设置交易密码
        {
          path: 'setpassword',
          name: 'setpassword',
          component: SetPassWord,
        },
        // 账户充值
        {
          path: 'pay',
          name: 'pay',
          component: Recharge,
        },
        // 账户提现
        {
          path: 'drawing',
          name: 'drawing',
          component: Ddrawing,
        },
        // 资金明细
        {
          path: 'funddetail',
          name: 'funddetail',
          component: FundDetail,
        },
        // 自选股票
        {
          path: 'stockpool',
          name: 'stockpool',
          component:StockPool,
        },
        {
          path: 'personalset',
          name: 'personalset',
          component: PersoncenterSet,
        },
      ]
    },
  ]
})
