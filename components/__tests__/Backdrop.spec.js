import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import * as Ui from '../../store/ui'
import Backdrop from '../Backdrop'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('Backdrop', () => {
  let store
  let factory

  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        ui: {
          state: Ui.state,
          actions: Ui.actions,
          namespaced: true,
        },
      },
    })

    factory = () => {
      return shallowMount(Backdrop, { store, localVue })
    }
  })

  test('mounts properly', () => {
    const wrapper = factory()
    expect(wrapper.vm).toBeTruthy()
  })

  test('renders properly', () => {
    const wrapper = factory()
    expect(wrapper.html()).toMatchSnapshot()
  })
})
