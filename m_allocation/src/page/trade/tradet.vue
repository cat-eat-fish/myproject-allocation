<template>
    <div class="tradet">
        <div class="top">
            <i @click="goback" class="iconfont icon-icon-arrow-left2"></i>
            <p class="title">按{{key}}操盘</p>
        </div>
        <nav>
            <h3>操盘选项</h3>
        </nav>
        <ul class="dayul">
            <li :style="{backgroundImage:'url(' + item.src + ')'}" v-for="(item,index) in nav" :key="index">
                <a @click="jump(item)" :class="{active:active==index}" href="javascript:;">{{item.text}}</a>
            </li>
        </ul>
            <!--  -->
            <router-view ></router-view>
    </div>
</template>

<script>
export default {
  name: 'tradet',
  data () {
    return {
    //   title:'按天操盘',
      key:"天",
      active:0,
      nav:[
          {id:0,text:'按天操盘',key:'天',src:require("../../assets/img/peizi-01.png"),href:'/trade/daytrade'},
          {id:1,text:'按月操盘',key:'月',src:require("../../assets/img/peizi-02.png"),href:'/trade/monthtrade'},
      ],
    }
  },
  methods:{
      goback(){
          this.$router.go(-1);
      },
      jump(e){
            this.$router.push(e.href);
            this.key=e.key;
            this.active=e.id;
      },
  },
  created(){
      
  }
}
</script>

<style lang="scss">

    .tradet{
        background: #f2f2f2;
        width: 100%;
        height: 100%;
        padding-bottom: 1rem;
        .top{
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
    nav{
        height: 0.8rem;
        overflow: hidden;
        background: #fff;
        border-bottom: 0.08rem solid #f2f2f2;
        h3{
            font-size: 0.28rem;
            color: #000;
            margin: 0.2rem 0.3rem;
            border-left: 2px solid red;
            // padding-top: 0.2rem;
            padding-left: 0.3rem;
        }
    }
    ul{
        width: 100%;
        background: #fff;
        height: 0.83rem;
        line-height: 0.8rem;
        font-size: 0.3rem;
        padding: 0 5%;
        margin: 0 auto;
        display: flex;
        justify-content: space-around;
        border-bottom: 1px solid #f2f2f2f2;
        li{
            background-repeat: no-repeat;
            background-size: 0.5rem;
            background-position: 0.3rem;
            width: 50%;
            text-align: center;
            a{
                display: block;
                width: 100%;
                box-sizing: border-box;
            }
            a.active{
                color: red;
                border-bottom: 1px solid red;
            }
        }
    }
    .day-list {
        padding: 0 15px;
        background: #fff;
        padding-left: 15px;
        background-size: 4.5%;
        .module-spaceleft {
            background: #fff;
            border-bottom: 1px dashed #bdbdbd;
            padding: 15px 0 5px;
        }
        ul{
            border: none;
            height: auto;
            padding: 0;
            li {
                height: auto;
                line-height: 25px;
                font-size: 14px;
                text-align: left;
            }
        }
        .list-haveline:last-child {
            border-bottom: none;
        }
        .list-haveline li:first-child {
            float: left;
        }
        .list-haveline li:last-child {
            float: right;
            text-align: right;
        }
        .list-noline li:last-child {
            float: right;
            color: #333;
            text-align: right;
        }
    }
    // 协议
    .trade-xy {
        background: #F2F2F2;
        height: 32px;
        line-height: 32px;
        font-size: 12px;
        text-align: center;
        color: #999;
    }
    // 
    .pay-money {
        position: relative;
        padding-top: 15px;
        line-height: 22px;
        text-align: center;
        background: rgb(255, 255, 255);
    }
    // 
    .trade-pay {
        font-size: 14px;
        text-align: center;
        width: 100%;
        .cancel-btn {
            position: fixed;
            bottom: 1.2rem;
            z-index: 10;
            width: 100%;
            // max-width: 640px;
            margin:15px auto 0;

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
    }
    }
    

    
</style>
