<template>
    <div class="recharge">
        <my-head title="账户充值"></my-head>
        <div class="contract-cont">
                <div class="his-codetitle bg-red clearfix">
                    <div style="text-align:center;padding-top:25px;font-size:40px;color:#fff">
                        <span pvalue="5444.92" class="ng-binding ng-isolate-scope money_balance_able">0</span>
                    </div>
                    <div style="text-align:center;line-height:50px;color:#fff" class="font-size14">账户余额(元)</div>
                </div>
                <div style="margin: 10px 10px 10px 10px; font-size: 16px;">
                    <p style="font-size:12px;line-height:20px"> 温馨提示：<br>1、<span style="color: red;">充值金额最好有些零头（如1000.85），</span>这样我们好确认是您的汇款！<br>2、如若认证支付失败，请到电脑打开官网http://www.jc1788.com充值。</p>
                </div>
            </div>
            <div class="common-list">
                <ul class="charge clearfix">
                    <li class="font-gray3">请输入充值金额:</li>
                    <li>
                        <input class="input-white" type="text" placeholder="最少充值1元" id="paymoney">
                    </li>
                </ul>
            </div>

            <!-- 充值 -->
            <div class="common-list mt0">
                <div class="title-graybg" style="background:#fff">选择支付方式</div>
                <!-- 支付宝扫码支付 -->
                <ul class="list-haveline  clearfix pay_list"  v-for="(item,index) in lis" :key="index" >
                    <li class="font-gray3">
                        <div class="bank-img">
                            <img width="32" :src="item.src">
                        </div>
                        <div class="fl text-little">
                            {{item.text}}
                        </div>
                    </li>
                    <li >
                        <i class="font-red iconfont icon-xuanze" v-if="index==0" @click="addbank"></i>
                        <i class="font-red iconfont icon-xuanze" v-if="index==1" @click="alipay"></i>
                        <i v-else-if="index==2" class="font-red iconfont icon-xuanze"></i>
                    </li>
                </ul>
            </div>
            <!-- addbank -->
            <div id="kjzf" style="">
                <div class="title-graybg"></div>
                <div class="common-list mt0" style="text-align: center;margin: 0 auto;padding-bottom: 150px;">
                    <ul class="list-haveline clearfix" id="apiAuth" >
                        <li class="font-gray3">银行卡预留手机号：</li>
                        <li>
                            <input type="text" class="input-white" placeholder="" style="border-color:#fff;" id="bankPhone">
                        </li>
                    </ul>
                    <ul class="list-haveline clearfix">
                        <li class="font-gray3">真实姓名</li>
                        <li id="nametrue"></li>
                    </ul>
                    <ul class="list-haveline clearfix">
                        <li class="font-gray3">身份证号</li>
                        <li id="idno"></li>
                    </ul>
                    <div class="font-gray3" style="text-align: left; font-size: 14px;padding-left:15px;line-height:40px">银行卡号</div>
                    <ul class="list-haveline  clearfix mybanklist"></ul>
                </div>
                <div class="cancel-btn">
                    <a class="btn-full btn-red " id="rzpay" style="" @click="pay" ng-show="payType==1">立即支付</a>
                    <a class="btn-full btn-red " id="twostep" style="display: none;"  ng-show="payType==1">已支付</a>
                </div>
            </div>

            <MyPrompt title="温馨提示" content="您还没有绑定银行卡，请先绑定银行"  istrue="/personcenter/addbank"></MyPrompt>
    </div>
</template>

<script>
import MyHead from "@/components/myhead"
import MyPrompt from "@/components/prompt"
export default {
    components:{
        MyHead,MyPrompt
    },
  name: 'recharge',
  data () {
    return {
        lis:[
            {id:0,text:'认证支付通道二',href:'',src: require('../../assets/img/icon-kjzf.png')},
            {id:1,text:'支付宝支付',href:'',src: require('../../assets/img/alipay.png')},
            {id:2,text:'银行支付',href:'',src: require('../../assets/img/yhk_icon.png')},
        ]
    }
  },
  methods:{
      addbank(e){
          e.target.setAttribute("class", "font-red iconfont icon-gou")
          document.querySelector('.prompt').style.cssText="display:block";
          document.querySelector('#kjzf').style.cssText="display:block";
      },
      pay(){
        //   做表单验证
      },
      alipay(e){
          e.target.setAttribute("class", "font-red iconfont icon-gou");
          this.$router.push('/personcenter/alipay')
      }
  }
}
</script>

<style scoped lang="scss">
    #app  .recharge .prompt{
            display: none;
        }
    .recharge{
        margin: 0 auto;
        width: 100%;
        min-width: 320px;
        overflow-x: hidden;
        padding-bottom: 1rem;
        background: #f5f5f5;
        
    }
    .bg-red {
        background: #ee3535;
        border-top: 1px solid #f29595;
    } 
    .common-list {
        background: #FFF;
        margin-top: 5px;
        ul{
            padding-right: 0;
            padding: 0 15px;
            li {
                line-height: 40px;
                font-size: 14px;
                input {
                    height: 40px;
                    font-size: 14px;
                    line-height: 40px;
                    padding-left: 10px;
                    padding-right: 10px;
                    display: block;
                    width: 100%;
                    text-align: left;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                }
            }
        }
        ul:last-child {
            border-bottom: 0;
        }
    }

    // 
    .common-list {
        background: #FFF;
        ul {
            border-bottom: 1px solid #f5f5f5;
            padding-right: 0;
            padding: 0 15px;
        }
    }
    .list-haveline li:first-child {
        float: left;
    }
    .list-haveline li:last-child {
        float: right;
    }
    .list-haveline li {
        height: 44px;
        line-height: 44px;
        font-size: 14px;
    }
    .bank-img {
        float: left;
        margin-top: 0px;
        margin-right: 15px;
    }
    .title-graybg {
        background: #fff;
        height: 38px;
        color: #666;
        font-weight: 700;
        font-size: 12px;
        padding-left: 15px;
        line-height: 38px;
    }
    // addbank
    #kjzf{
        display: none;
    }
    .title-graybg {
        background: #F2F2F2;
        height: 38px;
        color: #666;
        font-weight: 700;
        font-size: 12px;
        padding-left: 15px;
        line-height: 38px;
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
