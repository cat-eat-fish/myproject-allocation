<template>
    <div class="personalset">
        <MyHead title="个人资料"></MyHead>
        <div class="head-img">
            <p>
                <img class="head-phone45" id="header_img" src="../../assets/img/defaultUserPhoto.png">
            </p>
            <p style="line-height:25px">昵称：<span id="nick_name">‘\\\\\\\\\\\\\\’</span></p>
            <p style="line-height:25px" class="ng-binding">我的推荐码：<span id="code">A3B0C2971</span></p>
          
        </div>
        <div class="common-list">
            <ul  class="list-haveline clearfix" v-for="(item,index) in lis" :key="index" @click="showewm(index);jump(index)">
                <a >
                    <li class="font-gray3">
                        <i class="user-icon font-red" :class="item.icon"></i>{{item.text}}
                    </li>
                    <li v-if="item.content.mystate!=true"> 
                        <span v-if="index==1">
                            <img class="showewm" width="26" :src="item.content.img" alt="">
                        </span>
                        <span class="font-red" v-if="index==2">
                            未绑定
                        </span>
                        <span class="font-red" v-if="index==3">
                            {{item.content.telephone}}
                        </span>
                        <span  v-if="index==4">
                            以设置
                        </span>
                        <span class="font-red" v-if="index==5">
                            未设置
                        </span>
                        <i class="font-grayD iconfont icon-icon-arrow-right2"></i>
                    </li>
                    <li v-if="index==0"> <span>{{item.content.name}}</span></li>
                    <li v-if="index==3"> <span>{{showtel}}</span></li>
                </a>
            </ul>
        </div>

        <!-- 二维码弹出 -->
        <div class="popup-container ng-scope" @click="hide">
            <div class="popup">
                <div class="popup-head">我的二维码</div>
                <div class="popup-body" style="text-align: center;">
                    <img class="img-code" src="../../assets/img/2971.png" width="220px" alt="我的推广二维码">
                </div>
                <div class="bot-tip">&nbsp;&nbsp;</div>
            </div>
        </div>
    </div>
</template>

<script>
import MyHead from "@/components/myhead"
export default {
    components:{
        MyHead      
    },
  name: 'personalset',
  data () {
    return {
        showtel:'',
        lis:[
            {id:0,text:'实名认证',icon:'iconfont icon-shimingrenzheng',href:'',content:{
                mystate:true,name:'safjf',
            }},
            {id:1,text:'二维码',icon:'iconfont icon-ai-code',href:'',content:{
                mystate:false,img:require('../../assets/img/icon-code.png'),
            }},
            {id:2,text:'银行卡绑定',icon:'iconfont icon-shuaqiaqiapianyinhangqia',href:'',content:{
                mystate:false,href:'/personcenter/addbank',
            }},
            {id:3,text:'手机绑定',icon:'iconfont icon-shouji',href:'',content:{
                mystate:true,telephone:'18434367522',href:'/forgetpassword'
            }},
            {id:4,text:'登录密码',icon:'iconfont icon-Group-',href:'',content:{
                mystate:false,href:'/forgetpassword'
            }},
            {id:5,text:'提款密码',icon:'iconfont icon-46',href:'',content:{
                mystate:false,href:'/personcenter/setpassword'
            }},
        ]
    }
  },
  methods:{
        loginout(){
            localStorage.setItem('islogin',false);
            this.$router.push('/login')
        },
        showewm(index){
            if(index==1){
                document.querySelector('.popup-container').style.cssText="display:flex";
            }else{
                return false;
            }
        },
        jump(index){
            if(index==2 || index==3 || index==4 || index==5){
                this.$router.push(this.lis[index].content.href)
            }else{
                return false
            }
        },
        hide(){
            document.querySelector('.popup-container').style.cssText="display:none";
        }
  },
  created(){
      let str=this.lis[3].content.telephone;
      this.showtel=str.substr(0,3)+'****'+str.substr(7);
  },
  mounted(){
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
   .head-img {
        background: #ee3535;
        padding: 30px 0 10px;
        border-top: 1px solid #f29595;
        p {
            color: #fff;
            text-align: center;
            line-height: 30px;
            font-size: 14px;
            .head-phone45 {
                width: 64px;
                height: 64px;
                border: 2px solid #FFF;
                border-radius: 50%;
                background: #eee;
            }
        }
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
                    font-size: 0.3rem;
                    margin-right: 10px;
                }
                .showewm{
                    margin-bottom: 10px;
                }
            }
            li:first-child {
                float: left;
            }
            li:last-child {
                float: right;
            }
        }
    }
    .common-list ul li:last-child {
        float: right;
        text-align: right;
    }


    // 二维码
    .popup-container {
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
        background: 0 0;
        display: -webkit-box;
        display: -webkit-flex;
        display: -moz-box;
        display: -moz-flex;
        display: -ms-flexbox;
        display: none;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        -moz-justify-content: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        -moz-align-items: center;
        align-items: center;
        z-index: 12;
        visibility: visible;
        width: 100%;
        background-color: rgba(0,0,0,.5);
        .popup {
            width: 80%;
            border-radius: 5px;
            background-color: #fff;
            text-align: center;
            .popup-head {
                padding: 15px;
                font-size: 16px;
                color: #333;
                text-align: left;
            }
            .popup-body {
                padding: 5px 15px 20px 15px;
                font-size: 14px;
                color: #666;
                text-align: left;
            }
        }
    }
</style>
