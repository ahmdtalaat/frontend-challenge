const cookieparser = process.server ? require('cookieparser') : undefined
const Cookie = process.client ? require('js-cookie') : undefined
const jwtDecode = require('jwt-decode')

export const state = () => ({
  apps: [],
  userData: null
})
export const mutations = {
  setApps(state, apps) {
    state.apps = apps
  },
  setUserData(state, data) {
    state.userData = data
  }
}

export const actions = {
  async nuxtServerInit({ commit }, { req }) {
    if (req.headers.cookie) {
      const { jwtToken } = cookieparser.parse(req.headers.cookie)
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
        } catch (err) {}
      }
    }
  }
}
