<template>
  <div class="ceshi">
    <MyScroll :on-refresh="onRefresh" :on-infinite="onInfinite" :dataList="scrollData">
           <div class="main">
               sd
           </div>
    </MyScroll>
  </div>
</template>
<script>
import MyScroll from '@/components/scroll';

export default{
    name:'ceshi',
    components:{
        MyScroll
    },
 data () {
    return {
        scrollData:[
            {id:0,text:'adffs'},
            {id:1,text:'adffs'},
            {id:2,text:'adffs'},
            {id:3,text:'adffs'},
        ]
    }
  },
  mounted : function(){
  },
  methods: {
      a(){
          console.log(1)
      },
      onRefresh (done) {
        // 执行刷新方法
        a()
        done() // call done
      },
// 加载更多方法
      onInfinite () {
        var _this = this
        let more = _this.$el.querySelector('.load-more')
       b()
      },    
  }
}
</script>

<style scoped lang="scss">

</style>
