<template>
  <div class="assets">
      <div class="person-content">
                    <Me></Me>
 
                    <div class="account">
                        <table width="100%">
                            <tbody><tr class="header">
                                <td width="25%" style="font-size:16px;color:#666" class="font-bold">我的资产</td>
                                <td width="25%"></td>
                                <td width="25%" style="color:#666">可用资金</td>
                                <td width="25%" style="color:#666">冻结资金</td>
                            </tr>
                            <tr class="line">
                                <td style="font-size:28px;color:#333" class="font-bold">0.00</td>
                                <td width="25%"></td>
                                <td style="color:#333" class="font-bold"> 0.00</td>
                                <td style="color:#333" class="font-bold">0.00</td>
                            </tr>
                            <tr class="jifen">
                                <td colspan="1">积分：<span class="font-bold">300</span></td>
                           
                            </tr>
                            <tr>
                                <td style="height:35px"></td>
                            </tr>
                            <tr class="chart">
                                <td>
                                    <div id="stockAsset">
                                        <div class="a1">
                                            <div class="a2">
                                                0.00%
                                            </div>
                                        </div>
                                    </div>
                                    <div class="text-wrap"><p style="margin-bottom:10px;color:#666666">证券净值</p><p style="color:#FF5256" class="font-bold"> <span class="f20">0.00</span></p></div>
                                </td>
                            </tr>
                            <tr class="chart">
                                <td>
                                    <div id="balance">
                                        <div class="a1">
                                            <div class="a2">
                                                0.00%
                                            </div>
                                        </div>
                                    </div>
                                    <div class="text-wrap"><p style="margin-bottom:10px;color:#666666">现金资产</p><p style="color:#566B96" class="font-bold">0.00</p></div>
                                </td>
                                <td class="btn">
                                    <router-link to="/member/recharge">充值</router-link>
                                    <a href="/member/drawings.html" class="out">提现</a>
                                </td>
                            </tr>
                        </tbody></table>
                    </div>
                </div>
  </div>
</template>

<script>
import Me from "@/page/member/me"
export default {
    components:{
        Me
    },
  name: 'assets',
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
    .assets{
        padding-top: 170px;
        width: 980px;
        padding-bottom: 120px;
    }
    .person-info {
        position: relative;
        height: 100px;
        background-color: #464F63;
        margin-bottom: 22px;
        color: #fff;
        img {
            border-radius: 50%;
            width: 60px;
            height: 60px;
            position: absolute;
            margin: 20px 40px;
            border: 2px solid #fff;
            box-shadow: 0 0 30px rgba(0,0,0,.4);
        }
        .middle-wrap {
            width: 810px;
            height: 65px;
            position: absolute;
            margin-top: 20px;
            margin-left: 130px;
            font-size: 0;
            span {
                position: absolute;
                bottom: 30px;
                top: 50%;
                margin-top: -9px;
                left: 0;
                font-size: 18px;
            }
        }
        .button {
            width: 128px;
            height: 44px;
            text-align: center;
            line-height: 44px;
            border: 1px solid #fff;
            cursor: pointer;
            font-size: 14px;
            position: absolute;
            right: 0;
            color: #fff;
            margin-top: 10px;
        }
        .button1 {
            margin-right: 138px;
            background-color: #FF4D4D;
            border: 1px solid #FF4D4D;
        }
    }
    .account {
        padding: 40px;
        border: 1px solid #DDD;
        table {
            width: 100%;
            td {
                vertical-align: top;
                border-bottom: none;
                font-size: 14px;
                height: 35px;
                vertical-align: middle;
            }
            .line td {
                border-bottom: 1px dotted #ddd;
                padding-bottom: 10px;
                font-weight: bold;
            }
            .jifen {
                color: #666;
                height: 50px;
                td:nth-child(1) span {
                    color: #000;
                    font-weight: bold;
                }
            }
            .chart {
                height: 80px;
                td {
                    position: relative;
                    height: 60px;
                }
                #stockAsset {
                    left: 0;
                    top: 50%;
                    width: 60px;
                    height: 60px;
                    margin-top: -40px;
                }
                .text-wrap {
                    margin-left: 80px;
                    margin-top: -35px;
                }
                .btn {
                    text-align: right;
                    a {
                        width: 70px;
                        text-align: center;
                        display: inline-block;
                        height: 34px;
                        line-height: 34px;
                        background-color: #FF5256;
                        color: #fff;
                        cursor: pointer;
                    }
                    a.out {
                        background-color: inherit;
                        color: #0287FE;
                    }
                }
            }
        }
    }

    #stockAsset,#balance{
        .a1,.a2{
            width: 75px;
            height: 75px;
            border-radius: 50%;
            border: 4px solid #eeeeee;
            text-align: center;
        }
        .a1{
            margin: 10px 0 0;
        }
        .a2{
            width: 60px;
            margin: 4px;
            height: 60px;
            line-height: 60px;
            color: red;
            font-size: 14px;
            border-width: 2px;

        }
    }
</style>
