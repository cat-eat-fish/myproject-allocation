<template>
    <div class="alipay">
        <my-head title="账户充值"></my-head>
            <div class="alipaytop">支付宝充值</div>
            <section id="content" style="margin-bottom: 1.2rem;">
                <div class="pay-mode mt10">
                <div class="mui-input-row pay-mode-input" style="text-align:center;">
                    <table class="table" cellpadding="0" cellspacing="0" style="margin:0 auto;">
                        <tbody>
                            <tr>
                                <td>
                                    <div>
                                        <div >
                                            <a v-for="(item,index) in lis.slice(0,3)" :key="index" href="javascript:;" @click='changemoney(item)'>
                                                <div :class="{geziShow:item.id==alipayactive}" class="jiugongge">
                                                    {{item.text}}元
                                                </div>
                                            </a>
                                            <div style="clear:both;"></div>
                                        </div>
                                        <div >
                                            <a v-for="(item,index) in lis.slice(3,6)" :key="index" href="javascript:;" @click='changemoney(item)'>
                                                <div :class="{geziShow:item.id==alipayactive}" class="jiugongge">
                                                    {{item.text}}元
                                                </div>
                                            </a>
                                            <div style="clear:both;"></div>
                                        </div>
                                        <div >
                                            <a v-for="(item,index) in lis.slice(6,9)" :key="index" href="javascript:;" @click='changemoney(item)'>
                                                <div :class="{geziShow:item.id==alipayactive}" class="jiugongge">
                                                    {{item.text}}元
                                                </div>
                                            </a>
                                            <div style="clear:both;"></div>
                                        </div>
                                        
                                        <div style="clear:both;"></div>
                                    </div>
                                </td>
                            </tr>
                            <tr v-show="!isshow">
                                <td>
                                    <div>
                                        支付请求中...
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="qu">
                                    <div style="margin-top:15px;margin-left:10px;margin-right:10px;">
                                        <a id="qrpay_btn" style="display: block;" href="javascript:;" class="qrpay_btn mui-btn mui-btn-yellow mui-btn-block my-btn-block">去支付</a>
                                        <div id="qrHtml" style="height: 420px;"><div style="clear:both;width:200px;font-size:14px;border-radius:3px;color:#808080;" id="qrpay_all">
                                            <div style="width:200px;height:200px;text-align:center;">
                                                <input id="qrpay_address" value="HTTPS://QR.ALIPAY.COM/FKX020859LCYV19AA3KK1A" type="hidden">
                                                <div style="margin-top:15px;">
                                                    <div style="float:left;">
                                                        <span style="background-color: #03a9f4;font-size:12px;border-radius:3px;padding:.2em .6em .3em;color: #fff;text-align: center;white-space: nowrap;vertical-align: baseline;">支付宝</span>
                                                    </div>
                                                    <div style="float:right;">
                                                        <span style="color:#1ab394;">10000 元</span>
                                                    </div>
                                                    <div style="clear:both;"></div>
                                                </div>
                                                <div style="margin-top:10px;font-size:12px;text-align:left;">订单号 2971_180822104643768</div>
                                                <div style="margin-top:10px;font-size:12px;text-align:left;" id="timeout">
                                                    <span style="font-size:12px;">剩余有效支付时间：
                                                        <span style="color:#1ab394;font-size:16px;"> 204 秒</span>
                                                    </span>
                                                </div>
                                                <div style="margin-top:10px;font-size:12px;text-align:left;" id="out_trade_no_success"></div>
                                                <div style="margin-top:20px;font-size:12px;text-align:left;">
                                                    <span style="color:red;">注意</span>：请勿超时完成支付，请勿保存二维码，
                                                    <a target="_blank" style="color:#03a9f4;" href="https://cloud.ziniusoft.com/Assist/Home/QRPayHelp">遇到问题?</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div></div>
                                        <div id="qrpayTimeout"></div>
                                    </div>
                                    </div>
                                </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                </div>
            </section>
    </div>
</template>

<script>
import MyHead from "@/components/myhead"
export default {
    components:{
        MyHead
    },
  name: 'alipay',
  data () {
    return {
        alipayactive:null,
        isshow:true,
        lis:[
            {id:0,text:'1',},
            {id:1,text:'200',},
            {id:2,text:'1000',},
            {id:3,text:'3000',},
            {id:4,text:'5000',},
            {id:5,text:'10000',},
            {id:6,text:'200000',},
            {id:7,text:'300000',},
            {id:8,text:'500000',},
        ]
    }
  },
  methods:{
      changemoney(item){
          this.alipayactive=item.id;
          this.isshow=false;
          document.querySelector('.qu').style.cssText="display:block";
          this.isshow=true;
      }
  }
}
</script>

<style scoped lang="scss">
    .alipay{
        width: 100%;
        background: #f5f5f5;
    }
    .alipaytop{
        height:30px;
        line-height:30px;
        color:#ff7814;
        font-size:16px;
        background-color:#fff;
        text-align:center;
    }
    .mt10 {
        margin-top: 10px;
    }
    .mui-input-row {
        position: relative;
        background: #fff;
        clear: left;
        overflow: hidden;
    }
    .jiugongge {
        width: 80px;
        height: 80px;
        text-align: center;
        line-height: 80px;
        font-size: 14px;
        color: #808080;
        border: 1px solid #ddd;
        margin-left: 10px;
        margin-right: 10px;
        margin-bottom: 10px;
        margin-top: 10px;
        float: left;
        border-radius: 4px;
        font-weight: 400;
    }
    .geziShow {
        background-color: #03a9f4;
        color: #fff;
        font-weight: bold;
    }
    .mui-btn-yellow {
        color: #fff;
        border: 1px solid #ff7814;
        background-color: #ff7814;
        width: 100%;
        padding: 10px 0;
        font-size: 16px;
        margin-bottom: 10px;
    }
    .qu{
        display: none;
    }
</style>
