<template>
    <div class="trade">
            <router-view ></router-view>
            
        <MyFoot></MyFoot>
    </div>
</template>

<script>
import MyFoot from "@/components/myfoot"
export default {
    components:{
        MyFoot
    },
  name: 'trade',
  data () {
    return {

    }
  },
  methods:{

  }
}
</script>

<style lang="scss">

    
</style>
