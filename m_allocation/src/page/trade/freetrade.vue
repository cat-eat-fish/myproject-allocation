<template>
    <div class="freetrade">
        <MyHead title="免费体验"></MyHead>
        <div class="free-box" style="padding-bottom:1.2rem;">
      <img src="../../assets/img/free-bg1.jpg">
      
      <div class="img-bg2">
        <div class="word-cont">
          <ul>
              <li>2000元<i style="color:#ee3535">免费</i>体验金</li>
            <li>总计已有<span class="word-number total_avtivity_count">9180</span>人参与</li>
           <!-- <li>今日<span class="word-money totalborrow">0.00</span>元免费操盘资金</li>
            <li>还剩余<span class="word-number leave_activited">0</span>人份</li>-->
          </ul>
        </div>
      </div>
      
      <div class="receive">
        <button class="btn-receive" @click="jump">立即领取<i class="free_borrow">2000</i>元</button>
      </div>
      
      <div class="rule-cont">
      	<h2>活动规则</h2>
        <ul>
          <li>1. 赠送<i class="free_borrow">2000</i>元实盘资金（完全免费）;</li>
          <li>2. 您交<i class="benjin">100</i>元保证金（结束时如无亏损全额返还，如亏损则扣除亏损剩余返还）;</li>
          <li>3. 总共<span class="totalmoney">2100</span>元实盘资金（由您操盘，盈利全归您）;</li>
          <li>4. 盈利归您，亏损自负（无亏损保证金全额退还，如交易账户总资产低于<span class="free_warn">2030</span>元将会自动平仓并终止体验，亏损将从保证金中扣除，超出保证金亏损部分由创盈中心承担）;</li>
          <li>5. 免费操盘资金仅限使用<span class="days">3</span>个交易日，第<span class="days">3</span>个交易日只能委托委托卖出不能委托买入，如第<span class="days">3</span>个交易日未委托委托卖出股票，系统将自动委托委托卖出股票，不保证委托委托卖出价格。</li>
        </ul>
        <span style="padding-right:15px">* 创盈中心拥有本次活动最终解释权</span>
      </div>
     
     
      <div class="about-list">
        <ul>
          <li class="fl img"><img src="../../assets/img/icon-zj.png"></li>
          
          <li class="fr txt">
              <p>资金保障</p>
              <p> 第三方支付机构为平台提供资金委托服务，</p>
              <p> 严格把控，确保用户资金。</p>    
         </li>
        </ul>
        <ul>
          <li class="fr img"><img src="../../assets/img/icon-xx.png"></li>
         
          <li class="fl txt">
              <p>信息保障</p>
              <p>国际领先的系统加密保护技术，</p>
              <p>保障用户的交易信息和资金信息不泄露。</p>  
          </li>
        </ul>
        <ul>
          <li class="fl img"><img src="../../assets/img/icon-xm.png"></li>
          
          <li class="fr txt">
              <p>项目保险</p>
              <p>设立严格的风控制度，从而实现全过程</p>
              <p>资金严控，保证资金安全。</p>
              </li>
        </ul>
      </div>
         <div class="receive" style="background:none;padding:3px 15px">
        <button class="btn-receive" @click="jump">立即领取<i class="free_borrow">2000</i>元</button>
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
  name: 'freetrade',
  data () {
    return {

    }
  },
  methods:{
      jump(){
          this.$router.push('/trade/joinfreematch')
      }
  }
}
</script>

<style scoped lang="scss">

    .free-box {
        width: 100%;
        margin: auto auto;
        font-size: 0;
        overflow-x: hidden;
        background: #f5f5f5;
        img {
            width: 100%;
        }
        .img-bg2 {
            position: relative;
            height: 100px;
            padding-top: 20px;
            background: #fff;
            .word-cont {
                font-size: 14px;
                position: absolute;
                width: 90%;
                left: 5%;
                top: 10px;
                color: #333;
                font-weight: 700;
                padding: 0 20px;
                li {
                    width: 100%;
                    height: 36px;
                    line-height: 36px;
                    border-radius: 5px;
                    text-align: center;
                    font-size: 16px;
                    color: #666;
                    i{
                        font-style: normal;
                    }
                    .word-number {
                        display: inline-block;
                        line-height: 23px;
                        color: #fb4b28;
                        padding: 0 10px;
                        padding: 0 10px;
                        letter-spacing: 5px;
                        font-size: 20px;
                        text-align: center;
                    }
                }
            }
        }
        .receive {
            font-size: 18px;
            text-align: center;
            padding: 10px 15px;
            background: #fff;
            .btn-receive {
                width: 100%;
                height: 40px;
                border-radius: 5px;
                border: none;
                color: #fff;
                background: #e60012;
                font-weight: 700;
                box-shadow: 2px 2px 4px #000;
                i{
                    font-style: normal;
                }
            }
        }
        // 
        .rule-cont {
            background: #fff;
            font-size: 12px;
            padding-top: 20px;
            text-align: right;
            margin-bottom: 6px;
            h2 {
                color: #fd9126;
                font-size: 16px;
                text-align: center;
                font-weight: bold;
            }
            ul {
                border-radius: 3px;
                padding: 10px 15px 5px 15px;
                margin-bottom: 5px;
                li {
                    text-align: left;
                    color: #333;
                    margin-bottom: 10px;
                    i{
                        list-style: none;
                    }
                }
            }
        }
        // 
        .about-list {
            font-size: 12px;
            color: #352400;
            ul {
                padding: 0 15px 0;
                text-align: center;
                background: #fff;
                margin-bottom: 6px;
                overflow: hidden;
                height: 140px;
                .img {
                    width: 21%;
                    padding-top: 35px;
                }
                .txt {
                    width: 79%;
                    padding: 20px 0;
                     p {
                        font-size: 12px;
                    }
                    p:first-child {
                        font-size: 24px;
                        font-weight: bold;
                        color: #ee3535;
                        line-height: 45px;
                    }
                }
            }
        }
    }
</style>
