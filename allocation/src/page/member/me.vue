<template>
  <div class="me">
            <div class="person-info clearfix">
                <div>
                    <a href="/member/avator.html"><img src="/static/img/mrt.jpg"></a> 
                </div>
                <div class="middle-wrap">
                    <span class="account-num">176****8075</span>
                    <div>
                        <router-link to="/member/recharge" class="button button1">充值</router-link>
                        <router-link to="/member/drawings" class="button">提现</router-link>
                    </div>
                </div>
            </div>
  </div>
</template>

<script>
export default {
  name: 'me',
  data () {
    return {
    }
  },
  methods:{
  },
  computed:{
      
  },
  created(){

  },
  mounted(){

  }
}
</script>

<style scoped lang="scss">
    .person-info {
        position: relative;
        height: 100px;
        background-color: #464F63;
        margin-bottom: 22px;
        color: #fff;
        img {
            border-radius: 50%;
            width: 60px;
            height: 60px;
            position: absolute;
            margin: 20px 40px;
            border: 2px solid #fff;
            box-shadow: 0 0 30px rgba(0,0,0,.4);
        }
        .middle-wrap {
            width: 810px;
            height: 65px;
            position: absolute;
            margin-top: 20px;
            margin-left: 130px;
            font-size: 0;
            span {
                position: absolute;
                bottom: 30px;
                top: 50%;
                margin-top: -9px;
                left: 0;
                font-size: 18px;
            }
        }
        .button {
            width: 128px;
            height: 44px;
            text-align: center;
            line-height: 44px;
            border: 1px solid #fff;
            cursor: pointer;
            font-size: 14px;
            position: absolute;
            right: 0;
            color: #fff;
            margin-top: 10px;
        }
        .button1 {
            margin-right: 138px;
            background-color: #FF4D4D;
            border: 1px solid #FF4D4D;
        }
    }
</style>
