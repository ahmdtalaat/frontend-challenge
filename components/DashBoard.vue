<template>
  <v-container>
    <template v-if="apps.length > 0">
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
                  <v-col><i class="mdi mdi-twitter"/></v-col>
                  <v-col><i class="mdi mdi-chart-histogram"/></v-col>
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

export default {
  components: {
    Chart
  },
  computed: {
    apps() {
      return this.$store.state.apps
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

.v-card__actions {
  text-align: center;
  padding: 6px;
}
</style>
