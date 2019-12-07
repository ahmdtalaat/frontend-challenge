<template>
  <v-card class="elevation-12" width="400">
    <v-toolbar color="primary" dark flat>
      <v-toolbar-title>Log into your account</v-toolbar-title>
    </v-toolbar>
    <v-card-text>
      <form>
        <v-text-field
          v-model="email"
          prepend-icon="mdi-email"
          label="Email"
          :rules="[rules.required, rules.email]"
        ></v-text-field>
        <v-text-field
          v-model="password"
          prepend-icon="mdi-lock"
          :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="[rules.required]"
          :type="show ? 'text' : 'password'"
          label="Password"
          @click:append="show = !show"
        ></v-text-field>
        <v-col cols="12">
          <nuxt-link class="empty-links" to="#"
            >Forgot your password?</nuxt-link
          >
        </v-col>
        <v-col cols="12">
          <nuxt-link class="empty-links" to="#"
            >Don't have an account?</nuxt-link
          >
        </v-col>
        <v-card-actions>
          <v-btn block color="#009688" dark @click="submit">Login</v-btn>
        </v-card-actions>
        <v-row no-gutters class="bt">
          <v-col cols="6">
            <v-btn block class="bt-google" dark>Google</v-btn>
          </v-col>
          <v-col cols="6">
            <v-btn block class="bt-github" dark>Github</v-btn>
          </v-col>
        </v-row>
      </form>
      <div v-if="errors">
        <span class="error-msg">{{ errors }}</span>
      </div>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  data: () => ({
    email: '',
    password: '',
    show: false,
    errors: null,
    rules: {
      required: (value) => !!value || 'Required.',
      email: (value) => {
        // regex for email validation
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return pattern.test(value) || 'Invalid e-mail.'
      }
    }
  }),
  methods: {
    async submit() {
      try {
        const res = await this.$axios.$post(
          'https://pushbots-fend-challenge.herokuapp.com/login',
          {
            email: this.email,
            password: this.password
          }
        )
        this.$store.commit('setUserData', res.user)
        localStorage.setItem('jwtToken', res.token)
        this.$router.push('/')
      } catch (err) {
        this.errors = err.response.data.msg
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.bt {
  margin: 12px 0;
  padding: 0 8px;
  .bt-google {
    background-color: rgb(189, 5, 5) !important;
  }
}
.empty-links {
  color: $main-color;
  text-decoration: none;
}
.error-msg {
  color: red;
  background-color: #eee;
  margin: 0 8px;
}
</style>
