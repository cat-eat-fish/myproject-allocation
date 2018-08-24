<template>
    <div class="funddetail">
        <MyHead title="资金明细"></MyHead>
        <div class="wrap bg-gray">
            <nav class="head-subnav">
                <span class="width20" @click="jump(item)" :class="{selected:active==index}" v-for="(item,index) in lis" :key="index">
                    {{item.text}}
                </span>
                <!-- <a class="width20 selected" ng-class="{'selected':iolist.type==2}" data-type="1">充值提款</a>
                <a class="width20" ng-class="{'selected':iolist.type==3}" data-type="2">借款明细</a>
                <a class="width20" ng-class="{'selected':iolist.type==4}" data-type="3">服务费</a>
                <a class="width20" ng-class="{'selected':iolist.type==1}" data-type="4">利润提取</a> -->
                <!--<a class="width20" ng-class="{'selected':iolist.type==7}"  data-Type="5" >推广收益</a>-->
            </nav>
        <div class="detail-list clearfix ng-scope" style="text-align:center">暂无记录</div>

            <div class="pageDiv page-middel clearfix" style="float: right;display:none;">
                <div class="query">
                    <div class="fl" style="display: none;"></div>
                    <div class="page pagination-sm pagination" id="pager_user_money" style="display: none; width: auto; padding-top: 5px; padding-left: 30px; margin-right: 11px;">
                    </div>
                </div>
            </div>
            <span id="loadmore"  style="display:none;">加载更多</span>
        </div>
    </div>
</template>

<script>
import MyHead from "@/components/myhead"
export default {
    components:{
        MyHead      
    },
  name: 'funddetail',
  data () {
    return {
        active:0,
        lis:[
            {id:0,text:'充值提款',},
            {id:1,text:'借款明细',},
            {id:2,text:'服务费',},
            {id:3,text:'利润提取',},
        ]
    }
  },
  methods:{
      jump(e){
          this.active=e.id
      }
  },
}
</script>

<style scoped lang="scss">
    .wrap {
        margin: 0 auto;
        width: 100%;
        min-width: 320px;
        overflow-x: hidden;
        padding-bottom: 7rem;
        .head-subnav {
            background: #FFF;
            height: 44px;
            line-height: 44px;
            span.width20 {
                width: 25%;
            }
            span.selected {
                color: #ee3535;
                border-bottom: 2px solid #ee3535;
            }
            span {
                float: left;
                width: 33.3%;
                text-align: center;
                font-size: 14px;
                font-weight: 700;
                color: #666;
                border-bottom: 2px solid #DDD;
                position: relative;
            }
        }
        .detail-list {
            background: #FFF;
            border-bottom: 1px solid #f5f5f5;
            font-size: 12px;
            padding: 13px 15px 12px 15px;
            line-height: 20px;
        }
    }
</style>
