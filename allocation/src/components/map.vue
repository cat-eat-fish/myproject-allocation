<template>
    <div class="map">
            <!--百度地图容器-->
            <div id="baiduMap"></div>
    </div>
</template>
<script>
export default {
  name: 'mymap',
  props:['CityInfo'],
  data() {
    return {
        // CityInfo: {
        //     longitude: 114.31,  //经度
        //     latitude:30.52      //维度
        // },
    }
  },
   mounted(){
      this.initBaiduMap()
  },
  methods: {
    initBaiduMap() {
      let that = this
      let script = document.createElement("script")
      script.src = "http://api.map.baidu.com/api?v=2.0&ak=zishHhU993mnCRDS3zncmazHuZkIRfti&callback=createMap"
      document.head.appendChild(script)
      window.createMap = () => {
        //创建Map实例
        var map = new BMap.Map("baiduMap"); // 创建Map实例
        map.centerAndZoom(new BMap.Point(this.CityInfo.longitude, this.CityInfo.latitude), 11); // 创建点坐标,初始化地图,设置中心点坐标和地图级别
        map.addControl(new BMap.MapTypeControl()); //添加地图类型控件
        map.addControl(new BMap.ScaleControl({
            anchor: BMAP_ANCHOR_BOTTOM_LEFT
        }));
        map.addControl(new BMap.NavigationControl({
            anchor: BMAP_ANCHOR_BOTTOM_RIGHT
        }));
        map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
        map.enableInertialDragging(); //两秒后开启惯性拖拽
      }
    },
  },
}
</script>
<style scoped lang="scss">
    #baiduMap{
        width: 66%;
        height: 500px;
        margin: 20px auto;
    }
</style>
