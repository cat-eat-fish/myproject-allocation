<template>
  <div class="monthtrade">
        <div class="trade-module">
            <div class="block-padright">
                <input type="text" placeholder="最少200，最多500万，百的整数倍" v-model="bzj">
                <span class="baozj">风险保证金</span>
            </div>
            <div class="show">
                <div class="sqed">申请额度</div>
                <div @click="showxm" class="jrxm">今日限买股</div>
            </div>
            <ul class="listbox-public"> 
                <li @click="change(item)" :class="{selected:active==index}"  v-for="(item,index) in lis" :key="index">
                    <div class="ng-binding beishu">
                        <span>{{item.text}}</span>
                        倍
                    </div>
                    <div class="month-value ng-binding"></div>
                    <div style="font-size: 12px; font-weight: 400;">
                        月利率 
                        <span>{{item.interest*100}}</span>%
                    </div>
                    <div class="fx-value ng-binding">
                        <span>{{bzj*item.text}}</span>元
                    </div>
                    <p>配置金额</p>
                </li>        
            </ul>
            <!-- 今日限买股 -->
            <div class="mask">
                <div class="trade-popup">
                    <div class="trade-popup-head">今日限买股</div>
                    <div class="trade-popup-body">
                        <div class="item" v-for="(item,index) in xmg" :key="index">
                            <span class="code">{{item.code}}</span>
                            <span class="text">{{item.text}}</span>
                        </div>
                    </div>
                    <div class="trade-tip">
                        <i class="iconfont icon-jinggao"></i> 
                        <span>平台不可交易基金、S、ST、*ST、S*ST及SST类股票。</span>
                    </div>
                    <div class="trade-popup-buttons">
                        <button @click="close">
                            确定
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <!--  -->
        <div class="day-list">
            <div class="module-spaceleft">
                <ul class="list-haveline clearfix">
                    <li>总操盘资金</li> <li class="fr">
                        <span>{{zcpzj}}</span><span>元</span>
                    </li>
                </ul> 
                <ul class="list-noline clearfix">
                    <li>持仓时间</li> 
                    <li id="Li1" class="fr">自动延期</li>
                </ul> 
                <ul class="list-haveline clearfix">
                    <li>单票持仓</li> 
                    <li >主板100%创业板100%单客户单票持仓上限110万</li>
                </ul>
            </div> 
            <div class="module-spaceleft">
                <ul class="list-haveline clearfix">
                    <li>亏损警戒线</li> 
                    <li class="fr">
                        <span pvalue="0.00" class="font-orange ng-binding ng-isolate-scope">{{ksjjx}}</span>
                        <span class="font-orange">元</span>
                    </li>
                </ul> 
                <ul class="list-haveline clearfix">
                    <li>亏损平仓线</li> 
                    <li class="fr">
                        <span class="font-green">{{kspcx}}</span> 
                        <span class="font-green">元</span>
                    </li>
                </ul> 
                <ul class="list-haveline clearfix">
                    <li>风险保证金</li> 
                    <li class="fr">
                        <span pvalue="0.00" class="ng-binding ng-isolate-scope">{{bzj}}</span>
                        <span>元</span>
                    </li>
                </ul>
            </div> 
            <div class="module-spaceleft" style="border: 0px;"><ul class="list-haveline clearfix">
                <li>
                    预存管理费&nbsp;<span class="font-size12 font-gray9">非交易日不收取</span>
                </li> 
                <li class="fr">
                    <span pvalue="0.00" id="fee" class="ng-binding ng-isolate-scope">{{ycglf}}</span> 
                    <span>元 /交易月</span>
                </li>
            </ul> 
            <ul class="list-haveline clearfix">
                <li style="font-size: 18px; color: rgb(0, 0, 0);">共计应支付</li> 
                <li class="fr">
                    <span pvalue="0.00" class="font-size16 font-orange fb" style="color: red;">{{zj}}</span>
                    <span>元</span>
                </li> 
            </ul>
            <ul class="list-haveline clearfix">
                <li class=" font-gray9" style="height: 40px; line-height: 40px; width: 100%; text-align: center;">
                    准备资金=风险保证金+月管理费×月数
                </li>
            </ul>
            </div>
        </div>
        <!-- 协议 -->
        <div class="trade-xy">
            申请即表示已阅读并同意
            <span class="font-red">
                <router-link to="/protocol/protocoltrade" style="color: rgb(238, 53, 53);">
                    《创盈中心操盘协议》
                </router-link>
            </span>
        </div>
        <!--  -->
        <div class="pay-money  pay-money-padding">
            <!-- <div style="color: rgb(153, 153, 153); padding-bottom: 80px; font-size: 12px;">
                每个合约至少交易2个交易日，首次申请将扣取1个交易日的管理费
            </div> -->
        </div>
        <!--  -->
        <div class="trade-pay">
            <div id="JS-instant-apply" class="cancel-btn">
                <a href="javaScript:void(0)" @click="application" class="btn-full">立即申请</a>
            </div>
        </div>
  </div>
</template>

<script>
export default {
  name: 'monthtrade',
  data () {
    return {
        active:0,
        bzj:'',
        pzzj:'',
        sqcpbs:3,
        lis:[
            {id:0,interest:0.0018,text:'3'},
            {id:1,interest:0.0020,text:'4'},
            {id:2,interest:0.0020,text:'5'},
            {id:3,interest:0.0022,text:'6'},
            {id:4,interest:0.0022,text:'7'},
            {id:5,interest:0.0025,text:'8'},
            {id:6,interest:0.0025,text:'9'},
            {id:7,interest:0.0027,text:'10'},
        ],
        monthtrade:{
            zcpzj:'',
            ksjjx:'',
            kspcx:'',
            fxbzj:'',
            ycglf:'',
            Application:[
                {id:0,text:'3倍',val:3,jjxbs:0.875025,zsxbs:0.825,glfbs:0.0054},
                {id:1,text:'4倍',val:4,jjxbs:0.9,zsxbs:0.86,glfbs:0.008},
                {id:2,text:'5倍',val:5,jjxbs:0.9167,zsxbs:0.8833,glfbs:0.01},
                {id:3,text:'6倍',val:6,jjxbs:0.9285,zsxbs:0.90,glfbs:0.0132},
                {id:4,text:'7倍',val:7,jjxbs:0.9375,zsxbs:0.9125,glfbs:0.0154},
                {id:5,text:'8倍',val:8,jjxbs:0.9444,zsxbs:0.9222,glfbs:0.02},
                {id:6,text:'9倍',val:9,jjxbs:0.9500,zsxbs:0.9300,glfbs:0.0225},
                {id:7,text:'10倍',val:10,jjxbs:0.9545,zsxbs:0.9364,glfbs:0.027},
            ],
        }, 
      xmg:[
          {id:0,code:'8000',text:'神雾节能'},
          {id:1,code:'8000',text:'神雾节能'},
          {id:2,code:'8000',text:'神雾节能'},
          {id:3,code:'8000',text:'神雾节能'},
          {id:4,code:'8000',text:'神雾节能'},
          {id:5,code:'8000',text:'神雾节能'},
          {id:6,code:'8000',text:'神雾节能'},
          {id:7,code:'8000',text:'神雾节能'},
          {id:8,code:'8000',text:'神雾节能'},
          {id:9,code:'8000',text:'神雾节能'},
          {id:10,code:'8000',text:'神雾节能'},
          {id:11,code:'8000',text:'神雾节能'},
          {id:12,code:'8000',text:'神雾节能'},
          {id:13,code:'8000',text:'神雾节能'},
          {id:14,code:'8000',text:'神雾节能'},
          {id:15,code:'8000',text:'神雾节能'},
          {id:16,code:'8000',text:'神雾节能'},
          {id:17,code:'8000',text:'神雾节能'},
      ]
    }
  },
  watch:{
    bzj:function(val,oldval){
      var val=parseInt(val)
      if(val%100==0 && val!='' && val>=200 && val<=5000000){
        this.bzj=val;
      }
      if(val!='' && val>=200 && val<=5000000 && val%100==0){
          this.trzj=val
          document.querySelector('.listbox-public').style.cssText="display:flex";
      }else{
          document.querySelector('.listbox-public').style.cssText="display:none";
      }
    }
  },
  computed:{
      zcpzj:function(){
          return Math.floor(((this.bzj * this.sqcpbs) +  Math.round(this.bzj) )*100)/100; 
      },
      ksjjx:function(){
        return Math.floor(this.monthtrade.Application[this.sqcpbs-3].jjxbs * ((this.bzj * this.sqcpbs) + this.bzj)*100)/ 100;
      },
      kspcx:function(){
        return Math.floor(this.monthtrade.Application[this.sqcpbs-3].zsxbs * ((this.bzj * this.sqcpbs) + this.bzj)*100)/ 100;
      },
      ycglf:function(){
        return Math.floor(this.monthtrade.Application[this.sqcpbs-3].glfbs * this.bzj*100)/ 100;
      },
      zj:function(){
        return Math.floor( (this.bzj+this.ycglf) *100)/100
      }   
  },
  methods:{
      showxm(){
        document.querySelector('.mask').style.cssText="display:flex";
      },
      close(){
        document.querySelector('.mask').style.cssText="display:none";
      },
      change(e){
        this.sqcpbs=e.text
        this.active=e.id
      },
      application(){
        // 判断是否有资金
        // 有-》
        // this.$router.push();
        // 无-》
        this.$router.push({path:"/trade/remainder",query:{benjin:this.bzj,manegerfee:this.ycglf,paytotal:this.zj}});

    }

  },
}
</script>

<style scoped lang="scss">
    .trade-module {
        padding-top: 15px;
        padding-bottom: 15px;
        overflow: hidden;
        background: rgb(255, 255, 255);
        margin: 0 0px 5px;
        .block-padright {
            font-size: 14px;
            margin: 0px 15px 10px;
            overflow: hidden;
            border-width: 1px;
            border-style: solid;
            border-color: rgb(204, 204, 204);
            border-image: initial;
            input{
                display: block;
                float: left;
                height: 30px;
                width: 76%;
                border: 0px;
                padding-left: 4%;
            }
            span{
                display: block;
                float: right;
                height: 30px;
                line-height: 30px;
                width: 24%;
                text-align: center;
                font-size: 14px;
                background: rgb(209, 209, 209);
            }
        }
        .show{
            display: flex;
            justify-content: space-around;
            font-size: 0.28rem;
            color: #333;
            .jrxm{
                font-size: 14px;
                border-width: 1px;
                border-style: solid;
                border-color: rgb(255, 131, 57);
                border-image: initial;
                color: rgb(255, 131, 57);
                border-radius: 5px;
                padding: 2px;
            }
        }
    }
     // 遮罩
    .mask{
        position: absolute;
        left: 0px;
        top: 0px;
        bottom: 0px;
        right: 0px;
        display: none;
        -webkit-box-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        align-items: center;
        z-index: 12;
        visibility: visible;
        width: 100%;
        background: 0px 0px rgba(0, 0, 0, 0.5);
        .trade-popup {
            width: 80%;
            background-color: rgb(255, 255, 255);
            text-align: center;
            border-radius: 5px;
            .trade-popup-head {
                font-size: 16px;
                color: rgb(51, 51, 51);
                text-align: left;
                padding: 15px;
            }
            .trade-popup-body {
                font-size: 14px;
                color: rgb(102, 102, 102);
                padding: 5px 15px 10px;
                max-height: 200px;
                overflow-x: auto;
                .item{
                    display: inline-block;
                    float: left;
                    width: 50%;
                    color: rgb(102, 102, 102);
                    font-size: 14px;
                    margin-bottom: 20px;
                    span.code{
                        text-align: left;
                    }
                    span.text{
                        text-align: right;
                    }
                }
            }
            .trade-tip {
                font-size: 12px;
                color: rgb(153, 153, 153);
                padding: 10px 15px;
                border-top: 1px solid rgb(214, 214, 214);
                i{
                    color: red;
                }
            }
            .trade-popup-buttons {
                height: 44px;
                border-top: 1px solid rgb(214, 214, 214);
                button {
                    color: rgb(255, 140, 25);
                    height: 48px;
                    width: 100%;
                    background-color: rgb(255, 255, 255);
                    font-size: 18px;
                    border-bottom-left-radius: 5px;
                    border-bottom-right-radius: 5px;
                    border-width: initial;
                    border-style: none;
                    border-color: initial;
                    border-image: initial;
                }
            }
        }
    }


    // 
    .listbox-public{
        display: none;
        height: 3rem;
        justify-content: space-around;
        align-content: space-around;
        flex-wrap: wrap;
    }
    .listbox-public li{
        height: 75px;
        width: 24%;
        padding-top: 10px;
        font-size: 16px;
        line-height: 16px;
        position: relative;
        border-radius: 5px;
        border: 1px solid #333;
        text-align: center;
        .beishu {
            position: absolute;
            top: 0px;
            right: 0px;
            color: rgb(102, 102, 102);
            font-size: 12px;
            transform: rotate(45deg);
        }
        .month-value {
            margin-top: 10px;
            font-size: 12px;
            font-weight: 400;
        }
        .fx-value{
            font-size: 14px;
            line-height: 16px;
            font-weight: 700;
        }
        p {
            font-size: 12px;
            font-weight: normal;
        }
    }
    li.selected{
        color: rgb(255, 0, 0);
        border-width: 2px;
        border-style: solid;
        border-color: rgb(255, 0, 0);
        border-image: initial;
        .beishu{
            color: red;
        }
    }

    .trade-xy{
        padding-bottom: 1.5rem;
    }
</style>
