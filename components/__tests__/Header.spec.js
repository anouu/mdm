import { shallowMount, createLocalVue, RouterLinkStub } from '@vue/test-utils'
import Vuex from 'vuex'
import * as Ui from '../../store/ui'
import Header from '../Header'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('Header', () => {
  let actions
  let getters
  let store
  let factory
  let actionsUi

  beforeEach(() => {
    getters = {
      getCartQty: () => 0,
      isCartEmpty: () => true,
    }
    actions = {
      setSampleCart: jest.fn(),
    }
    actionsUi = {
      setBasketMini: jest.fn(),
    }
    store = new Vuex.Store({
      getters,
      actions,
      modules: {
        ui: {
          state: Ui.state,
          actions: actionsUi,
          namespaced: true,
        },
      },
    })

    factory = () => {
      return shallowMount(Header, {
        store,
        localVue,
        stubs: {
          NuxtLink: RouterLinkStub,
        },
      })
    }
  })

  it('calls HandleBasket', () => {
    const wrapper = factory()
    const handleBasket = jest.spyOn(wrapper.vm, 'handleBasket')

    wrapper.vm.handleBasket()

    expect(handleBasket).toHaveBeenCalled()
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
