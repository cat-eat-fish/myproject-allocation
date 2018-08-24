<template>
  <div class="exercises">
      <div class="news-content-wrap clearfix">
            <div class="content-left">

                <div class="item-newslist-wrap clearfix" v-for="(item,index) in nowlists" :key="index">
                    <router-link :to="item.href" target="_blank" style="display: inline-block;">
                        <img style="width: 160px; height: 120px;" :src="item.thumb" class="view-top">
                    </router-link>
                    <div class="content-wrap-news">
                        <router-link :to="item.href" target="_blank" class="c-title">
                            {{item.title}}
                        </router-link>
                        <div class="summary">{{item.desc}}</div>
                        <div class="bottom-wrap clearfix">
                            <div class="views">
                                <img src="/static/img/views.png">{{item.look}}
                            </div>
                            <div class="date">{{item.date}}</div>
                        </div>
                    </div>
                </div>
                <Page :alldate="this.page.oldlistsnum" :onedate="this.page.onedate" @pageprev="pageprev" @ievent ="ievent"></Page>
            </div>
            <!-- <div class="content-right"></div> -->
        </div>
  </div>
</template>

<script>
import Page from '@/components/page'
export default {
  name: 'exercises',
  components: {
    Page
  },
  data () {
    return {
        page:{
            onedate:10,
            oldlistsnum:'',
        },
        nowlists:[],
        lists:[
            {id:0,thumb:'/static/img/thumb_201808081115206743.jpg',href:'',title:'周二行情强势反弹，行情逆转仍面临考验！',desc:'周二三大股指齐齐飙涨，早盘沪深两市双双高开后试探性回落，但是10点半后大幅拉升单边上扬。沪指创下逾两年的单日最大涨幅，成功回到2750点上方。盘面上，行业板块全线飘红，沪深两市合计成交3167亿元，量能较之前有所放大。',look:2,date:'2018-08-08'},
            {id:1,thumb:'/static/img/thumb_201808081115206743.jpg',href:'',title:'周二行情强势反弹，行情逆转仍面临考验！',desc:'周二三大股指齐齐飙涨，早盘沪深两市双双高开后试探性回落，但是10点半后大幅拉升单边上扬。沪指创下逾两年的单日最大涨幅，成功回到2750点上方。盘面上，行业板块全线飘红，沪深两市合计成交3167亿元，量能较之前有所放大。',look:2,date:'2018-08-08'},
            {id:2,thumb:'/static/img/thumb_201808081115206743.jpg',href:'',title:'周二行情强势反弹，行情逆转仍面临考验！',desc:'周二三大股指齐齐飙涨，早盘沪深两市双双高开后试探性回落，但是10点半后大幅拉升单边上扬。沪指创下逾两年的单日最大涨幅，成功回到2750点上方。盘面上，行业板块全线飘红，沪深两市合计成交3167亿元，量能较之前有所放大。',look:2,date:'2018-08-08'},
            {id:3,thumb:'/static/img/thumb_201808081115206743.jpg',href:'',title:'周二行情强势反弹，行情逆转仍面临考验！',desc:'周二三大股指齐齐飙涨，早盘沪深两市双双高开后试探性回落，但是10点半后大幅拉升单边上扬。沪指创下逾两年的单日最大涨幅，成功回到2750点上方。盘面上，行业板块全线飘红，沪深两市合计成交3167亿元，量能较之前有所放大。',look:2,date:'2018-08-08'},
            {id:4,thumb:'/static/img/thumb_201808081115206743.jpg',href:'',title:'周二行情强势反弹，行情逆转仍面临考验！',desc:'周二三大股指齐齐飙涨，早盘沪深两市双双高开后试探性回落，但是10点半后大幅拉升单边上扬。沪指创下逾两年的单日最大涨幅，成功回到2750点上方。盘面上，行业板块全线飘红，沪深两市合计成交3167亿元，量能较之前有所放大。',look:2,date:'2018-08-08'},
            {id:5,thumb:'/static/img/thumb_201808081115206743.jpg',href:'',title:'周二行情强势反弹，行情逆转仍面临考验！',desc:'周二三大股指齐齐飙涨，早盘沪深两市双双高开后试探性回落，但是10点半后大幅拉升单边上扬。沪指创下逾两年的单日最大涨幅，成功回到2750点上方。盘面上，行业板块全线飘红，沪深两市合计成交3167亿元，量能较之前有所放大。',look:2,date:'2018-08-08'},
            {id:6,thumb:'/static/img/thumb_201808081115206743.jpg',href:'',title:'周二行情强势反弹，行情逆转仍面临考验！',desc:'周二三大股指齐齐飙涨，早盘沪深两市双双高开后试探性回落，但是10点半后大幅拉升单边上扬。沪指创下逾两年的单日最大涨幅，成功回到2750点上方。盘面上，行业板块全线飘红，沪深两市合计成交3167亿元，量能较之前有所放大。',look:2,date:'2018-08-08'},
            {id:7,thumb:'/static/img/thumb_201808081115206743.jpg',href:'',title:'周二行情强势反弹，行情逆转仍面临考验！',desc:'周二三大股指齐齐飙涨，早盘沪深两市双双高开后试探性回落，但是10点半后大幅拉升单边上扬。沪指创下逾两年的单日最大涨幅，成功回到2750点上方。盘面上，行业板块全线飘红，沪深两市合计成交3167亿元，量能较之前有所放大。',look:2,date:'2018-08-08'},
            {id:8,thumb:'/static/img/thumb_201808081115206743.jpg',href:'',title:'周二行情强势反弹，行情逆转仍面临考验！',desc:'周二三大股指齐齐飙涨，早盘沪深两市双双高开后试探性回落，但是10点半后大幅拉升单边上扬。沪指创下逾两年的单日最大涨幅，成功回到2750点上方。盘面上，行业板块全线飘红，沪深两市合计成交3167亿元，量能较之前有所放大。',look:2,date:'2018-08-08'},
            {id:9,thumb:'/static/img/thumb_201808081115206743.jpg',href:'',title:'周二行情强势反弹，行情逆转仍面临考验！',desc:'周二三大股指齐齐飙涨，早盘沪深两市双双高开后试探性回落，但是10点半后大幅拉升单边上扬。沪指创下逾两年的单日最大涨幅，成功回到2750点上方。盘面上，行业板块全线飘红，沪深两市合计成交3167亿元，量能较之前有所放大。',look:2,date:'2018-08-08'},
            {id:10,thumb:'/static/img/thumb_201808081115206743.jpg',href:'',title:'周二行情强势反弹，行情逆转仍面临考验！',desc:'周二三大股指齐齐飙涨，早盘沪深两市双双高开后试探性回落，但是10点半后大幅拉升单边上扬。沪指创下逾两年的单日最大涨幅，成功回到2750点上方。盘面上，行业板块全线飘红，沪深两市合计成交3167亿元，量能较之前有所放大。',look:2,date:'2018-08-08'},
        ]
    }
  },
  created(){
    this.$route.query.page=undefined ? 1:this.$route.query.page;
    if(this.$route.query.page==1 || this.$route.query.page==undefined){
        this.nowlists=this.lists.slice(this.$route.query.page*this.page.onedate-this.page.onedate,this.page.onedate);
    }else{
        this.nowlists=this.lists.slice(this.$route.query.page*this.page.onedate-this.page.onedate,this.$route.query.page*this.page.onedate);
    }
  },
  methods:{
      ievent(data){
        if(data==1){
            this.nowlists=this.lists.slice(data*this.page.onedate-this.page.onedate,this.page.onedate);
        }else{
            this.nowlists=this.lists.slice(data*this.page.onedate-this.page.onedate,data*this.page.onedate);
        }
        this.$router.push({path:'/news/exercises',query:{page:data}})
      },
      pageprev(data){
        if(data==1){
            this.nowlists=this.lists.slice(data*this.page.onedate-this.page.onedate,this.page.onedate);
        }else{
            this.nowlists=this.lists.slice(data*this.page.onedate-this.page.onedate,data*this.page.onedate);
        }
        this.$router.push({path:'/news/exercises',query:{page:data}})
      }
  },
  mounted(){
        this.page.oldlistsnum=this.lists.length;
        var page=this.$route.query.page;
        if(page){
            page=this.$route.query.page;
        }else{
            page=1;
        }
  }
}
</script>

<style scoped lang="scss">
    .news-content-wrap{
        width: 1180px;
        margin: 0 auto;

    }
    .item-newslist-wrap:hover{
        border: 1px solid #000;
    }
    .item-newslist-wrap {
        margin-bottom: 20px;
        height: 182px;
        border: 1px solid #ddd;
        padding: 30px;
        position: relative;
        .content-wrap-news {
            position: absolute;
            top: 30px;
            left: 190px;
            height: 120px;
            overflow: hidden;
            margin-left: 30px;
            width: 930px;
            .c-title {
                font-size: 14px;
                color: #000;
                font-weight: 700;
                margin-bottom: 20px;
                cursor: pointer;
                display: inline-block;
            }
            .summary {
                font-size: 14px;
                height: 62px;
                width: 100%;
                line-height: 20px;
                color: #666;
            }
            .bottom-wrap {
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                .views {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    font-size: 12px;
                    img {
                        width: 16px;
                        height: 10px;
                        margin-right: 10px;
                    }
                }
                .date {
                    position: absolute;
                    right: 0;
                    bottom: 0;
                    font-size: 12px;
                }
            }
        }
    }
</style>
