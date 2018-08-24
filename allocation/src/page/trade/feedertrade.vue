<template>
  <div class="feedertrade">
      <!-- 头部 -->
      <MyHead></MyHead>

            <div class="bg-banner"></div>
            <div class="free-bg">
                <div class="bg01">
                    <ul>
                        <li class="bg_yel"><span class="word1">总计已有</span><span class="wordred count_activited"><i>9</i><i>1</i><i>7</i><i>1</i></span><span class="word3">人参与</span></li>
                        <li class="pd">今日&nbsp;<span class="color-rede1 totalborrow ">2000</span>元免费操盘资金</li>
                        <li class="bg_yel"><span class="word1">还剩余</span><span class="wordred leave_activited"><i>1</i><i>9</i><i>6</i><i>2</i><i>9</i></span><span class="word3">人份</span></li>
                    </ul>
                    <input type="hidden" id="avtivityedcount" value="371">
                    
                </div>
                <div class="bg02"><a class="menu-receive" onclick="startstockfree()">立即领取<i class="free_borrow">2000</i>元</a></div>
                <div class="bg03">
                    <h1>活动规则</h1>
                    <ul>
                        <li>1. 赠送 <i class="free_borrow">2000</i>元实盘资金（完全免费）;</li>
                        <li>2. 您交<i class="benjin">100</i>元保证金（结束时如无亏损全额返还，如亏损则扣除亏损剩余返还）;</li>
                        <li>3. 总共 <span class="totalmoney">2100</span>元实盘资金（由您操盘，盈利全归您）;</li>
                        <li>4. 盈利全归您<span id="profit_distribution" style="display: none;">10</span>，亏损自负（无亏损保证金全额退还，如交易账户总资产低于<span class="openline">2030.00</span>元将会自动平仓并终止体验，亏损将从保证金中扣除，超出保证金亏损部分由创盈中心承担）;</li>
                        <li>5. 免费操盘资金仅限使用 <span class="days">3</span>个交易日，第<span class="days">3</span>个交易日只能委托卖出不能委托买入，如第<span class="days">3</span>个交易日未委托卖出股票，系统将在14:30后执行自动委托卖出指令，不保证委托卖出价格。</li>
                    </ul>
                    <div class="bg3-cont">
                        <div class="right">*创盈中心拥有本次活动最终解释权</div>
                        <div class="gifts">完成免费炒股 更有豪礼相送</div>
                    </div>
                </div>
                <div class="bg04">
                    <a class="menu-receive">
                        <div class="sp1">创盈中心</div>
                        <div class="sp2">券商</div>
                    </a>
                </div>
                <div class="bg05">
                    <h1>细数券商三宗罪</h1>
                    <div class="sin clearfix">
                        <ul class="sin1">
                            <li class="c_red">宗罪2：</li>
                            <li class="word-blue">风险控制差</li>
                            <li><span>一不小心就被套</span></li>
                        </ul>
                        <ul class="sin2">
                            <li class="c_red">宗罪1：</li>
                            <li class="word-blue">开户速度慢</li>
                            <li><span>开户流程繁琐<br>
                                线下排队挤破头</span></li>
                        </ul>
                        <ul class="sin3">
                            <li class="c_red">宗罪3：</li>
                            <li class="word-blue">客服不尽心</li>
                            <li><span>客服电话难接通<br>
                                处理问题效率低下</span></li>
                        </ul>
                    </div>
                </div>
                <div class="bg06"><a class="menu-receive" onclick="startstockfree()">立即领取<i class="free_borrow">2000</i>元</a></div>
                <div class="bg07">
                    <div class="bg07-cont">
                        <ul class="left-cont">
                            <li>30秒</li>
                            <li>股票上涨10% 利润可达90%</li>
                            <li>分级止损预警</li>
                            <li>人工止损预警</li>
                        </ul>
                        <ul class="right-cont">
                            <li>24小时</li>
                            <li>股票上涨10% 利润可达10%</li>
                            <li>无</li>
                            <li>无</li>
                        </ul>
                        <div class="bg07-word">创盈中心速度快 利润高 风险控制更权威！</div>
                    </div>
                </div>
            </div>
            <div class="company-intro">
                <div class="company-box clearfix">
                    <ul>
                        <li>
                            <img src="/static/img/icon-zj.png"></li>
                        <li>资金保障</li>
                        <li class="last-line">第三方支付机构为平台提供资金委托服务，严格把控，确保用户资金安全。</li>
                    </ul>
                    <ul>
                        <li>
                            <img src="/static/img/icon-xx.png"></li>
                        <li>信息保障</li>
                        <li class="last-line">国际领先的系统加密保护技术，保障用户的交易信息和资金信息不泄露。</li>
                    </ul>
                    <ul>
                        <li>
                            <img src="/static/img/icon-xm.png"></li>
                        <li>项目保险</li>
                        <li class="last-line">设立严格的风控制度，从而实现全过程资金严控，保证资金安全。</li>
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
export default {
  components: {
    MyHead,MyFoot,Sidebar
  },
  name: 'feedertrade',
  data () {
    return {
        
    }
  },
  methods:{
      
  },
  created(){

  },
  mounted(){

  }
}
</script>

<style scoped lang="scss">
    .bg02, .bg03, .menu-receive {
        text-align: center;
    }
    .bg02 a, .bg03 ul {
        margin: 0 auto;
    }
    .bg-banner {
        margin-top: 120px;
        background: url(/static/img/banner-feeder.jpg) center top no-repeat;
        height: 527px;
    }
    .menu-receive {
        display: block;
        width: 440px;
        height: 60px;
        line-height: 60px;
        font-size: 30px;
        color: #fff;
        background: #eb3534;
        margin: 0 auto;
        cursor: pointer;
    }
    .free-bg {
        background: url(/static/img/feeder_bg.jpg) repeat;
        padding: 100px 0 70px;
        .bg01 ul li .word1, .bg01 ul li .wordred {
            text-align: right;
            display: inline-block;
            float: left;
        }
        .bg01 {
            height: 435px;
            text-align: center;
            background: #fff;
            border: 5px solid #d65a5a;
            width: 900px;
            margin: 0 auto;
            border-radius: 20px;
            ul {
                padding-top: 70px;
                font-size: 30px;
                color: #54411c;
                width: 568px;
                margin: 0 auto;
                font-weight: 700;
                li {
                    height: 60px;
                    line-height: 60px;
                    font-size: 20px;
                    .word1 {
                        width: 170px;
                    }
                    .word3 {
                        float: left;
                        display: inline-block;
                    }
                    .wordred {
                        color: #e11010;
                        font-size: 44px;
                        i {
                            width: 34px;
                            height: 54px;
                            border: 3px solid #f39800;
                            display: block;
                            float: left;
                            background: #fff;
                            line-height: 54px;
                            margin: 0 10px;
                            text-align: center;
                            font-style: normal;
                        }
                    }
                }
                .bg_yel {
                    background: #ffd6a5;
                }
                li.pd {
                    padding: 60px 0;
                }
            }
        }
        .bg02 {
            padding: 70px 0;
            .menu-receive {
                margin: 0 auto;
                cursor: pointer;
                display: block;
                width: 440px;
                height: 60px;
                line-height: 60px;
                font-size: 30px;
                color: #fff;
                background: #eb3534;
                margin: 0 auto;
                i {
                    font-style: normal;
                }
            }
        }
        .bg03 {
            height: 435px;
            background: #fff;
            border: 5px solid #d65a5a;
            width: 900px;
            margin: 0 auto;
            border-radius: 20px;
            h1 {
                font-size: 30px;
                padding-top: 30px;
                color: #11a6eb;
            }
            ul {
                width: 702px;
                text-align: left;
                padding: 45px 10px 0;
                li {
                    line-height: 30px;
                    font-size: 14px;
                    color: #402e0c;
                }
            }
            .bg3-cont {
                width: 725px;
                margin: 0 auto;
                .right {
                    text-align: right;
                    color: #666666;
                    font-size: 12px;
                    padding-top: 10px;
                }
                .gifts {
                    color: #ff0000;
                    font-size: 30px;
                    padding-top: 35px;
                    font-weight: bold;
                }
            }
        }
        .bg04 {
            padding: 70px 0;
            .menu-receive {
                display: block;
                width: 440px;
                height: 60px;
                line-height: 60px;
                font-size: 30px;
                color: #fff;
                position: relative;
                background: url(/static/img/vs.png) center no-repeat #eb3534;
                margin: 0 auto;
                .sp1,.sp2 {
                    position: absolute;
                    left: 50px;
                }
                .sp2 {
                    left: auto;
                    right: 50px;
                }
            }
        }
        .bg05 {
            height: 435px;
            background: #fff;
            border: 5px solid #d65a5a;
            width: 900px;
            margin: 0 auto;
            border-radius: 20px;
            h1 {
                font-size: 30px;
                color: #ff0000;
                padding: 30px 0;
                text-align: center;
            }
            .sin {
                width: 852px;
                margin: 0 auto;
                text-align: left;
                color: #4e380e;
                font-size: 16px;
                background: url(/static/img/bg05.png) center top no-repeat;
                height: 320px;
                .c_red {
                    color: #ff0100;
                    font-size: 20px;
                }
                li.word-blue {
                    color: #24a8ea;
                    font-size: 25px;
                    padding-bottom: 5px;
                }
                li {
                    margin-bottom: 5px;
                    line-height: 25px;
                    font-size: 18px;
                }
                .c_red {
                    color: #ff0100;
                    font-size: 20px;
                }
                ul.sin1 {
                    margin-left: 510px;
                    margin-top: 10px;
                }
                ul.sin2 {
                    float: left;
                    margin-left: 20px;
                    margin-top: 80px;
                    text-align: right;
                    width: 155px;
                }
                ul.sin3 {
                    float: left;
                    margin-left: 495px;
                    margin-top: 80px;
                    width: auto;
                }
            }
        }
        .bg06 {
            padding: 70px 0;
        }
        .bg07 {
            height: 435px;
            background: #fff;
            border: 5px solid #d65a5a;
            width: 900px;
            margin: 0 auto;
            border-radius: 20px;
            .bg07-cont {
                width: 910px;
                margin: 0 auto;
                text-align: left;
                background: url(/static/img/bg07.jpg) center top no-repeat;
                padding-top: 150px;
                .left-cont {
                    float: left;
                    width: 396px;
                    text-align: right;
                    padding-right: 10px;
                }
                .right-cont {
                    text-align: left;
                    margin-left: 520px;
                }
                .left-cont li,.right-cont li {
                    line-height: 47px;
                    font-size: 16px;
                    color: #352400;
                    font-weight: 700;
                }
                .bg07-word {
                    clear: both;
                    font-size: 30px;
                    font-weight: 700;
                    padding-top: 40px;
                    text-align: center;
                    color: #ff0000;
                }
            }
        }
    }
    .company-intro {
        background: #7e6b5a;
        padding: 50px 0 30px;
        height: 259px;
        .company-box {
            width: 1000px;
            margin: 0 auto;
            ul {
                text-align: center;
                width: 270px;
                height: 179px;
                float: left;
                margin: 0 30px;
                li {
                    padding-bottom: 20px;
                    color: #fff;
                    font-size: 24px;
                    font-weight: 700;
                }
                li.last-line {
                    font-weight: 400;
                    font-size: 14px;
                    line-height: 22px;
                    text-align: left;
                }
            }
        }
    }
</style>
