<template>
  <div class="forgetpassword">
      <!-- 头部 -->
      <MyHead></MyHead>
      
            <div class="inner-page-content-wrap clearfix">
                <div class="center">
                    <div class="forget-title">找回登录密码</div>
                    <div class="forget-cont">
                        <div class="login-cont">
                            <div style="display:none" class="error-msg"><i class="icon-jinggao"></i><span>密码错误</span></div>
                            <label><i class="icon-shouji1"></i><input id="_phoneno2" type="text" name="_phoneno2" placeholder="11位手机号码"></label>
                        
                            <label class="dxyz">
                            <i class="icon-duanxinyanzheng"></i><input id="_code2" type="text" name="_code2" placeholder="验证码" onchange="validatecodepcregist(1,'_code2',this)">
                            <!-- <span class="imgcode2"><img src="/tools/verify_code.ashx" onclick="ToggleCode(this, '/tools/verify_code.ashx');return false;" class="ivc"></span> -->
                            </label>

                            <label class="dxyz"><i class="icon-duanxinyanzheng"></i><input type="text" name="_code_mobile2" placeholder="手机验证码" class="form-input" id="_code_mobile2" onchange="vphonecodepcregist(2,'_code2','_code_mobile2','_phoneno2',this)"></label>
                            <span class="getcode2" id="mobilebidss">获取短信验证码</span><span id="mobileidss" class="getcode" style="display:none;"></span>
                    
                            <label><i class="icon-mima1"></i><input type="password" name="pwd" id="_findpwd1" placeholder="请输入新密码" class="form-input"></label>
                            <label><i class="icon-mima1"></i><input type="password" name="pwd2" id="_findpwd2" placeholder="确认新密码" class="form-input"></label>
                            <div class="login-menu"><button type="button" class="btn-red JSsubmit" id="btfindpwd" >确认</button></div>
                            <div class="forget-info">如您无法收到短信，请联系客服：<span class="color-black6 font-bold">0755-28896306</span></div>
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
  name: 'forgetpassword',
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
        margin: 0 auto;
        padding-top: 175px;
        padding-bottom: 120px;
        text-align: left;
        .center {
            text-align: center;
            .forget-title {
                font-size: 16px;
                color: #333;
                font-weight: 700;
                border-bottom: 1px solid #E5E5E5;
                padding-bottom: 20PX;
                margin-bottom: 50px;
                text-align: left;
            }
        }
        .forget-cont {
            width: 356px;
            margin: 0 auto;
            .login-cont {
                margin-top: 40px;
                position: relative;
                text-align: left;
                label {
                    line-height: 45px;
                    height: 45px;
                    border: 1px solid #ddd;
                    display: block;
                    margin-bottom: 20px;
                    padding-left: 10px;
                    input {
                        border: none;
                        font-size: 14px;
                        height: 44px;
                        line-height: 24px;
                        padding: 10px 0;
                        padding-left: 10px;
                        vertical-align: top;
                        background: transparent;
                    }
                    i {
                        color: #DDD;
                    }
                }
                .getcode2 {
                    position: absolute;
                    right: 0;
                    width: 145px;
                    height: 45px;
                    display: block;
                    top: 130px;
                    color:#fff;
                    background: #566B96;
                    text-align: center;
                    line-height: 45px;
                    cursor: pointer;
                }
                label.dxyz {
                    width: 180px;
                }
                .error-msg {
                    position: absolute;
                    height: 30px;
                    overflow: hidden;
                    font-size: 14px;
                    color: red;
                    line-height: 30px;
                    margin-top: -30px;
                }
                .login-menu {
                    margin-top: 40px; 
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
                }
                .forget-info {
                    color: #999;
                    padding-top: 20px;
                    font-size: 14px;
                    text-align: center;
                    .color-black6 {
                        color: #666;
                        font-weight: 700;
                    }
                }
            }
        }
    }
</style>
