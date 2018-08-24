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

    .fl {
        float: left;
        text-align: right;
    }
    .fr {
        float: right;
    }
    .wrap {
        margin: 0 auto;
        text-align: left;
        width: 1180px;
    }

</style>
