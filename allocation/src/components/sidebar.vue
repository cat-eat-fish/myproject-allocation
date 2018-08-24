<template>
  <div class="sidebar">
        <ul class="bot-service">
            <li>
                <div @click="openqq">
                    <i class="iconfont icon-zaixiankefu"></i>在线客服
                </div>
            </li>
            <li v-for="(item,index) in nav" :key="index">
                <div v-if="index!=2 && index!=1  && index!=0">
                    <i :class="item.icon"></i>{{item.text}}
                </div>
                <div v-if="index==0" class="showimg">
                    <i :class="item.icon"></i>{{item.text}}

                    <div class="hideimg">
                        <img src="/static/img/thumb_201712191024349908.jpg" alt="">
                    </div>
                </div>
                <div v-if="index==1" @click="showfrom">
                    <i :class="item.icon"></i>{{item.text}}
                </div>
                <div v-if="index==2" @click="gotop">
                    <i :class="item.icon"></i>{{item.text}}
                </div>
            </li>
            <!-- 意见反馈 -->
            <div id="easyDialogBox" style="">
                <div id="liuyanDialog" style="" class="modal-body">
                    <div class="content-wrap content-box2">
                        <a class="box-close" @click="close">x</a>
                        <h3>填写留言内容</h3>
                        <form name="liuYanForm" class="clearfix">
                            <div style="display: none" class="modal-error toast-error"><i class="icon-jinggao"></i><span></span></div>
                            <label for="msgType" class="JSMsgType">
                                <select name="msgType" id="msgType">
                                    <option value="1">账号及充值问题</option>
                                    <option value="2">交易问题</option>
                                    <option value="3">其他问题</option>
                                    <option value="4">我要投诉</option>
                                    <option value="5">意见反馈</option>
                                </select>
                            </label>
                            <label for="password">
                                <input id="phone" type="text" name="phone" placeholder="请输入手机号"></label>
                            <textarea placeholder="请输入留言内容，我们会尽快给您反馈。" id="procontent" name="procontent"></textarea>
                            <input id="Hiddenid" type="hidden" name="type" value="0">
                            <input id="Hiddenphone" type="hidden" name="type" value="">
                            <input id="Hiddenname" type="hidden" name="type" value="">
                            <input id="Hiddentypeid" type="hidden" name="type">
                            <button type="button" class="JSbtnsubmit" @click="proposal">提交</button>
                        </form>
                    </div>
                </div>
            </div>
            <!-- <li id="wxserv" class="wxs">
                <a><i class="icon-weixin"></i>微信服务</a>
                <div class="wx-ewm" style="display: none;">
                    <div class="wx-tri"></div>
                    <div class="wx-img">
                        <img src="/static/img/thumb_20.jpg">
                    </div>
                </div>
            </li>
            <li><a class="liuyan"><i class="icon-jianyi"></i>意见反馈</a></li>
            <li id="Li2">
                <a class="bx4-a2" target="_blank" href="http://wpa.qq.com/msgrd?v=3&amp;uin=312459408&amp;site=qq&amp;menu=yes"><i class="icon-kefu"></i>在线客服</a>
            </li>
            <li><a ng-click="goTop()" class="backtop" href="#"><i class="icon-less"></i></a></li> -->
        </ul>
  </div>
</template>

<script>
export default {
  name: 'sidebar',
  data () {
    return {
        fk:{
            
        },
      nav:[
        //   {id:0,icon:'iconfont icon-zaixiankefu',text:'在线客服'},
          {id:0,icon:'iconfont icon-weixin',text:'微信服务'},
          {id:1,icon:'iconfont icon-yijianfankui',text:'意见反馈'},
          {id:2,icon:'iconfont icon-shang',text:'回到顶部'}
      ]
    }
  },
  methods:{
      gotop:function(){
        (function smoothscroll(){
            var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
            if (currentScroll > 0) {
                window.requestAnimationFrame(smoothscroll);
                window.scrollTo (0,currentScroll - (currentScroll/5));
            }
        })();
      },
      close:function(){
          document.querySelector('#easyDialogBox').style.cssText="display:none";
      },
      showfrom:function(){
          document.querySelector('#easyDialogBox').style.cssText="display:block";
      },
      proposal:function(){
          console.log(1)
      },
      openqq:function(){
        var qq = 961166897;//获取qq号
        window.open('http://wpa.qq.com/msgrd?v=3&uin='+qq+'&site=qq&menu=yes','_brank');
      }
  }
}
</script>

<style scoped lang="scss">
    .bot-service {
        position: fixed;
        bottom: 100px;
        right: 20px;
        z-index: 10;
        li{
            margin-top: 10px;
            position: relative;
            div:hover{
                background: rgb(49,127,172);
                color:#fff;
            }
            div:hover i{
                color:#fff;
            }
            .showimg{
                position: relative;
            }
            .showimg:hover .hideimg{
                display: block;
            }
            .hideimg{
                display: none;
                position: absolute;
                top: -40px;
                left: -155px;
                background: #317fac;
                width: 145px;
                height: 145px;
                padding: 15px 0 0 15px;
                border-radius: 5px;
                img{
                    display: block;
                    width: 115px;
                }
            }
            div {
                cursor: pointer;
                display: block;
                width: 58px;
                height: 58px;
                background: #FFF;
                border: 1px solid #DDD;
                font-size: 12px;
                text-align: center;
                color: #317FAC;
                i {
                    display: block;
                    font-size: 20px;
                    margin-top: 9px;
                    margin-bottom: 6px;
                    color: #317FAC;
                }
            }
        } 
    }

    // 意见反馈
    #easyDialogBox{
        display: none;
        margin-top: -210px; 
        margin-left: -240px; 
        padding: 0px; border: none; z-index: 10000; position: fixed; top: 50%; left: 50%; 
        .modal-body {
            font-size: 12px;
            background: #fff;
        }
        .content-wrap {
            margin: 0 30px;
            padding: 30px 0;
            width: 340px;
            text-align: left;
            position: relative;
            label {
                display: block;
                border: 1px solid #E5E5E5;
                position: relative;
                margin-bottom: 20px;
                font-size: 14px;
                height: 42px;
                line-height: 42px;
            }
            button {
                font-size: 14px;
                border: none;
                text-align: center;
                width: 100%;
                color: #fff;
                background-color: #FF2626;
                margin-top: 40px;
                height: 44px;
            }
            select,input {
                width: 80%;
                border: none;
                height: 22px;
                line-height: 22px;
                padding-left: 10px;
                background: transparent;
            }
            select{
                width: 100%;
            }
            .box-close {
                position: absolute;
                top: 20px;
                right: 0;
                font-size: 18px;
                height: 30px;
                width: 30px;
                text-align: center;
                display: block;
                line-height: 30px;
                cursor: pointer;
            }
        }
        .content-box2 {
            width: 420px;
            position: relative;
            h3 {
                color: #556B96;
                border: none;
                margin-bottom: 10px;
            }
            .modal-error {
                left: 0;
                top: 56px;
            }
            label {
                margin-bottom: 20px;
                input {
                    width: 90%;
                }
                i {
                    margin-left: 0;
                }
            }
            .mstype-list {
                display: block;
                width: 418px;
                border: 1px solid #566B96;
                position: absolute;
                z-index: 100;
                background-color: #fff;
                top: 0;
                left: 0;
                margin-top: 131px;
                line-height: 0;
                font-size: 0;
                span {
                    display: inline-block;
                    width: 100%;
                    text-align: center;
                    height: 40px;
                    font-size: 14px;
                    overflow: hidden;
                    line-height: 40px;
                }
            }
            textarea {
                width: 100%;
                padding: 10px;
            }
            button {
                border: none;
                width: 170px;
                text-align: center;
                background-color: #566B96;
                display: block;
                margin: 20px auto 0;
                padding: 0;
            }
        }
    }

    
</style>
