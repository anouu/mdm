export const state = () => ({
  cart: {},
})

export const getters = {
  getCartItems: (state) => {
    return state.cart?.products || []
  },

  getCartQty: (state, getters) => {
    return Object.values(getters.getCartItems).reduce(
      (acc, item) => acc + item.qty,
      0
    )
  },

  getCartTotal: (state, getters) => {
    return Object.values(getters.getCartItems).reduce(
      (acc, item) => acc + item.qty * item.price.base.amount,
      0
    )
  },

  isCartEmpty: (state, getters) => {
    return getters.getCartQty === 0
  },
}

export const mutations = {
  SET_CART(state, newCart) {
    state.cart = newCart
  },

  UPDATE_PRODUCT(state, { reference, updatedItem }) {
    state.cart.products[reference] = updatedItem
  },
}

export const actions = {
  async setSampleCart({ commit }) {
    try {
      const { cart } = await fetch('/api/sampleCart').then((res) => res.json())

      commit('SET_CART', cart)
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e)
    }
  },

  updateProduct({ commit, getters }, { reference, qty }) {
    const items = getters.getCartItems
    const updatedItem = { ...items[reference], qty }

    commit('UPDATE_PRODUCT', { reference, updatedItem })
  },

  deleteProduct(context, reference) {
    const items = context.getters.getCartItems
    const newCart = { ...context.state.cart, products: items }

    delete items[reference]

    context.commit('SET_CART', newCart)
    context.commit('ui/SET_MODAL_OPEN', false)
  },
}
