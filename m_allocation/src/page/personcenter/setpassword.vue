<template>
  <div class="setpassword">
      <my-head title="修改交易密码"></my-head>
        <div class="module-noborder" >
            <ul class="list-otherline clearfix">
                <li>
                <span class="pic-yonghu">新密码</span>
                <div class="line-down">
                    <input class="longbox" type="text" placeholder="请输入新提款密码" id="pass2" v-model="password">
                </div>
                </li>
            </ul>
            <ul class="list-anotherline clearfix">
                <li>
                <span class="pic-lock">新密码</span>
                <div class="line-no">
                    <input class="longbox" type="text" placeholder="请再次输入新提款密码" id="pass2" v-model="password2">
                </div>
                </li>
            </ul>
            <div class="notice">         
                <p>温馨提示：</p>
                <p class="font-gray9 font-size12 ">1.提款密码由6-16位数字和字母组成。</p>
            </div>
            <div class="blank-85"></div>
            <div>
                <a class="btn-full " @click="forgetpassword">确认</a>
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
  name: 'setpassword',
  data () {
    return {
       
      err:'请输入正确的短信验证码',
      password:'',
      password2:'',
    }
  },
  created(){

  },
  methods:{
      forgetpassword(){
         var patt2=/^[A-Za-z0-9]{6,18}$/;
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
      }
  },
}
</script>

<style scoped lang="scss">
    .setpassword{
        background: #f5f5f5;
    }
    .personcenter .setpassword .mask{
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
