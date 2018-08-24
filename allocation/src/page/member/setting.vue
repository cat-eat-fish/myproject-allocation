<template>
  <div class="settings">
        <Me></Me>
        <div class="setting">
                <div class="set-title">安全设置</div>
                <table class="set-table">
                    <tbody>

                        <tr>
                            <td class="set-name"><i class="icon-yonghu"></i>昵称</td>
                            <td class="set-value">{{mydata.nickname}}</td>
                            <td class="set-update"><a href="JavaScript:void(0)" @click="ShowChangeN" id="editname">修改</a> </td>
                        </tr>
                        <tr>
                            <td class="set-name"><i class="icon-shimingrenzheng"></i>实名认证</td>
                            <td class="set-value">{{mydata.idstate}}</td>
                            <td class="set update" id="name_rz"><a href="javascript:;" @click="ShowChangeId">立即认证</a></td>
                        </tr>
                        <tr>
                            <td class="set-name"><i class="icon-yinxingleizhifu"></i>银行卡绑定</td>
                            <td class="set-value">未绑定</td>
                            <td class="set-update"><router-link class="bindcard" id="A1" to="/member/addbank">立即绑定</router-link></td>
                        </tr>
                        <tr>
                            <td class="set-name"><i class="icon-shouji1"></i>手机绑定</td>
                            <td class="set-value">{{mydata.telephone}}</td>
                            <td class="set-update"><a class="JSmodifyTel" id="editphone">修改</a></td>
                        </tr>
                        <tr>
                            <td class="set-name"><i class="icon-mima1"></i>登录密码</td>
                            <td class="set-value">已设置</td>
                            <td class="set-update"><a class="JSmodifyPwd" id="editpwd">修改</a></td>
                        </tr>
                        
                        <tr>
                            <td class="set-name"><i class="icon-zhifumima"></i>提款密码</td>
                            <td class="set-value">未设置</td>
                            <td class="set-update"><a class="JSmodifyDrawPwd" id="setpasspwd">立即设置</a></td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>

            <!-- 修改昵称 -->
            <div id="easyDialogBox" style="">
                <div id="dialogNickname" style="" class="modal-body">
                    <div class="content-wrap content-box3">
                        <a @click="close" class="box-close">x</a>
                        <h3>修改昵称</h3>
                        <form>
                            <!-- <div style="" class="error-msg modal-error"><i class="icon-jinggao"></i><span>请输入验证码</span></div> -->
                            <label for="realName">
                                <i  class="iconfont icon-tubiao211"></i>
                                <input id="_nickname" v-model="changedata.nickname" type="text" name="_nickname" placeholder="请输入新昵称">
                            </label>
                            <div class="err">新昵称不能为空</div>
                            <div class="waring">昵称格式不正确</div>
                            <button type="button" class="JSbtnsubmit" @click="setNickname">确认</button>
                            <!-- <div style="" class="modal-error error-msg"><i class="icon-jinggao"></i><span>请输入验证码</span></div> -->
                        </form>
                    </div>
                </div>
            </div>
             <!-- 实名认证 -->
            <div id="tid">
                <div id="dialogNickname" style="" class="modal-body">
                    <div class="content-wrap content-box3">
                        <a @click="close" class="box-close">x</a>
                        <h3>实名认证</h3>
                        <form>
                            <!-- <div style="" class="error-msg modal-error"><i class="icon-jinggao"></i><span>请输入验证码</span></div> -->
                            <label for="realName">
                                <i  class="iconfont icon-tubiao211"></i>
                                <input id="_nickname" v-model="changedata.name" type="text" name="_nickname" placeholder="请输入姓名">
                            </label>
                            <label for="realName">
                                <i  class="iconfont icon-tubiao211"></i>
                                <input id="_nickname" v-model="changedata.tid" type="text" name="_id" placeholder="请输入身份证号">
                            </label>
                            <div class="err">姓名格式不正确</div>
                            <div class="waring">身份证号格式不正确</div>
                            <button type="button" class="JSbtnsubmit" @click="setTid">确认</button>
                            <!-- <div style="" class="modal-error error-msg"><i class="icon-jinggao"></i><span>请输入验证码</span></div> -->
                        </form>
                    </div>
                </div>
            </div>
            <!-- 修改绑定手机 -->
            <div id="tid">
                <div id="telephone" style="" class="modal-body">
                    <div class="content-wrap content-box3">
                        <a @click="close" class="box-close">x</a>
                        <h3>修改绑定手机</h3>
                        <form>
                            <!-- <div style="" class="error-msg modal-error"><i class="icon-jinggao"></i><span>请输入验证码</span></div> -->
                            <label for="realName">
                                <i  class="iconfont icon-tubiao211"></i>
                                <input id="_nickname" v-model="changedata.name" type="text" name="_nickname" placeholder="请输入姓名">
                            </label>
                            <label for="realName">
                                <i  class="iconfont icon-tubiao211"></i>
                                <input id="_nickname" v-model="changedata.tid" type="text" name="_id" placeholder="请输入身份证号">
                            </label>
                            <div class="err">姓名格式不正确</div>
                            <div class="waring">身份证号格式不正确</div>
                            <button type="button" class="JSbtnsubmit" @click="setTid">确认</button>
                            <!-- <div style="" class="modal-error error-msg"><i class="icon-jinggao"></i><span>请输入验证码</span></div> -->
                        </form>
                    </div>
                </div>
            </div>
  </div>
</template>

<script>
import Me from "@/page/member/me"
export default {
    components:{
        Me
    },
  name: 'setting',
  data () {
    return {
        mydata:{
            nickname:'asd',
            telephone:'18434367522',
            name:'',
            tid:'',
            idstate:'',
        },
        changedata:{
            nickname:'',
            telephone:'18434367522',
            name:'',
            tid:'',
        }
    }
  },
  methods:{
      ShowChangeN(){
          this.changedata.nickname='';
          document.querySelector('#easyDialogBox .err').style.cssText="display:none"
          document.querySelector('#easyDialogBox .waring').style.cssText="display:none"
          document.querySelector('#easyDialogBox').style.cssText="display:block"
      },
      setNickname(){
            if(this.changedata.nickname=='' || this.changedata.nickname.length==0){
                document.querySelector('.err').style.cssText="display:block"
                document.querySelector('.waring').style.cssText="display:none"
                return false;
            }else if(this.changedata.nickname.length>=18){
                document.querySelector('.err').style.cssText="display:none"
                document.querySelector('.waring').style.cssText="display:block"
                return false;
            }else{
                this.mydata.nickname=this.changedata.nickname;
                document.querySelector('#easyDialogBox').style.cssText="display:none"
            }
      },
      close(){
          document.querySelector('#easyDialogBox').style.cssText="display:none"
          document.querySelector('#tid').style.cssText="display:none"
      },
      ShowChangeId(){
          document.querySelector('#tid .err').style.cssText="display:none"
          document.querySelector('#tid .waring').style.cssText="display:none"
          this.changedata.name='';
          this.changedata.tid='';
            document.querySelector('#tid').style.cssText="display:block"
      },
      setTid(){
            var patname=/[\u4e00-\u9fa5a-zA-Z]{2,10}/;
            var patid=/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
            if(!patname.test(this.changedata.name)){
                document.querySelector('#tid .err').style.cssText="display:block"
                document.querySelector('#tid .waring').style.cssText="display:none"
                return false;
            }else if(!patid.test(this.changedata.tid)){
                document.querySelector('#tid .err').style.cssText="display:none"
                document.querySelector('#tid .waring').style.cssText="display:block"
                return false;
            }else{
                this.mydata.name=this.changedata.name;
                this.mydata.tid=this.changedata.tid;
                this.mydata.idstate=this.mydata.name;
                document.querySelector('#tid').style.cssText="display:none"
                document.querySelector('#name_rz a').style.cssText="display:none"
            }
      }
  },
  computed:{
      
  },
  created(){

  },
  mounted(){
      if(this.mydata.idstate==''){
          this.mydata.idstate='未认证'
      }
  }
}
</script>

<style scoped lang="scss">
    .box-close{
        cursor: pointer;
    }
    .settings{
        padding-top: 170px;
        width: 980px;
        padding-bottom: 120px;
    }
    .setting {
        background-color: #FFF;
        border: 1px solid #DDD;
        padding: 40px;
        .set-title {
            font-size: 16px;
            font-weight: 700;
            color: #000;
            width: 100%;
            padding-bottom: 20px;
            border-bottom: 1px solid #DDD;
        }
        .set-table {
            font-size: 14px;
            width: 100%;
            a {
                font-size: 14px;
                color: #566B96;
            }
            td {
                border-bottom: 1px dotted #DDD;
                width: 20%;
                text-align: left;
                padding-left: 100px;
                height: 52px;
                vertical-align: middle;
            }
            td.set-name {
                border-top: 1px solid #FFF;
                background-color: #F3F3F3;
                width: 20%;
                color: #999;
                font-size: 14px;
                text-align: left;
                padding-left: 40px;
            }
            td.set-value {
                width: 35%;
                padding-left: 40px;
                font-weight: 700;
            }
        }
    }
    // 修改昵称
    #easyDialogBox{
        display:none;margin-top: -118px; margin-left: -240px; padding: 0px; border: none; z-index: 10000; position: fixed; top: 50%; left: 50%; 
    }
    #tid{
        display:none;margin-top: -118px; margin-left: -240px; padding: 0px; border: none; z-index: 10000; position: fixed; top: 50%; left: 50%; 
    }
    .modal-body {
        font-size: 12px;
        background: #fff;
        .content-wrap {
            margin: 0 30px;
            padding: 30px 0;
            width: 340px;
            text-align: left;
            position: relative;
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
            }
            h3 {
                color: #556B96;
                border: none;
                margin-bottom: 10px;
            }
            .err{
                color: red;font-size: 12px;display: none;
            }
            .waring{
                color: burlywood;font-size: 12px;display: none;
            }
            label {
                display: block;
                border: 1px solid #E5E5E5;
                position: relative;
                margin-bottom: 20px;
                font-size: 14px;
                height: 42px;
                line-height: 42px;
                i {
                    color: #999;
                    margin-left: 15px;
                    font-size: 14px;
                }
                input {
                    width: 80%;
                    border: none;
                    height: 22px;
                    line-height: 22px;
                    padding: 10px 0;
                    padding-left: 10px;
                    background: transparent;
                }
            }
        }
        .content-box3 {
            width: 420px;
            .modal-error {
                left: 30px;
                top: 70px;
            }
            button {
                border: 0;
                background-color: #566B96;
                color: #FFF;
                text-align: center;
                font-size: 14px;
                height: 46px;
                width: 170px;
                padding: 0;
                margin: 40px auto 0;
                display: block;
            }
        }
    }
</style>
