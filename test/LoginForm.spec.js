import Vue from 'vue'
import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import Vuetify from 'vuetify'
import LoginForm from '~/components/LoginForm'

describe('LoginForm.vue', () => {
  let wrapper
  beforeEach(() => {
    Vue.use(Vuetify)
    wrapper = shallowMount(LoginForm, {
      data() {
        return {
          email: 'frontend@ninja.com',
          password: '12345'
        }
      },
      computed: {
        error() {
          return ''
        }
      },
      stubs: {
        NuxtLink: RouterLinkStub
      }
    })
  })

  it('should be vue component', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
  it('should contain login button', () => {
    const login = wrapper.find('v-card-actions-stub > v-btn-stub')
    expect(login.text()).toBe('Login')
  })

  it('login form should has title ', () => {
    const title = wrapper.find('v-toolbar-title-stub')
    expect(title.text()).toBe('Log into your account')
  })
  it('should redirect to / after login', () => {
    const login = wrapper.find('v-card-actions-stub > v-btn-stub')
    // Simulate a click on the button
    login.trigger('click')
    // Ensure that our mock event was called
    // and redirect to home page after login
    expect(window.location.pathname).toBe('/')
  })
})
