<template>
  <div class="home" data-app>
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
}
</style>
