<template>
    <div class="newsdetails">
        <MyHead title="新闻详情"></MyHead>
        <div class="main">
            <div class="module-border">
                <div class="title">
                    <div class="fb font-size14 font-navline" ng-bind="list.title">不要失去信心，哪怕行情再差！</div>
                    <div class="font-size12 font-gray9" ng-bind="list.postTime"> 2018-08-17 09:24:13</div>
                </div> 
            </div>
            <div class="module-spaceaside"> <div class="zunjing font-size12 font-gray6"></div><p class="font-size12 font-gray6" ng-bind-html="list.content"></p><p style="text-indent:2em;">
	<span style="font-size:14px;">古有“扶不起的阿斗”，今有“扶不起的a股”。a股三大股指全线重挫。要知道，抗日战争胜利73周年啊，a股这熊样真不怕日本人笑话啦？还要不要脸？</span>
</p>
<p style="text-indent:2em;">
	<br>
</p>
<p style="text-indent:2em;">
	<span style="font-size:14px;"><br>
</span>
</p>
<p style="text-indent:2em;">
	<span style="font-size:14px;">事实上，a股真的不要脸了！总体来看，沪指收盘下跌2.07%，收报2723.26点；深成指下跌2.32%，收报8581.18点；创业板指下跌2.63%，收报1478.51点，再度失守1500点大关。三大指数的大跌让股民心中顿觉“人间没有真爱”了。</span>
</p>
<p style="text-indent:2em;">
	<br>
</p>
<p style="text-indent:2em;">
	<span style="font-size:14px;"><br>
</span>
</p>
<p style="text-indent:2em;">
	<span style="font-size:14px;">两市合计成交仅有2780亿元，继昨天收出地量之后再收地量，这大a股的脸皮真不是一般的厚啊！行业板块全线下挫，个股自然是跌多涨少，沪深两市均仅有101只股票翻红，可以说个股已经哀鸿遍野了！资金流向方面，两市资金继续流出，其中沪股通净流出7.8亿，深股通净流出6.09亿。</span>
</p>
<p style="text-indent:2em;">
	<br>
</p>
<p style="text-indent:2em;">
	<span style="font-size:14px;"><br>
</span>
</p>
<p style="text-indent:2em;">
	<span style="font-size:14px;">从盘面上看，尽管有28只股票涨停，但是市场中已经毫无热点可言。军工、雄安早盘出有拉升态势，但是由于市场太差，这两个尝试反弹的板块迅速回落。而国资改革概念虽然异动，但整体上较为散落，并没有良好的板块效应。三大股指均呈现单边下跌的颓势，热点题材全军覆灭。强势股已经大幅减少，就算是高升控股走出4连板也略显牵强，这也是市场除新股以外连板的最高高度。</span>
</p>
<p style="text-indent:2em;">
	<br>
</p>
<p style="text-indent:2em;">
	<span style="font-size:14px;"><br>
</span>
</p>
<p style="text-indent:2em;">
	<span style="font-size:14px;">虽然a股再度被“扶不起”，但是其是否就此堕入万丈深渊了呢？那倒不一定！虽然就大跌，盘面上大幅调整，但成交量是地量，这说明了抛压盘并不是很严重！这也说明了大家不想割肉，所以导致了市场交易情绪的低迷。此外，指数虽然大跌，但个股的跌幅不大，跌幅榜仅仅有十余只跌停股，跌停潮并没有上演所以这并不会给市场造成恐慌。</span>
</p>
<p style="text-indent:2em;">
	<br>
</p>
<p style="text-indent:2em;">
	<span style="font-size:14px;"><br>
</span>
</p>
<p style="text-indent:2em;">
	<span style="font-size:14px;">因此，在接下来的交易日若有积极的资金进场，充当点火的作用，那么行情还是可以稳一稳的，甚至上演一个小反弹。这个点火资金也将重新点燃市场的交易热情。当然，仅仅靠点火资金还不行，还需要增量资金进场活跃交易氛围。</span>
</p>
<p style="text-indent:2em;">
	<br>
</p>
<p style="text-indent:2em;">
	<span style="font-size:14px;"><br>
</span>
</p>
<p style="text-indent:2em;">
	<span style="font-size:14px;">出现上述情况的难度或许有点大，哪怕现在土耳其里拉暴跌风暴逐渐减弱，外围的不利消息正在消除。可是，梦想还是要有的，万一真的反弹了呢？我想大a股还是要脸的吧，就是一些狗庄不要脸罢了！</span>
</p> <p></p> </div>
        </div>
    </div>
</template>

<script>
import MyHead from "@/components/myhead"
export default {
    components:{
        MyHead
    },
  name: 'newsdetails',
  data () {
    return {

    }
  },
  methods:{

  },
  created(){
      let id=this.$route.query.id;
    //   axiox请求数据

  }
}
</script>

<style scoped lang="scss">
.main{
    padding-bottom: 1.2rem;
}
.module-border {
    margin-left: 15px;
    border-bottom: 1px solid #E5E5E5;
    .title {
        line-height: 25px;
        padding-top: 20px;
        .font-navline {
            color: #3B4252;
        }
    }
}
.module-spaceaside {
    padding: 0 15px;
    border-bottom: none;
    .zunjing {
        line-height: 50px;
        padding-bottom: 10px;
    }


}

</style>
