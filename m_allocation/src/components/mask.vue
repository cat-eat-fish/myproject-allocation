<template>
  <div class="mask">
        <div class="mask_body" type="dialog">
            <div style="" class="mask_main">
                <span class="mask_load"></span>
                <span class="mask_text">{{text}}</span>
                <span class="mask_setwin"></span>
                <span class="mask_botton"></span>
            </div>
            <div class="mask_border"></div>
        </div>
  </div>
</template>

<script>
export default {
  name: 'mymask',
  props:{
      text:{
          type:String,
          default:'加载中...'
      }
  },
  data () {
    return {
        
    }
  },
}
</script>

<style scoped lang="scss">
    .mask{
        display: block;
        z-index:100; 
        background-color:rgba(0,0,0,0.3); 
        position: fixed; 
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        filter:alpha(opacity=30);
        .mask_body{
            position: fixed;
            z-index: 100; 
            width: auto; 
            height: auto; 
            margin-left: -91.5px; 
            top: 311px; 
            left: 50%;
            .mask_main{
                position: relative;
                background-color: rgb(255, 255, 255); 
                z-index: 100; 
                height: 45px;
                width: 183px;
            }
        }
        .mask_load{
            display: inline-block;
            width: 40px;
            height: 40px;
            top: 3px;
            position: absolute;
            left: 11px;
            background: url(../assets/img/load2.gif) no-repeat;
            background-size: 100%;
        }
        .mask_text {
            padding-left: 55px;
            float: left;
            line-height: 25px;
            word-break: break-all;
            overflow: hidden;
            font-size: 14px;
            display: inline-block;
            width: 100%;
            color: #333;
            margin-top: 11px;
        }
        .mask_setwin{
            position: absolute;
            right: 10px;
            top: 10px;
            font-size: 0;
        }
        .mask_border{
            z-index: 99; 
            background-color: rgba(0,0,0,0.3); 
            opacity:1;
            top: -6px; 
            left: -6px; 
            width: 195px; 
            height: 57px;
            border-radius: 5px;
            position: absolute;
        }
    }
</style>
