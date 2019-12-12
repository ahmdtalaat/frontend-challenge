<template>
  <v-card class="elevation-12" width="400">
    <v-toolbar color="primary" dark flat>
      <v-toolbar-title>Log into your account</v-toolbar-title>
    </v-toolbar>
    <v-card-text>
      <v-form ref="form" v-model="valid">
        <v-text-field
          v-model="email"
          prepend-icon="mdi-email"
          label="Email"
          :rules="emailRules"
        ></v-text-field>
        <v-text-field
          v-model="password"
          prepend-icon="mdi-lock"
          :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="[(v) => !!v || 'Password is required']"
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
          <v-btn
            block
            color="#009688"
            aria-label="Login Button"
            dark
            @click="submit"
            >Login</v-btn
          >
        </v-card-actions>
        <v-row no-gutters class="bt">
          <v-col cols="6">
            <v-btn block class="bt-google" aria-label="Sign-in with Google" dark
              >Google</v-btn
            >
          </v-col>
          <v-col cols="6">
            <v-btn block class="bt-github" aria-label="Sign-in with Github" dark
              >Github</v-btn
            >
          </v-col>
        </v-row>
      </v-form>
      <div v-if="error">
        <span class="error-msg">{{ error }}</span>
      </div>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  data: () => ({
    valid: false,
    email: '',
    emailRules: [
      (v) => !!v || 'E-mail is required',
      (v) =>
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/.test(v) ||
        'E-mail must be valid'
    ],
    password: '',
    show: false
  }),
  computed: {
    error() {
      return this.$store.state.error
    }
  },
  destroyed() {
    // clear errors when change routes
    this.$store.commit('setError', '')
  },
  methods: {
    submit() {
      if (this.valid) {
        this.$store.dispatch('submitForm', {
          email: this.email,
          password: this.password
        })
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
