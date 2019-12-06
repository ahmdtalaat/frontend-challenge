<template>
  <div class="container">
    <LoginForm />
  </div>
</template>

<script>
import LoginForm from '~/components/LoginForm'
export default {
  head() {
    return {
      title: 'Login',
      meta: [
        {
          hid: 'Login Form',
          name: 'Login Form',
          description: 'Enter your email and password to login'
        }
      ]
    }
  },
  components: {
    LoginForm
  }
}
</script>

<style scoped lang="scss">
@import '~/assets/style/style.scss';
.container {
  @include flex;
  flex-direction: column;
  height: 85vh;
  font-family: $main-font-family;
}
</style>
