import Vue from 'vue'
import { shallowMount } from '@vue/test-utils'
import Vuetify from 'vuetify'
import index from '~/pages/index'
import DashBoard from '~/components/DashBoard'

describe('index.vue', () => {
  let wrapper
  beforeEach(() => {
    Vue.use(Vuetify)
    wrapper = shallowMount(index)
  })

  it('should be vue component', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
  it('should  contain LoginForm', () => {
    expect(wrapper.contains(DashBoard)).toBe(true)
  })
})
