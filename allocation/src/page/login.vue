<template>
  <div class="login">
      <!-- 头部 -->
      <MyHead></MyHead>
      
        <div class="inner-page-content-wrap clearfix">
            <div class="reg-left"> </div>
              <div class="login-right">
                  <div class="login-title clearfix">
                      <div class="title-name">登录创盈中心</div>
                      <div class="title-link"> <router-link to="/register">免费注册</router-link></div>
                  </div>
                  <div class="login-cont">
                    
                      <label><i class="icon-shouji1"></i><input id="mobile1" type="text" name="mobile1" placeholder="11位手机号码"></label>
                      <label><i class="icon-duanxinyanzheng"></i><input id="password1" type="password" name="password1" placeholder="登录密码"></label>
                      <div class="forget-code"> <router-link to="forgetpassword">忘记密码</router-link></div>
                      <div class="login-menu"><button type="button" id="btlogin" class="btn-red JSlogin" >登录</button></div>
                      <div class="third-part-login-wrap">
                        
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
  name: 'login',
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
            width: 348px;
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
                .forget-code {
                    text-align: right;
                    a {
                        color: #566B96;
                        font-size: 14px;
                        cursor: pointer;
                    }
                }
                .login-menu {
                    margin-top: 40px;
                    .btn-red {
                      border: none;
                        color: #fff;
                        font-size: 14px;
                        font-weight: 700;
                        width: 100%;
                        height: 44px;
                        background: #FF2C3C;
                        display: block;
                    }
                }
            }
        }
  }
</style>
