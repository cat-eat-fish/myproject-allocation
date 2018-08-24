<template>
  <div class="register">
      <!-- 头部 -->
      <MyHead></MyHead>
      
        <div class="inner-page-content-wrap clearfix">
            <div class="reg-left"> </div>
            <div class="login-right">
                <div class="login-title clearfix">
                    <div class="title-name">注册创盈中心</div>
                    <div class="title-link"> <router-link to="/login">立即登录</router-link></div>
                </div>
                <div class="login-cont">
                    <div style="display:none" class="error-msg error-msg1"><i class="icon-jinggao"></i><span></span></div>
                    <label><i class="icon-shouji1"></i><input id="phoneno1" type="text" name="phoneno1" placeholder="11位手机号码"></label>
                    <label class="dxyz">
                        <i class="icon-duanxinyanzheng"></i><input id="code1" type="text" name="code1" placeholder="验证码" onchange="validatecodepcregist(1,'code1',this)">
                        <!-- <span class="imgcode2"><img src="/tools/verify_code.ashx" onclick="ToggleCode(this, '/tools/verify_code.ashx');return false;" class="ivc"></span> -->
                      
                    </label>
                   <label class="dxyz"><i class="icon-duanxinyanzheng"></i><input type="text" name="code_mobile1" placeholder="手机验证码" class="form-input" id="code_mobile1" onchange="vphonecodepcregist(2,'code1','code_mobile1','phoneno1',this)"></label>
                  <span class="getcode2" id="mobilebid1">获取短信验证码</span><span id="mobileid1" class="getcode2" style="display:none;"></span>
                    
                    <input id="refid" type="hidden" value="0">
                    <label><i class="icon-mima1"></i><input type="text" name="nickname" id="nickname" placeholder="设置昵称" class="form-input"></label>
                    <label><i class="icon-mima1"></i><input type="password" name="pwd1" id="pwd1" placeholder="设置登录密码" class="form-input"></label>

                    
                     <label><i class="icon-tuijian"></i><input type="text" name="newRfeence" id="newRfeence" placeholder="请填写推荐码(必填)" class="form-input"></label>
                    <div class="login-menu"><button type="button" class="btn-red JSregister"  id="regbutton">注册</button></div>
                    <div class="login-info">
                        注册即代表<br>我同意<a href="/protocol.html?callindex=zcxy">《注册协议》</a>、<a href="/protocol.html?callindex=hgtzrsm">《合格投资人申明》</a>、<a href="/protocol.html?callindex=fxjss">《风险揭示书》</a>
                    </div>
                </div>
            </div>
        </div>

      <Sidebar></Sidebar>
      <MyFoot></MyFoot>
  </div>
</template>

<script>
import MyHead from '@/components/myhead'
import MyFoot from '@/components/myfoot'
import Sidebar from '@/components/sidebar'
// swiper
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';

export default {
  components: {
    MyHead,MyFoot,Sidebar
  },
  name: 'register',
  data () {
    return {
        
    }
  },
  methods:{

  },
  created(){

  },
  mounted(){

  }
}
</script>

<style scoped lang="scss">
    .inner-page-content-wrap {
        width: 1180px;
        height: 815px;
        margin: 0 auto;
        padding-top: 175px;
        padding-bottom: 120px;
        text-align: left;
        .reg-left {
            float: left;
            background: url(/static/img/img-reg.jpg) 100px 0 no-repeat;
            width: 780px;
            height: 520px;
        }
        .login-right {
            float: right;
            width: 390px;
            border: 1px solid #ddd;
            padding: 25px;
            .login-title {
                height: 37px;
                padding-bottom: 20px;
                border-bottom: 1px solid #ddd;
                .title-name {
                    font-weight: 700;
                    color: #333;
                    float: left;
                }
                .title-link {
                    float: right;
                    a {
                        color: #566B96;
                        font-size: 14px;
                    }
                }
            }
            .login-cont {
                margin-top: 40px;
                position: relative;
                text-align: left;
                .error-msg {
                    position: absolute;
                    height: 30px;
                    overflow: hidden;
                    font-size: 14px;
                    color: red;
                    line-height: 30px;
                    margin-top: -30px;
                    i {
                        font-size: 14px;
                        display: inline-block;
                        margin-right: 6px;
                    }
                }
                label {
                    line-height: 45px;
                    height: 45px;
                    border: 1px solid #ddd;
                    display: block;
                    margin-bottom: 20px;
                    padding-left: 10px;
                    i {
                        color: #DDD;
                    }
                    input {
                        border: none;
                        font-size: 14px;
                        height: 24px;
                        line-height: 24px;
                        padding: 22px 0 22px 10px;
                        vertical-align: top;
                        background: transparent;
                    }
                }
                #mobilebid1{
                    position: absolute;
                    right: 0;
                    top: 130px;
                    background: #566B96;
                    text-align: center;
                    line-height: 47px;
                    cursor: pointer;
                    display: inline-block;
                    width: 145px;
                    height: 45px;
                    background: #566B96;
                    color: #fff;
                    line-height: 47px;
                    text-align: center;
                }
            }
                label.dxyz {
                    width: 180px;
                    input {
                        width: 150px;
                    }
                }
        }
    }
    .login-info {
        color: #999;
        font-size: 12px;
        margin-top: 5px;
        line-height: 20px;
        a {
            color: #566B96;
        }
    }


.btn-red {
    border: none;
    width: 100%;
    height: 44px;
    background: #FF2C3C;
    display: block;
    color: #fff;
    font-size: 14px;
    font-weight: 700;
}
.btn-red:hover {
    opacity: .9;
}
.imgcode2 {
    top: 70px;
}
</style>
