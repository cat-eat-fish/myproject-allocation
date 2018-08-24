<template>
  <div class="prompt2">
        <div id="prompt2" class="popup-container " >
        <div class="popup">
            <div class="popup-head">{{title}}</div>
            <div class="popup-body">
                <span>{{content}}</span>
            </div>
            <div class="popup-buttons">
                <button @click="close" class="">取消</button>
                <button  class="font-orange">确定</button>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'myprompt2',
  props:{
      title:{
          type:String,
          default:'提示'
      },
      content:{
          type:String,
          default:'内容'
      }
  },
  data () {
    return {
        
    }
  },
  methods:{
      close(){
          document.querySelector('.popup-container').style.cssText="display:none";
      }
  }
}
</script>

<style scoped lang="scss">
    .popup-container {
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
        background: 0 0;
        display: -webkit-box;
        display: -webkit-flex;
        display: -moz-box;
        display: -moz-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        -moz-justify-content: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        -moz-align-items: center;
        align-items: center;
        z-index: 12;
        visibility: visible;
        width: 100%;
        background-color: rgba(0,0,0,.5);
        .popup {
            width: 80%;
            border-radius: 5px;
            background-color: #fff;
            text-align: center;
            .popup-head {
                padding: 15px;
                font-size: 16px;
                color: #333;
                text-align: left;
            }
            .popup-body {
                padding: 5px 15px 20px 15px;
                font-size: 14px;
                color: #666;
                text-align: left;
            }
            .popup-buttons {
                border-top: 1px solid #D6D6D6;
                height: 44px;
                button:first-child {
                    border-right: 1px solid #D6D6D6;
                    border-bottom-left-radius: 5px;
                }
                button:last-child {
                    border-bottom-right-radius: 5px;
                }
                button {
                    height: 44px;
                    width: 50%;
                    background-color: #fff;
                    font-size: 18px;
                    border: none;
                    float: left;
                }
            }
        }
    }




@keyframes bounceIn {
    0% {
        opacity: 0;
        -webkit-transform: scale(.5);
        -ms-transform: scale(.5);
        transform: scale(.5);
    }
    100% {
        opacity: 1;
        -webkit-transform: scale(1);
        -ms-transform: scale(1);
        transform: scale(1);
    }
}
    
</style>
