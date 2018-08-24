<template>
    <div class="personcenter">
        <router-view></router-view>
        <MyFoot></MyFoot>
    </div>
</template>

<script>
import MyFoot from "@/components/myfoot"
export default {
    components:{
        MyFoot
    },
  name: 'personcenter',
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
