<template>
    <div class="protocoltrade">
        <MyHead title="账户中心"></MyHead>
        <div class="head-box clearfix">
            <div class="head-line1 clearfix">
                <ul>
                <li><img class="head-phone45" src="../../assets/img/defaultUserPhoto.png" id="header_img"></li>
                <li>
                    <p style="line-height:25px">昵称：<span id="nick_name">‘\\\\’</span></p>
                    <p style="line-height:25px" class="ng-binding" id="userphone">176****075</p>
                </li>

                <li @click="jump">
                    <div class="person-set"></div>
                    <i class="person-set iconfont icon-icon-arrow-right2 "></i>
                </li>

                </ul>
            </div>
            <div class="head-line2 clearfix">
                <ul>
                    <li> 
                <span style="font-size:16px">总资产</span>
                <span class="font-size14 ">

                    <span class="ng-binding ng-isolate-scope font-red" style="font-weight:bold" id="money_total">0.00</span>
                </span>
                        </li> 
                </ul>
                <div class="btn-recharge">
                <router-link class="btn-small btn-orange" to="/personcenter/pay">充值</router-link>
                <router-link class="btn-small btn-blue" to="/personcenter/drawing">提现</router-link>
                </div>
            </div>
            <!-- 资产分布 -->
            <div class="head-line3">
                <div class="icon-block block-red"></div>
                
                <div class="line3-cont"><span class="">证券净值</span>
                <span class="font-red">
                    <span class="ng-binding ng-isolate-scope" id="zqjz">0.00</span>
                </span>
                </div>
            </div>
                <div class="shu"></div>
            <div class="head-line3">
                <div class="icon-block block-blue"></div>
                <div class="line3-cont"><span class="">现金资产</span>
                <span class="font-red">
                    <span class="ng-binding ng-isolate-scope" id="recharge">0.00</span>
                </span>
                </div>
            </div>
        </div>
        <!--  -->
        <div class="common-list">

            <ul v-for="(item,index) in lis" @click="myjump(item)" :key="index" class="list-haveline clearfix" >
                <router-link :to="item.href">
                    <li  class="font-gray3"><i class="user-icon font-size18" :class="item.icon" style="font-size: 24px;margin-right:0px;padding-right: 15px;height:2.5rem;display:inline-block"></i>{{item.text}}</li>
                    <li class="fr"><i class="iconfont icon-icon-arrow-right2 font-red"></i></li>
                </router-link>
            </ul>
        </div>
        <!--  -->
        <div class="save-btn">
            <a class="btn-full btn-orange" @click="loginout()">安全退出</a>
        </div>
    </div>
</template>

<script>
import MyHead from "@/components/myhead"
export default {
    components:{
        MyHead
    },
  name: 'personcenterindex',
  data () {
    return {
        lis:[
            {id:0,text:'资金明细',icon:'iconfont icon-communications',href:'/personcenter/funddetail',},
            {id:1,text:'个人资料',icon:'iconfont icon-gerenziliao',href:'/personcenter/personalSet',},
            {id:2,text:'消息中心',icon:'iconfont icon-xiaoxi',href:'/news/news',},
            {id:3,text:'免费体验',icon:'iconfont icon-baogao',href:'/trade/freetrade',},
            {id:4,text:'自选股票',icon:'iconfont icon-64',href:'/personcenter/stockpool',},
        ]
    }
  },
  methods:{
      loginout(){
          localStorage.setItem('islogin',false);
          this.$router.push('/login')
      },
      jump(){
          this.$router.push('/personcenter/personalset')
      },
      myjump(e){
          this.$router.push(e.href)
      }
  },
  created(){
      let islogin=localStorage.getItem('islogin')
      if(islogin=='false'){
          this.$router.push('/login')
      }else{
          this.$router.push('/personcenter/personcenterindex')
      }
  }
}
</script>

<style scoped lang="scss">
    .protocoltrade{
        width: 100%;
        height: 100%;
        background: #f2f2f2;
    }
    
    //    头部
    .head-line1 {
        padding: 18px 15px 18px 24px;
        background: #ee3535;
        border-top: 1px solid #f29595;
        li {
            float: left;
            .head-phone45 {
                width: 64px;
                height: 64px;
                border: 2px solid #FFF;
                border-radius: 50%;
                background: #eee;
                border: none;
            }
        }
        li:nth-child(2) {
            margin-left: 10px;
            line-height: 45px;
            font-size: 16px;
            color: #333333;
            padding-top: 10px;
            color: #fff;
            margin-left: 35px;
        }
        li:nth-child(3) {
            float: right;
            text-align: right;
            font-size: 12px;
            color: #333;
            line-height: 20px;
            .person-set {
                float: left;
                margin-top: 30px;
                padding-left: 5px;
                color: #fff;
            }
        }
    }
    // 
    .head-line2 {
        font-size: 12px;
        color: #333;
        background: #fff;
        margin-top: 5px;
        padding: 15px;
        ul {
            float: left;
            width: 50%;
        }
        .btn-recharge {
            float: right;
            width: 50%;
            text-align: right;
            .btn-small {
                height: 28px;
                line-height: 28px;
                width: 65px;
                color: #FFF;
                font-size: 12px;
                text-decoration: none;
                display: inline-block;
                text-align: center;
                cursor: pointer;
                border: none;
            }
            a:first-child {
                margin-left: 0;
                background: #ee3535;
                border-radius: 5px;
            }
            .btn-blue {
                background: #ff8339;
                border-radius: 5px;
            }
        }

    }
    // 
    .head-line3 {
        float: left;
        width: 49.8%;
        background: #fff;
        margin-top: 5px;
        padding: 15px 15px 15px 50px;
        .icon-block {
            width: 12px;
            height: 12px;
            float: left;
            margin-right: 5px;
            margin-top: 5px;
        }
        .block-red,.block-blue {
            background: #ff8339;
            border: 1px solid #FFF;
        }
        .line3-cont {
            font-size: 16px;
            line-height: 22px;
            color: #333;
            float: left;
            text-align: center;
            span {
                display: block;
            }
        }
    }
    .shu {
        height: 35px;
        width: 1px;
        background: #ccc;
        float: left;
        margin-top: 24px;
    }
    // 
    .common-list {
        background: #FFF;
        margin-top: 5px;
        ul {
            border-bottom: 1px solid #f5f5f5;
            padding-right: 0;
            padding: 0 15px;
            li {
                height: 44px;
                line-height: 44px;
                font-size: 14px;
                .user-icon {
                    color: #CCC;
                    font-size: 24px;
                    color: red;
                    padding-right: 15px;
                    // font-weight: bold; 
                }
            }
            li:first-child {
                float: left;
                text-align: left;
            }
        }
    }
    // 
    .save-btn {
        margin-top: 15px;
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
