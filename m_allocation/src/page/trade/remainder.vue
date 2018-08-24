<template>
    <div class="remainder">
        <!-- 顶部 -->
        <div class="top">
            <i @click="goback" class="iconfont icon-icon-arrow-left2"></i>
            <p class="title">余额充值</p>
        </div>
        <!--  -->
        <div lazy-show="" class="wrap">
            <div class="his-codetitle bg-red clearfix">
                <div style="text-align:center;padding-top:25px;font-size:40px;color:#fff">
                    <span style="color:#fff" pvalue="" id="bance_money">0.00</span>
                </div>
                <div style="text-align:center;line-height:50px;color:#fff" class="font-size14">当前余额(元)</div>
            </div>
            <div class="module-spaceleft yue-charge">
                <ul class="list-haveline clearfix">
                    <li>风险保证金</li>
                    <li>
                        <span pvalue="333" class="ng-binding ng-isolate-scope" id="benjin">{{benjin}}</span>
                        <span>元</span>
                    </li>
                </ul>
                <ul class="list-haveline clearfix">
                    <li>预存管理费</li>
                    <li>
                        <span pvalue="3" class="ng-binding ng-isolate-scope" id="manegerfee">{{manegerfee}}</span>
                        <span>元</span>
                    </li>
                </ul>
            </div>
            <div class="pay-money">
                <span class="font-size16 font-gray3 fb">共计应支付：</span>
                <span class="font-size16 font-orange fb ng-binding ng-isolate-scope" pvalue="335.70" id="paytotal">{{paytotal}}</span>
                <br>
                <p style="line-height:50px"> <span class="font-red">*</span> 您预期还将获得 <span class="font-red" id="coups"></span> 积分</p>
            
            </div>
            <div>
                <router-link class="btn-red btn-full" to="/trade/recharge">立即充值</router-link>
            </div>
        </div>


    </div>
</template>

<script>
export default {
  name: 'remainder',
  data () {
    return {
        benjin:'',
        manegerfee:'',
        paytotal:''
    }
  },
  methods:{
      goback(){
          this.$router.go(-1);
      },
  },
  created(){
      this.benjin=this.$route.query.benjin;
      this.manegerfee=this.$route.query.manegerfee;
      this.paytotal=this.$route.query.paytotal;
  }
}
</script>

<style lang="scss">
    .remainder{
        width: 100%;
        height: 100%;
        background: #f2f2f2;
    }
    .remainder .top{
        display: block;
            width: 100%;
            height: 44px;
            line-height: 44px;
            background: red;
            color: #fff;
            i{
                display: inline-block;
                width: 10%;
                text-align: center;
            }
            p{
                display: inline-block;
                width: 80%;
                margin: 0 auto;
                text-align: center;
                font-size: 0.3rem;
            }
    }
    .pay-money {
        text-align: center;
        padding: 20px;
        line-height: 22px;
    }
    .bg-red {
        background: #ee3535;
        border-top: 1px solid #f29595;
    }
    
    .list-haveline li:first-child {
        float: left;
        text-align: left;
    }
    .list-haveline li:last-child {
        float: right;
        text-align: right;
    }
    .yue-charge ul {
        margin-top: 5px;
        background: #fff;
        padding: 0 15px;
        li{
            height: 44px;
            line-height: 44px;
            font-size: 14px;
        }
    }
    .remainder .pay-money{
        background: #f2f2f2;
    }
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
</style>
