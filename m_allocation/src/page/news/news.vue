<template>
    <div class="mynews">
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
  name: 'mynews',
  data () {
    return {

    }
  },
  methods:{

  }
}
</script>

<style scoped lang="scss">

    
</style>
