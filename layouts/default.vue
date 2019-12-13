<template>
  <div class="home" data-app role="main">
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
  mounted() {
    this.$store.dispatch('init')
  }
}
</script>
<style scoped>
.home {
  height: 100vh;
}
</style>
