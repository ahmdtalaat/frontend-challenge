import Vue from 'vue'
import { shallowMount } from '@vue/test-utils'
import Vuetify from 'vuetify'
import Chart from '~/components/Chart'

describe('Chart.vue', () => {
  let wrapper
  beforeEach(() => {
    Vue.use(Vuetify)
    wrapper = shallowMount(Chart, {
      data() {
        return {
          fill: true,
          gradient: ['purple', 'violet'],
          padding: 8,
          radius: 10,
          width: 2,
          value: []
        }
      },
      propsData: {
        values: [
          { label: '2019-11-13', value: 667 },
          { label: '2019-11-14', value: 673 },
          { label: '2019-11-15', value: 577 },
          { label: '2019-11-16', value: 211 },
          { label: '2019-11-17', value: 507 },
          { label: '2019-11-18', value: 396 },
          { label: '2019-11-19', value: 932 },
          { label: '2019-11-20', value: 712 }
        ]
      }
    })
  })

  it('should be vue component', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
  it('check props', () => {
    expect(wrapper.vm.value).toMatchObject([
      667,
      673,
      577,
      211,
      507,
      396,
      932,
      712
    ])
  })
  it('should render sparkline', () => {
    expect(wrapper.contains('v-sparkline-stub')).toBe(true)
  })
})
