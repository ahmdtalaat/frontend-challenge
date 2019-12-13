const Cookie = process.client ? require('js-cookie') : undefined
const jwtDecode = require('jwt-decode')

export const state = () => ({
  apps: [],
  userData: null,
  error: '' // login error
})
export const mutations = {
  setApps(state, apps) {
    state.apps = apps
  },
  setUserData(state, data) {
    state.userData = data
  },
  setError(state, err) {
    state.error = err
  }
}

export const actions = {
  // submitting the form
  async submitForm({ commit }, { email, password }) {
    try {
      const res = await this.$axios.$post(
        // login with creds
        'https://pushbots-fend-challenge.herokuapp.com/login',
        {
          email,
          password
        }
      )
      const config = {
        headers: { Authorization: `Bearer ${res.token}` }
      }
      const apps = await this.$axios.$get(
        // if user is logged in
        // fetch the apps
        'https://pushbots-fend-challenge.herokuapp.com/api/apps?take=5&skip=5&sortBy=title&direction=desc',
        config
      )

      // store the result
      commit('setUserData', res.user)
      commit('setApps', apps.data)
      commit('setError', '')
      Cookie.set('jwtToken', res.token)
      this.$router.push('/')
    } catch (err) {
      commit('setError', err.response.data.msg)
    }
  },
  async init({ commit }) {
    // Fetch the data on SSR if there is a token
    if (Cookie.get('jwtToken')) {
      // check if there is a cookie on SSR
      const jwtToken = Cookie.get('jwtToken')
      const decodedToken = jwtDecode(jwtToken)
      if (decodedToken.exp * 1000 < Date.now()) {
        Cookie.remove('jwtToken')
      } else {
        const config = {
          headers: { Authorization: `Bearer ${jwtToken}` }
        }
        try {
          const apps = await this.$axios.$get(
            'https://pushbots-fend-challenge.herokuapp.com/api/apps?take=5&skip=5&sortBy=title&direction=desc',
            config
          )
          const res = await this.$axios.$get(
            'https://pushbots-fend-challenge.herokuapp.com/api/me',
            config
          )
          commit('setApps', apps.data)
          commit('setUserData', res)
        } catch (err) {
          commit('setError', err.response.data.msg)
        }
      }
    }
  }
}
