<template>
  <div class="contactus">
        <div class="wrap">
            <div class="about-sec">
                <h1 class="market-title">
                    联系我们
                    <span class="line"></span>
                </h1>
                <div class="contact-form">
                    <p>您好，欢迎来到创盈中心如果您在使用创盈中心操盘的过程中有任何疑问请在下方留言。</p>
                    <div class="contact-inp-group clearfix">
                        <div class="contact-inp fl">
                            <label>电话：</label>
                            <input type="text" class="inp">
                        </div>
                        <div class="contact-inp fr">
                            <label>姓名：</label>
                            <input type="text" class="inp">
                        </div>
                    </div>
                    <div class="contact-inp-group clearfix">
                        <div class="contact-inp fl">
                            <label>邮箱：</label>
                            <input type="text" class="inp">
                        </div>
                        <div class="contact-inp fr">
                            <label>地址：</label>
                            <input type="text" class="inp">
                        </div>
                    </div>
                    <div class="contact-inp-group clearfix">
                        <div class="contact-inp fl">
                            <label>内容：</label>
                            <textarea class="textarea"></textarea>
                        </div>
                    </div>
                    <a href="javascript:;" class="contact-submit">提交</a>
                </div>                
            </div> 
        </div>
        <Map :CityInfo="this.CityInfo"></Map>
        <!-- <div class="contact-map">
            <div class="warp">
                <h2>联系我们</h2>
                <span class="line"></span>
                <p>免费咨询热线</p>
                <p class="phone">电话：0755-28896306</p>
            </div>
        </div> -->
  </div>
</template>

<script>
import Map from "@/components/map.vue"
export default {
    components:{
        Map
    },
  name: 'contactus',
  data () {
    return {
        CityInfo: {
            longitude: 114.31,  //经度
            latitude:30.52      //维度
        },
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
    .fl {
        float: left;
        text-align: right;
    }
    .fr {
        float: right;
    }
    .wrap {
        margin: 0 auto;
        text-align: left;
        width: 1180px;
        .about-sec {
            margin-top: 50px;
            .market-title {
                font-size: 24px;
                text-align: center;
                margin-bottom: 50px;
                .line {
                    display: block;
                    margin: 0 auto;
                    height: 1px;
                    background: #d9d9d9;
                    width: 55px;
                    margin: 20px auto 0;
                }
            }
            .contact-form {
                width: 790px;
                // height: 380px;
                margin: 0 auto;
                 p {
                    color: #666;
                    font-size: 14px;
                    text-indent: 20px;
                    margin-bottom: 30px;
                }
                .contact-inp-group {
                    margin-bottom: 20px;
                    height: 47px;
                }
                .contact-inp-group:nth-last-of-type(1){
                    height: 122px;
                }
                .contact-inp {
                    position: relative;
                    label {
                        position: absolute;
                        color: rgba(0,0,0,.25);
                        font-size: 14px;
                        line-height: 45px;
                        top: 0;
                        left: 10px;
                    }
                    .inp {
                        width: 382px;
                        height: 47px;
                        line-height: 25px;
                        border: 1px solid #e8e8e8;
                        padding: 10px 10px 10px 60px;
                        color: #666;
                    }
                    .textarea {
                        border: 1px solid #e8e8e8;
                        padding: 10px 10px 10px 60px;
                        height: 122px;
                        font-size: 16px;
                        width: 790px;
                        color: #666;
                    }
                }
                .contact-submit {
                    width: 50%;
                    margin: 0 auto 30px;
                    display: block;
                    background: #cd3733;
                    color: #fff;
                    font-size: 16px;
                    height: 50px;
                    line-height: 50px;
                    text-align: center;
                    border-radius: 10px;
                }
            }
        }
    }
    .contact-map {
        background: url(/static/img/contact_bg.jpg) center top no-repeat;
        height: 458px;
        color: #fff;
        font-size: 18px;
        .warp {
            width: 1180px;
            margin: 0 auto;
            text-align: left;
        }
        h2 {
            padding-top: 260px;
            font-size: 24px;
        }
        .line {
            width: 30px;
            margin: 22px 0;
            display: inline-block;
            height: 1px;
            background: #fff;
        }
        .phone {
            font-size: 24px;
            margin-top: 10px;
        }
    }
</style>
