<template>
  <div class="home">
    <AppNavBar />
    <nuxt />
  </div>
</template>

<script>
import AppNavBar from '~/components/AppNavBar'
export default {
  components: {
    AppNavBar
  },
  data() {
    return {}
  }
}
</script>
<style scoped>
.home {
  height: 100vh;
  /* background: linear-gradient(#e66465, #495249); */
}
</style>
