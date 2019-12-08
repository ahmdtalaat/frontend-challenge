<template>
  <v-container>
    <template v-if="apps">
      <v-row>
        <nuxt-link to="#"><i class="mdi mdi-check" />Complete</nuxt-link>
        <nuxt-link to="#"><i class="mdi mdi-settings" />In Setup</nuxt-link>
        <nuxt-link to="#"><i class="mdi mdi-share" />Shared</nuxt-link>
        <nuxt-link to="#" class="active"
          ><i class="mdi mdi-chart-line" />Active</nuxt-link
        >
      </v-row>
      <v-row>
        <template v-for="app in apps">
          <v-col :key="app.id" cols="12" lg="6" md="6" sm="9" xs="12">
            <v-card raised>
              <v-list-item>
                <v-list-item-title class="headline">{{
                  app.title
                }}</v-list-item-title>
              </v-list-item>
              <v-card-subtitle
                ><i class="mdi mdi-apps" /><span
                  >{{ app.totalUsers }} users</span
                >
                <i class="mdi mdi-google-chrome" />
                <i class="mdi mdi-apple" />
              </v-card-subtitle>
              <v-card-text>
                <Chart :values="app.chartData" />
                <p style="text-align:center">Daily active users</p>
              </v-card-text>
              <v-card-actions>
                <v-row>
                  <v-col><i class="mdi mdi-send"/></v-col>
                  <v-col><i class="mdi mdi-account-multiple"/></v-col>
                  <v-col><i class="mdi mdi-settings"/></v-col>
                </v-row>
              </v-card-actions>
            </v-card>
          </v-col>
        </template>
      </v-row>
    </template>
    <template v-else>
      <v-col cols="9">
        <v-row><h2>Welcome to PushBots</h2></v-row>
        <v-row><img src="~assets/icons/logo.jpg" alt="PushBots Logo"/></v-row>
      </v-col>
    </template>
  </v-container>
</template>

<script>
import Chart from '~/components/Chart'
const jwtDecode = require('jwt-decode')
export default {
  components: {
    Chart
  },
  data() {
    return {
      apps: null
    }
  },

  mounted() {
    this.getApps()
  },
  methods: {
    async getApps() {
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
              'https://pushbots-fend-challenge.herokuapp.com/api/apps?take=5&skip=5&sortBy=title&direction=desc',
              config
            )
            this.apps = res.data
          } catch (err) {}
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/style/style.scss';
.container {
  @include flex;
  flex-direction: column;
  width: 50%;
  font-family: $main-font-family;
}
.row {
  justify-content: center;
}
img {
  width: 200px;
  height: 200px;
  margin: 10px;
}
a {
  text-decoration: none;
  font-weight: 500;
  color: #000;
  margin: 1rem;
}
.active {
  color: $main-color;
}
.headline {
  overflow: visible;
}
.v-card__actions {
  text-align: center;
  padding: 6px;
}
</style>
