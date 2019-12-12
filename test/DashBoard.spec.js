import Vue from 'vue'
import { shallowMount } from '@vue/test-utils'
import Vuetify from 'vuetify'
import DashBoard from '~/components/DashBoard'
import Chart from '~/components/Chart'

describe('DashBoard.vue', () => {
  let wrapper
  beforeEach(() => {
    Vue.use(Vuetify)
    wrapper = shallowMount(DashBoard, {
      computed: {
        apps() {
          return []
        }
      }
    })
  })

  it('should be vue component', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
  it('should render welcome to pushbots', () => {
    const title = wrapper.find('h3')
    expect(title.text()).toBe('Welcome to PushBots')
  })
  it('should not contain Charts', () => {
    expect(wrapper.contains(Chart)).toBe(false)
  })
})
