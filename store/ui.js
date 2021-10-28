export const state = () => ({
  isBackdropOpen: false,
  isModalOpen: false,
  isBasketMiniOpen: false,
  isDarkMode: false,
  modalData: {
    status: false,
    data: {
      body: '',
      action: null,
      actionData: null,
    },
  },
})

export const mutations = {
  SET_BACKDROP_OPEN(state, boolean) {
    state.isBackdropOpen = boolean
  },

  SET_MODAL_OPEN(state, boolean) {
    state.isModalOpen = boolean
    state.isBackdropOpen = boolean
  },

  SET_DRAWER_OPEN(state, boolean) {
    state.isBasketMiniOpen = boolean
    state.isBackdropOpen = boolean
  },

  CLOSE_ALL_OPEN(state) {
    state.isBackdropOpen = false
    state.isModalOpen = false
    state.isBasketMiniOpen = false
  },

  SET_MODAL_DATA(state, data) {
    state.modalData = data
  },

  SET_DARK_MODE(state, boolean) {
    state.isDarkMode = boolean
  },
}

export const actions = {
  closeAll({ commit }) {
    commit('CLOSE_ALL_OPEN', false)
  },

  setBasketMini({ commit }, boolean) {
    commit('SET_DRAWER_OPEN', boolean)
  },

  setModal({ commit }, { status, data }) {
    commit('SET_MODAL_DATA', data)
    commit('SET_MODAL_OPEN', status)
  },

  setDarkMode({ commit }, boolean) {
    commit('SET_DARK_MODE', boolean)
  },
}
