<template>
  <v-app-bar color="#009688" dark aria-labelledby="Appbar">
    <v-app-bar-nav-icon aria-label="Menu"></v-app-bar-nav-icon>

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
      <div class="avatar">
        <img alt="avatar" :src="userData.avatar" max-width="34" height="34" />
      </div>
      <v-menu left bottom offset-y>
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item @click="logout">
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
    <nuxt-link v-if="!userData" to="/login">
      <v-btn rounded color="primary" dark>Login</v-btn>
    </nuxt-link>
  </v-app-bar>
</template>

<script>
const Cookie = process.client ? require('js-cookie') : undefined

export default {
  computed: {
    userData() {
      // watch for user
      return this.$store.state.userData
    }
  },
  methods: {
    logout() {
      Cookie.remove('jwtToken')
      this.$store.commit('setUserData', null)
      this.$store.commit('setApps', [])
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
    margin: auto 8px;
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
    margin: auto 8px;
    img {
      border-radius: 150px;
    }
  }
}
a {
  text-decoration: none;
  color: #fefefe;
  font-family: 'Roboto';
}
</style>
