export const state = () => ({
  userData: null
})

export const mutations = {
  setUserData(state, data) {
    state.userData = data
  }
}
