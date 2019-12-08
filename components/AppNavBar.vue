<template>
  <v-app-bar color="#009688" dark>
    <nuxt-link to="/">
      <v-toolbar-title>PushBots</v-toolbar-title>
    </nuxt-link>
    <v-spacer class="hidden-xs-only"></v-spacer>
    <div v-if="userData" class="user">
      <div class="devices">
        <p><i class="mdi mdi-account-multiple" />{{ userData.totalDevices }}</p>
      </div>
      <div class="apps">
        <p><i class="mdi mdi-apps" />{{ userData.totalApps }}</p>
      </div>
      <div class="user-data">
        <p class="name">{{ userData.name }}</p>
        <p class="plan"><i class="mdi mdi-star" />{{ userData.plan }}</p>
      </div>
      <div>
        <img
          class="avatar"
          alt="avatar"
          :src="userData.avatar"
          max-width="34"
          height="34"
        />
      </div>
    </div>
    <nuxt-link v-if="!userData" to="/login">
      <v-btn rounded color="primary" dark>Login</v-btn>
    </nuxt-link>
  </v-app-bar>
</template>

<script>
const jwtDecode = require('jwt-decode')
export default {
  computed: {
    userData() {
      // watch for user
      return this.$store.state.userData
    }
  },

  created() {
    this.getUserData()
  },
  methods: {
    async getUserData() {
      // if there is a token in local Storage
      // get data with token
      if (process.browser) {
        if (localStorage.getItem('jwtToken')) {
          const token = localStorage.getItem('jwtToken')
          const decodedToken = jwtDecode(token)
          if (decodedToken.exp * 1000 < Date.now()) {
            localStorage.removeItem('jwtToken')
          } else {
            try {
              const config = {
                headers: { Authorization: `Bearer ${token}` }
              }
              const res = await this.$axios.$get(
                'https://pushbots-fend-challenge.herokuapp.com/api/me',
                config
              )
              this.$store.commit('setUserData', res)
            } catch (err) {}
          }
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
.v-app-bar {
  margin-bottom: 5rem;
}
.user {
  display: flex;
  flex-direction: row;
  font-family: $main-font-family;
  .user-data {
    text-align: center;
    font-weight: 500;
    margin: 0 8px;
    .plan {
      background-color: #000;
      border-radius: 20px;
      font-size: 0.8rem;
      margin: 0;
      height: 17px;
    }
  }
  .devices,
  .apps {
    margin: auto 8px;
  }
  .avatar {
    margin-left: 8px;
    border-radius: 150px;
  }
}
a {
  text-decoration: none;
  color: #fefefe;
  font-family: 'Roboto';
}
</style>
