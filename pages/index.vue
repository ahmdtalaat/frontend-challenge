<template>
  <div class="container">
    <h1>Welcome to PushBots</h1>
    <img alt="pushbots logo" src="~assets/icons/logo.jpg" />
  </div>
</template>

<script>
export default {
  head() {
    // set meta tags for home page
    return {
      title: 'Dashboard',
      meta: [
        {
          hid: 'Home',
          name: 'Home',
          description: 'User dash board'
        }
      ]
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>
@import '~/assets/style/style.scss';
.container {
  @include flex;
  flex-direction: column;
  height: 90vh;
  font-family: $main-font-family;
}
img {
  width: 200px;
  height: 200px;
  margin: 10px;
}
</style>
