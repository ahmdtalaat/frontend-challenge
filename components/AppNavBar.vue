<template>
  <div>
    <v-app-bar color="#009688" dark>
      <nuxt-link to="/">
        <v-toolbar-title>PushBots</v-toolbar-title>
      </nuxt-link>
      <v-spacer class="hidden-xs-only"></v-spacer>
      <div v-if="userData" class="user">
        <div>
          <p>{{ userData.name }}</p>
          <p><v-icon>mdi-star</v-icon>{{ userData.plan }}</p>
        </div>
        <div>
          <img alt="avatar" :src="userData.avatar" max-width="34" height="34" />
        </div>
      </div>
      <nuxt-link v-if="!userData" to="/login">
        <v-btn rounded color="primary" dark>Login</v-btn>
      </nuxt-link>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  computed: {
    userData() {
      return this.$store.state.userData
    }
  }
}
</script>

<style scoped lang="scss">
.user {
  display: flex;
  flex-direction: row;
  div:first-child {
    text-align: center;
    font-family: $main-font-family;
    font-weight: 500;
    margin: 0 8px;
    :last-child {
      background-color: #000;
      border-radius: 20px;
      font-size: 0.8rem;
      margin: 0;
      height: 17px;
    }
  }
  div:last-child {
    margin-left: 8px;
  }
}
a {
  text-decoration: none;
  color: #fefefe;
  font-family: 'Roboto';
}
</style>
