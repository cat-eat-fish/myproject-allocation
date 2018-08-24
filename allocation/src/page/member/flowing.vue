<template>
  <div class="flowing">
        <Me></Me>
        <div class="assest-wrapper">
                        <div class="ass-title">资金明细</div>
                        <div class="ass-index">
                            <ul class="ass-time clearfix">
                                <span class="first-title">时间：</span>
                                <li v-for="(item,index) in date" class="time" @click="changebg1(item)" :time_date='index' :key="index">{{item.text}}</li>
                            </ul>
                            <ul class="ass-type clearfix">
                                <span class="first-title">类型：</span>
                                <li v-for="(item,index) in type" class="time" @click="changebg2(item)" :time_date='index' :key="index">{{item.text}}</li>
                            </ul>
                        </div>
                        <table class="JS-iolist-page ass-table">
                             <tbody><tr>
                                <th class="t-time">时间</th>
                                <th class="t-type">类型</th>
                                <th class="t-type">交易号</th>
                                <th class="t-money">收入</th>
                                <th class="t-money">支出</th>
                                <th class="t-balance">余额</th>
                                <th class="t-balance" style=" width: 339px;">备注</th>
                            </tr>
                            </tbody><tbody id="user_money_list"><tr><td colspan="7" style="text-align: center">暂无记录</td></tr></tbody>
                        </table>

                       <span class="clear_f"></span>
                            <div class="pageDiv page-middel clearfix" style="float: right;">
                                <div class="query">
                                    <div class="fl" style="display:none;">本页收支共:<span id="moneycount">0</span>笔,支出共:<span id="money_pay">0</span>元,收入共:<span id="money_get">0</span></div>
                                    <div class="page pagination-sm pagination" id="pager_user_money" style="display: none; width: auto; padding-top: 5px; padding-left: 30px;margin-right: 11px;"><span class="disabled">上一页</span><span class="current">1</span><span class="disabled">下一页</span></div>
                                </div>
                            </div>
                            <span class="clear_f"></span>
                            <input type="hidden" id="user_money_count" value="0">
       
                    </div>
  </div>
</template>

<script>
import Me from "@/page/member/me"
export default {
    components:{
        Me
    },
  name: 'flowing',
  data () {
    return {
        date:[
            {id:0,text:'全部',},
            {id:1,text:'一星期',},
            {id:2,text:'一个月',},
            {id:3,text:'三个月',},
            {id:4,text:'一年',}
        ],
        type:[
            {id:0,text:'全部',},
            {id:1,text:'充值退款',},
            {id:2,text:'借款明细',},
            {id:3,text:'服务费明细',},
            {id:4,text:'利润提取',}
        ]
    }
  },
  methods:{
        changebg1(e){
            var lis=document.querySelectorAll('.ass-time li');
            lis.forEach(element => {
                element.classList.remove('ass-check');
            });
            lis[e.id].classList.add('ass-check');
        },
         changebg2(e){
            var lis=document.querySelectorAll('.ass-type li');
            lis.forEach(element => {
                element.classList.remove('ass-check');
            });
            lis[e.id].classList.add('ass-check');
        }
  },
  computed:{
      
  },
  created(){

  },
  mounted(){
      document.querySelector('.ass-time li:nth-of-type(1)').classList.add('ass-check');
      document.querySelector('.ass-type li:nth-of-type(1)').classList.add('ass-check');
  }
}
</script>

<style scoped lang="scss">
    .flowing{
         padding-top: 170px;
        width: 980px;
        padding-bottom: 120px;
    }
    .assest-wrapper {
        padding: 40px 40px 20px;
        border: 1px solid #DDD;
        .ass-title {
            font-size: 16px;
            font-weight: 700;
            color: #000;
            width: 100%;
            padding-bottom: 20px;
            border-bottom: 1px solid #DDD;
        }
        .ass-index {
            padding-top: 40px;
            .first-title {
                font-size: 14px;
                color: #666;
                font-weight: 700;
                width: 50px;
                text-align: left;
            }
            .ass-check {
                color: #fff;
                background-color: #566B96;
                font-weight: 700;
            }
            ul {
                height: 34px;
                margin-bottom: 20px;
                li ,span{
                    font-size: 14px;
                    float: left;
                    margin-right: 10px;
                    cursor: pointer;
                    width: 80px;
                    height: 34px;
                    text-align: center;
                    line-height: 34px;
                    color: #566B96;
                }
            }
        }
        .ass-table {
            width: 100%;
            font-size: 14px;
            td {
                color: #999;
                text-align: center;
                border-bottom: 1px solid #F2F2F2;
                height: 52px;
                vertical-align: middle;
            }
            tr .t-time {
                width: 20%;
            }
            th {
                color: #999;
                background-color: #F2F2F2;
                border-bottom: 1px solid #DDD;
                text-align: center;
                height: 52px;
                vertical-align: middle;
            }
            tr:last-child td {
                border-bottom: 1px solid #DDD;
            }
        }
    }
</style>
