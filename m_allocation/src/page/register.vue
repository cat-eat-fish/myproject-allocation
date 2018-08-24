<template>
  <div class="register">
      <my-head title="注册"></my-head>
        <div class="module-noborder" v-if="isnext">
            <ul class="list-otherline clearfix">
                <li>
                <span class="pic-yonghu">手机号码</span>
                <div class="line-down">
                    <input class="longbox" type="text" placeholder="11位手机号码" id="mobile" v-model="telephone">
                    
                </div>
                </li>
            </ul>
            <ul class="list-anotherline clearfix">
                <li>
                <span class="pic-lock">手机验证码</span>
                <div class="line-no">
                    <input class="longbox" type="text" placeholder="手机验证码" id="code" v-model="code">
                    <a class="duanxin " @click="getcode" href="javascript:;">{{text}}</a>
                </div>
                </li>
            </ul>
            <div class="blank-85"></div>
            <div>
                <a class="btn-full " @click="next">下一步</a>
            </div>
        </div>

        <!-- 下一步注册 -->
        <div class="module-noborder" v-else>
               
                <ul class="list-otherline clearfix">
                    <li>
                        <span class="pic-phone">设置昵称</span>
                        <div class="line-down">
                            <input class="longbox" type="text" placeholder="请设置昵称" id="nickname2" v-model="nickname">
                        </div>
                    </li>
                </ul>
                <ul class="list-otherline clearfix">
                    <li>
                        <span class="pic-lock">登录密码</span>
                        <div class="line-down">
                            <input class="longbox" type="password" placeholder="请设置登录密码" id="regpwd1" v-model="password">
                        </div>
                    </li>
                </ul>
                <ul class="list-anotherline clearfix">
                    <li>
                        <span class="pic-lock">登录密码</span>
                        <div class="line-no">
                            <input class="longbox" type="password" placeholder="请再次输入登录密码" id="regpwd2" v-model="password2">
                        </div>
                    </li>
                </ul>

                <ul class="list-anotherline clearfix">
                    <li>
                        <span class="pic-lock">推荐码</span>
                        <div class="line-no">
                            <input class="longbox" type="text" placeholder="请填写推荐码" id="newRfeence" v-model="mycode">
                        </div>
                    </li>
                </ul>
               
                    <div class="notice" style="padding:15px 0 0 15px">
                        <i class="iconfont icon-gantanhao font-red"></i>
                        <span class="font-gray9 ">密码由6-16位数字和字母组成，请妥善保管。</span>
                    </div>

                    <!--  -->
                    <div class="blank-85"></div>
                    <div>
                        <a @click="isok" class="btn-full btn-orange">完成</a>
                    </div>
                    <!--  -->
                    <div class="state">
                        <div>注册即表示同意</div>
                        <router-link to="/protocol/zcxy" class="font-blue">《注册协议》、</router-link>
                        <router-link to="/protocol/hgtzrsm"  class="font-blue">《合格投资人申明》、</router-link>
                        <router-link to="/protocol/fxxys"  class="font-blue">《风险揭示书》</router-link>
                    </div>
            </div>


        <div class="error">
            <span class="err">{{err}}</span>
        </div>
      <MyMask text="验证码发送中..."></MyMask>
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
  name: 'register',
  data () {
    return {
        isnext:true,
      text:'获取短信验证码',
      err:'请输入正确的短信验证码',
      jsq:60,
      telephone:'',
      code:'',
      nickname:'',
      password:'',
      password2:'',
      mycode:'',
    }
  },
  methods:{
      next(){
         var patt=/^1[3|4|5|8][0-9]\d{4,8}$/;
         var patt2=/^[a-zA-Z0-9]{4}$/;
         if(!(patt.test(this.telephone))){
             this.err="手机号码格式不正确";
             document.querySelector('.error').style.cssText="display:block";
             setTimeout(function(){ document.querySelector('.error').style.cssText="display:none";},2000)
             return false;
         }else if(!(patt2.test(this.code))){
             this.err="手机验证码不正确";
             document.querySelector('.error').style.cssText="display:block";
             setTimeout(function(){ document.querySelector('.error').style.cssText="display:none";},2000);
            //  
             return false;
         }else{
             this.isnext=!this.isnext;
             console.log('验证成功=》下一步')
         }
      },
      isok(){
          var patt=/^[\u4E00-\u9FA5A-Za-z0-9_]{1,18}$/;
         var patt2=/^[A-Za-z0-9]{6,18}$/;
         var patt3=/^[A-Za-z0-9]{6}$/;
         if(!(patt.test(this.nickname))){
             this.err="昵称格式不正确(建议输入汉字，英文，数字)";
             document.querySelector('.error').style.cssText="display:block";
             setTimeout(function(){ document.querySelector('.error').style.cssText="display:none";},2000)
             return false;
         }else if(!(patt2.test(this.password))){
             this.err="密码格式不正确";
             document.querySelector('.error').style.cssText="display:block";
             setTimeout(function(){ document.querySelector('.error').style.cssText="display:none";},2000);
            //  
             return false;
         }else if(!(patt2.test(this.password2))){
             this.err="重复密码格式不正确";
             document.querySelector('.error').style.cssText="display:block";
             setTimeout(function(){ document.querySelector('.error').style.cssText="display:none";},2000);
            //  
             return false;
         }else if(!(this.password==this.password2)){
            this.err="两次密码不同";
             document.querySelector('.error').style.cssText="display:block";
             setTimeout(function(){ document.querySelector('.error').style.cssText="display:none";},2000);
            //  
             return false;
         }else if(!(patt3.test(this.mycode))){
             this.err="推荐码格式不正确";
             document.querySelector('.error').style.cssText="display:block";
             setTimeout(function(){ document.querySelector('.error').style.cssText="display:none";},2000);
            //  
             return false;
         }else{
             console.log('验证成功')
         }
      },
      getcode(){
          var that=this;
          if(that.jsq==60){
            document.querySelector('.register .mask').style.cssText="display:block";
            setTimeout(function(){
                document.querySelector('.register .mask').style.cssText="display:none";
            },1000)
            var djs=setInterval(function(){
                that.jsq--;
                that.text='过'+that.jsq+'秒后重新获取'
                if(that.jsq<=0){
                    that.jsq=60;
                    clearInterval(djs);
                    that.text="获取短信验证码";
                }
            },1000)
          }
      }
  }
}
</script>

<style scoped lang="scss">

.register{
    width: 100%;
    height: 100%;
    background: #f2f2f2;
}
  .register .mask{
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
                padding-left: 20px;
            }
        }
    }
    .list-anotherline li {
        height: 44px;
        line-height: 44px;
        font-size: 14px;
        color: #000;
        .pic-lock {
            width: 22%;
            height: 100%;
            float: left;
            display: inline-block;
        }
        .line-no {
            float: left;
            width:78%;
            .longbox {
                height: 44px;
                font-size: 14px;
                line-height: 44px;
                border: none;
                padding-left: 20px;
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
    // 

    .module-noborder ul {
        background: #fff;
        margin-top: 5px;
        padding: 0 15px;
        li {
            height: 44px;
            line-height: 44px;
            font-size: 14px;
        }
        span {
            display: block;
            float: left;
            width: 22%;
            color: #000;
        }
        .line-down {
            float: left;
            width: 78%;
            .longbox {
                height: 42px;
                font-size: 14px;
                line-height: 44px;
                border: none;
                width: 64%;
                float: left;
                padding-left: 20px;
            }
        }
    }
    .state {
        text-align: center;
        font-size: 10px;
        padding-bottom: 10px;
        div {
            margin-top: 10px;
            margin-bottom: 8px;
            font-size: 12px;
        }
    }
</style>
