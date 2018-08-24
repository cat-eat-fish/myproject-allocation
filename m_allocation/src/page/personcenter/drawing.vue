<template>
    <div class="drawing">
        <my-head title="账户提现"></my-head>
        <div class="wrap bg-gray">
            <div class="contract-cont">
                <div class="his-codetitle bg-red clearfix">
                    <div style="text-align:center;padding-top:25px;font-size:40px;color:#fff">
                        <span pvalue="5444.92" id="avoid_money" class="ng-binding ng-isolate-scope money_balance_able">0.00</span>
                    </div>
                    <div style="text-align:center;line-height:50px;color:#fff" class="font-size14">当前余额(元)</div>
                </div>
            </div>
            <div class="common-list">
                <ul class="charge clearfix" style="padding-bottom:15px">
                    <li class="font-gray3">请输入提现金额:</li>
                    <li>
                        <input class="input-white" type="text" id="cash_money" name="cash_money">
                    </li>
                </ul>
            </div>

            <div class="drawing-tips">
                温馨提示：<br>1、工作时间（即工作日的09:00-18:00）提现的，T+1到账；非工作时间提现的，T+2到账。<br>2、提现手续费单笔最少2元，2000以上每笔手续费率为0.1%
            </div>

            <div class="common-list">
                <ul class="charge clearfix">
                    <li class="font-gray3">请输入提现密码：</li>
                    <li>
                        <input class="input-white" type="password" placeholder="请输入提现密码" id="trade_pass" name="trade_pass">
                    </li>
                </ul>
            </div>

            <div class="common-list no-borderbot" style="margin-top:0">
                <ul class="list-haveline charge clearfix">
                    <li class="font-gray3">请选择提现银行：</li>
                </ul>
            </div>

            <div class="common-list mt0 banks" style="border-bottom: 0"></div>

    

    <input type="hidden" id="tkyhk" name="tkyhk">

    <div class="add-card" ng-hide="bankList &amp;&amp; bankList.length>0">
        <router-link to="/personcenter/addbank"><i class="iconfont icon-add"></i>&nbsp;添加银行卡</router-link>
    </div>
    <!-- <div class="drawing-tip">
       <h1 >温馨提示</h1>
       <p>禁止洗钱、信用卡套现、虚假交易等行为，一经发现并确认，将终止该账户的使用。 </p>
     </div>-->
    <div class="cancel-btn">
        <a class="btn-full btn-red" @click="withdrawal">立即提现</a>
    </div>


    <!-- <div class="popup-container ng-isolate-scope  hide" id="secess" style="overflow: hidden; height: 100%;">
        <div class="popup">
            <div class="popup-head ng-binding">提示</div><div class="popup-body ng-binding">您的提现申请已成功，工作时间（即工作日的09:00-18:00）提现的，T+1到账；非工作时间提现的，T+2到账</div>
            <div onclick="location.href='/personcenter/personcenterIndex.html';">
                <input type="button" style="color: #FF8C19;height: 48px;width: 100%;background-color: #fff;font-size: 18px; border: none; border-bottom-left-radius: 5px;border-bottom-right-radius: 5px;" value="确定">
            </div>
        </div>
    </div>

    <div class="popup-container ng-isolate-scope  hide" id="relnameDialog" style="overflow: hidden; height: 100%;">
        <div class="popup">
            <div class="popup-head ng-binding">提示</div><div class="popup-body ng-binding">您还没有进行实名认证，请先完善资料</div>
            <div onclick="location.href='/personcenter/realName.html';">
                <input type="button" style="color: #FF8C19;height: 48px;width: 100%;background-color: #fff;font-size: 18px; border: none; border-bottom-left-radius: 5px;border-bottom-right-radius: 5px;" value="立即认证">
            </div>
        </div>
    </div> -->
    </div>
    </div>
</template>

<script>
import MyHead from "@/components/myhead"
import MyPrompt from "@/components/prompt"
export default {
    components:{
        MyHead,MyPrompt
    },
  name: 'drawing',
  data () {
    return {
        
    }
  },
  methods:{
      withdrawal(){
          console.log(1)
      }
  }
}
</script>

<style scoped lang="scss">
    #app  .recharge .prompt{
            display: none;
        }
        .drawing{
            width: 100%;
            height: 100%;
            background: #f5f5f5;
        }
        .input-white {
            width: 200px;
            height: 40px;
            font-size: 14px;
            line-height: 40px;
            border: 1px solid #FFF;
            padding-left: 10px;
            color: auto;
            border-radius: 0;
            text-align: right;
            padding-right: 10px;
        }
    .recharge{
        margin: 0 auto;
        width: 100%;
        min-width: 320px;
        overflow-x: hidden;
        padding-bottom: 1rem;
        background: #f5f5f5;
        
    }
    .drawing-tips {
        padding-top: 10px;
        padding-bottom: 10px;
        padding-left: 15px;
        font-size: 12px;
        color: #999;
    }
    .bg-red {
        background: #ee3535;
        border-top: 1px solid #f29595;
    }
    .his-codetitle {
        padding: 0 15px;
        color: #333;
        font-size: 12px;
    }
    .common-list {
        background: #FFF;
        margin-top: 5px;
        ul {
            border-bottom: 1px solid #f5f5f5;
            padding-right: 0;
            padding: 0 15px;
            li {
                width: 100%;
                line-height: 40px;
                font-size: 14px;
                input {
                    display: block;
                    width: 100%;
                    text-align: left;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                }
            }
            li:first-child{
                width: 100%;
            }
            li:last-child{
                width: 100%;
            }
        }
    }
    .add-card {
        background: #FFF;
        border-bottom: 1px solid #E5E5E5;
        height: 44px;
        line-height: 44px;
        text-align: center;
        font-size: 14px;
        a {
            color: #FF8C19;
            display: block;
            width: 100%;
            height: 44px;
        }
    }
    .cancel-btn {
        margin-top: 15px;
        bottom: 7rem;
        z-index: 10;
        width: 100%;
        max-width: 640px;
        .btn-full {
            height: 48px;
            line-height: 48px;
            width: 94%;
            color: #FFF;
            font-size: 18px;
            text-decoration: none;
            display: inline-block;
            text-align: center;
            cursor: pointer;
            border: none;
            background: #ee3535;
            display: block;
            margin: 0 auto;
            border-radius: 5px;
        }
    }
</style>
