<template>
  <div class="myfoot">
      <ul>
          <li :class="{active:myfootactive==index}" v-for="(item,index) in nav" :key="index">
              <a @click="jump(item)" href="javascript:;">
                  <i :class="item.icon"></i>
                  {{item.text}}
              </a>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'myfoot',
  data () {
    return {
        myfootactive:'',
        nav:[
            {id:0,text:'首页',href:'/',icon:'iconfont icon-shouye',},
            {id:1,text:'我要操盘',href:'/trade',icon:'iconfont icon-64',},
            {id:2,text:'我要交易',href:'/trade/mytrade',icon:'iconfont icon-jiaoyi',},
            {id:3,text:'账户中心',href:'/personcenter',icon:'iconfont icon-zhanghuchongzhi-xiugai',},
        ]
    }
  },
  created(){
      this.myfootactive=localStorage.getItem('myfootactive')?localStorage.getItem('myfootactive'):0;
  },
  methods:{
      jump(e){
          localStorage.setItem('myfootactive',e.id)
          this.myfootactive=localStorage.getItem('myfootactive');
          this.$router.push(e.href);
      }
  }
}
</script>

<style scoped lang="scss">
    .myfoot{
        height: 1rem;
        background: #f5f5f5;
        border-top: 1px solid #dfdfdf;
        position: fixed;
        width: 100%;
        bottom: 0;
        left: 0;
        ul{
            height: 100%;
            display: flex;
            justify-content: space-between;
            line-height: 0.3rem;
            li.active{
                i,a{
                    color: red;
                }
            }
            li{
                width: 25%;
                height: 100%;
                text-align: center;
                color: #666;
                i{
                    display: block;
                    line-height: 35px;
                    font-size: 30px;
                }
                a{
                    color: #666;
                    display: inline-block;
                    font-size: 0.2rem;
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
    
</style>
