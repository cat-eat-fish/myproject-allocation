<template>
  <div class="login">
      <my-head title="登录"></my-head>
        <div class="module-noborder">
            <ul class="list-otherline clearfix">
                <li>
                <span class="pic-yonghu">用户名</span>
                <div class="line-down">
                    <input class="longbox" type="text" placeholder="用户名/手机号码" id="mobile" v-model="user">
                    
                </div>
                </li>
            </ul>
            <ul class="list-anotherline clearfix">
                <li>
                <span class="pic-lock">登录密码</span>
                <div class="line-no">
                    <input class="longbox" type="password" placeholder="请输入登录密码" id="password" v-model="password">
                    <a class="duanxin " href="/forgetPassword">忘记密码?</a>
                </div>
                </li>
            </ul>
        </div>
        <div class="blank-85"></div>
        <div>
            <a class="btn-full " @click="login">登录</a>
        </div>
        <div class="zhuce">
            <span class="font-size14 font-gray9">还没注册?</span>
            <!-- <a class="font-size14 font-blue" ncow-go="../register.html">点我注册</a> -->
            <router-link to="/register" class="font-size14 font-red" id="zuchu">点我注册</router-link>
        </div>
        <div class="error">
            <span class="err">{{err}}</span>
        </div>
      <MyMask></MyMask>
      <MyFoot></MyFoot>
  </div>
</template>

<script>
import MyFoot from "@/components/myfoot"
import MyMask from "@/components/mask"
import MyPrompt from "@/components/prompt"
import MyHead from "@/components/myhead"
export default {
    components:{
        MyFoot,MyMask,MyPrompt,MyHead
    },
  name: 'login',
  data () {
    return {
    err:'请输入正确的短信验证码',
      user:'',
      password:''
    }
  },
  methods:{
      login(){
        var patt=/^1[3|4|5|8][0-9]\d{4,8}$/;
        var patt2=/^[A-Za-z0-9]{6,18}$/;
        if(!(patt.test(this.user))){
             this.err="用户名格式不正确";
             document.querySelector('.error').style.cssText="display:block";
             setTimeout(function(){ document.querySelector('.error').style.cssText="display:none";},2000)
             return false;
         }else if(!(patt2.test(this.password))){
             this.err="密码格式不正确";
             document.querySelector('.error').style.cssText="display:block";
             setTimeout(function(){ document.querySelector('.error').style.cssText="display:none";},2000);
             return false;
         }else{
             console.log('验证成功')
             localStorage.setItem('islogin',true);
             this.$router.push('/personcenter')
         }
      }
  },
  created(){
      
  }
}
</script>

<style scoped lang="scss">
.login{
    width: 100%;
    height: 100%;
    background: #f2f2f2;
}
  .login .mask{
    display: none;
  }
  .module-noborder {
        border-bottom: none;
    }
    .list-otherline, .list-anotherline {
        background: #fff;
        padding: 0 15px;
        margin-top: 5px;
    }
    .list-otherline li {
        height: 44px;
        line-height: 44px;
        font-size: 14px;
        .pic-yonghu {
            width: 20%;
            height: 100%;
            float: left;
            display: inline-block;
            color: #000;
        }
        .line-down {
            float: left;
            width: 80%;
            .longbox {
                height: 42px;
                font-size: 14px;
                line-height: 44px;
                border: none;
                width: 90%;
                float: left;
            }
        }
    }
    .list-anotherline li {
        height: 44px;
        line-height: 44px;
        font-size: 14px;
        color: #000;
        .pic-lock {
            width: 20%;
            height: 100%;
            float: left;
            display: inline-block;
        }
        .line-no {
            float: left;
            width: 80%;
            .longbox {
                height: 44px;
                font-size: 14px;
                line-height: 44px;
                border: none;
                width: 79%;
            }
            .duanxin {
                position: absolute;
                right: 15px;
                font-size: 12px;
                color: #ee3535;
                height: 44px;
                border: none;
                background-color: #fff;
            }
        }
    }
    .blank-85 {
        height: 25px;
    }
    // 
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
    // 
    .zhuce {
        text-align: center;
        height: 70px;
        line-height: 40px;
    }
</style>
