<template>
  <div class="forgetpassword">
      <my-head title="设置密码"></my-head>
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
                <span class="pic-lock">图形验证码</span>
                <div class="line-no">
                    <input class="longbox" type="text" placeholder="图形验证码" id="code" v-model="code">
                    <a class="duanxin " @click="getcode" href="javascript:;">
                        <img src="" alt="">
                    </a>
                </div>
                </li>
            </ul>
            <ul class="list-anotherline clearfix">
                <li>
                <span class="pic-lock">手机验证码</span>
                <div class="line-no">
                    <input class="longbox" type="text" placeholder="手机验证码" id="code" v-model="telephonecode">
                    <a class="duanxin " @click="getcode" href="javascript:;">{{text}}</a>
                </div>
                </li>
            </ul>
            <div class="blank-85"></div>
            <div>
                <a class="btn-full " @click="forgetpassword">下一步</a>
            </div>
        </div>

        <!--  -->
        <div class="module-noborder" v-else>
            <ul class="list-otherline clearfix">
                <li>
                <span class="pic-yonghu">新登录密码</span>
                <div class="line-down">
                    <input class="longbox" type="password" placeholder="请重新设置登录密码" v-model="password">
                </div>
                </li>
            </ul>
            <ul class="list-anotherline clearfix">  
                <li>
                <span class="pic-lock">重复密码</span>
                <div class="line-no">
                    <input class="longbox" type="password" placeholder="请输入登录密码" id="password" v-model="password2">
                    <!-- <a class="duanxin " href="/forgetPassword">忘记密码?</a> -->
                </div>
                </li>
            </ul>
            <div class="notice">         
                <p>温馨提示：</p>
                <p class="font-gray9 font-size12 ">1.密码由6-16位数字和字母组成。</p>
            </div>
            <div class="blank-85"></div>
            <div>
                <a class="btn-full " @click="isok">完成</a>
            </div>
        </div>




        <div class="error">
            <span class="err">{{err}}</span>
        </div>
      <MyMask text="获取短信验证码..."></MyMask>
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
  name: 'forgetpassword',
  data () {
    return {
        isnext:true,
      telephone:'',
      text:'获取短信验证码',
      err:'请输入正确的短信验证码',
      code:'',
      telephonecode:'',
      jsq:60,
      password:'',
      password2:'',
    }
  },
  created(){

  },
  methods:{
      forgetpassword(){
            var patt=/^1[3|4|5|8][0-9]\d{4,8}$/;
            var patt2=/^[a-zA-Z0-9]{4}$/;
            if(!(patt.test(this.telephone))){
                this.err="手机号码格式不正确";
                document.querySelector('.error').style.cssText="display:block";
                setTimeout(function(){ document.querySelector('.error').style.cssText="display:none";},2000)
                return false;
            }else if(!(patt2.test(this.code))){
                this.err="图形验证码不正确";
                document.querySelector('.error').style.cssText="display:block";
                setTimeout(function(){ document.querySelector('.error').style.cssText="display:none";},2000);
                //  
                return false;
            }else if(!(patt2.test(this.telephonecode))){
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
      getcode(){
          var that=this;
          if(that.jsq==60){
            document.querySelector('.forgetpassword .mask').style.cssText="display:block";
            setTimeout(function(){
                document.querySelector('.forgetpassword .mask').style.cssText="display:none";
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
      },
      isok(){
          var patt=/^[\u4E00-\u9FA5A-Za-z0-9_]{1,18}$/;
         var patt2=/^[A-Za-z0-9]{6,18}$/;
         var patt3=/^[A-Za-z0-9]{6}$/;
         if(!(patt2.test(this.password))){
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
         }else{
             console.log('验证成功')
         }
      },
  },
}
</script>

<style scoped lang="scss">
.forgetpassword{
    width: 100%;
    height: 100%;
    background: #f2f2f2;
}
  #app .forgetpassword .mask{
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
            width: 23%;
            height: 100%;
            float: left;
            display: inline-block;
            color: #000;
        }
        .line-down {
            float: left;
            width: 77%;
            .longbox {
                height: 42px;
                font-size: 14px;
                line-height: 44px;
                border: none;
                width: 77%;
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
            width: 23%;
            height: 100%;
            float: left;
            display: inline-block;
        }
        .line-no {
            float: left;
            width: 77%;
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
    .notice {
        color: #909090;
        font-size: 12px;
        padding: 0 15px;
        p {
            line-height: 24px;
        }
    }
</style>
