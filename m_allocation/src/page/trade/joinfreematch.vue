<template>
    <div class="joinfreematch">
        <MyHead title="免费体验"></MyHead>
        <div lazy-show="" class="wrap" >
            <div class="module-noborder">
                <ul class="list-line clearfix border-bottom-grey">
                    <li>风险保证金</li>
                    <li>
                        <span pvalue="100" class="font-red benjin">100</span>
                        <span>元</span>
                    </li>
                </ul>
                <ul class="list-line clearfix">
                    <li>操盘金额<span class="text-tip"></span></li>
                    <li>
                        <span pvalue="2100" class="font-red totalborrow">2000</span>
                        <span>元</span>
                    </li>
                </ul>
            </div>
            <div class="blank-60"></div>
            <div>
                <a class=" btn-full" @click="startstock">立即体验</a>
            </div>
        </div>
        <MyPrompt2 title="提示" content="是否确认申请该合约？为避免因欠费而平仓，请确保账户余额足够支付合约的管理费！" istrue:=""></MyPrompt2>
    </div>
</template>

<script>
import MyHead from "@/components/myhead"
import MyPrompt2 from "@/components/prompt2"
export default {
    components:{
        MyHead,MyPrompt2
    },
  name: 'joinfreematch',
  data () {
    return {

    }
  },
  methods:{
      startstock(){
          let islogin=localStorage.getItem('islogin');
          if(islogin=="true"){
              document.querySelector('.popup-container').style.cssText="display:flex";
          }else{
              this.$router.push('/login');
          }
      }
  }
}
</script>

<style lang="scss">
    #app .trade .joinfreematch #prompt2.popup-container{
        display: none;
    }
    .wrap {
        margin: 0 auto;
        width: 100%;
        min-width: 320px;
        overflow-x: hidden;
        padding-bottom: 1rem;
        background: #f5f5f5;
        .module-noborder ul {
            margin-top: 5px;
            background: #fff;
            padding: 0 15px;
            li {
                height: 44px;
                line-height: 44px;
                font-size: 14px;
            }
            li:first-child {
                width: 25%;
                float: left;
                color: #666;
            }
            li:last-child {
                float: right;
                width: 75%;
                text-align: left;
            }
        }
    }
    .blank-60 {
        height: 25px;
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
