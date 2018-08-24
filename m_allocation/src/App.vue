<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{
     box-sizing: border-box;
}
i{
    font-style: normal;
}
input:-webkit-autofill { box-shadow: 0 0 0 1000px white inset !important;}
  .main,.view{
    
  }
  .font-orange {
        color: #FCAE52;
  }
  .font-red {
      color: #ee3535;
  }
  .font-green {
      color: #5DCD0B;
  }
  .font-size12 {
      font-size: 12px;
  }
  .font-blue {
        color: #3182AC;
    }
    .font-grayD {
    color: #DDD;
}
  .font-size14 {
        font-size: 14px;
    }
  .fb {
      font-weight: 700;
  }
  .font-size16 {
      font-size: 16px;
  }
  .font-gray3 {
      color: #333;
  }
  .font-gray6 {
        color: #666;
    }
  .fl {
        float: left;
    }
    .fr {
        float: right;
    }
  .mt0 {
        margin-top: 0;
    }
    .font-size14 {
        font-size: 14px;
    }

    .clearfix:after {
        content: ".";
        display: block;
        overflow: hidden;
        height: 0;
        clear: both;
        visibility: hidden;
    }
    /* 警告 */
    .error{
    display: none;
    position: fixed;
    bottom: 1.4rem;
    left: 0;
    right: 0;
    font-size: 14px;
    color: #fff;
    text-align: center;
    z-index: 30;
}
.err{
    font-size: 14px;
    color: #fff;
    text-align: center;
    height: 100%;
    background: #333;
    margin: auto auto;
    padding: 10px 20px;
    line-height: 20px;
    border-radius: 10px;
    opacity: .9;
}
</style>
