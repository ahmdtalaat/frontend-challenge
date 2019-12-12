import Vue from 'vue'
import { shallowMount } from '@vue/test-utils'
import Vuetify from 'vuetify'
import login from '~/pages/login'
import LoginForm from '~/components/LoginForm'

describe('login.vue', () => {
  let wrapper
  beforeEach(() => {
    Vue.use(Vuetify)
    wrapper = shallowMount(login)
  })

  it('should be vue component', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
  it('should  contain LoginForm', () => {
    expect(wrapper.contains(LoginForm)).toBe(true)
  })
})
