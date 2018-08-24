<template>
    <div class="stockpool">
        <my-head title="自选股票"></my-head>
        <table class="optional-tab">
                    <tbody><tr class="h">
                        <th>名称</th>
                        <th>代码</th>
                        <th>现价</th>
                        <th>操作</th>
                    </tr>
                    </tbody><tbody id="Tbody1"></tbody>
                </table>
    </div>
</template>

<script>
import MyHead from "@/components/myhead"
import MyPrompt from "@/components/prompt"
export default {
    components:{
        MyHead,MyPrompt
    },
  name: 'stockpool',
  data () {
    return {
        
    }
  },
}
</script>

<style scoped lang="scss">
    .optional-tab {
        width: 100%;
        th {
            background: #fff6d9;
            line-height: 0.8rem;
            font-size: 1.5rem;
            font-weight: normal;
            text-align: center;
            font-size: 14px;
            font-weight: bold;
            color: #666;
        }
    }
</style>
