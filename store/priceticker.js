import apiUrls from '../config/apiUrls'
import axios from 'axios'
import caller from '../config/caller'

export const state = () => (initialState())

function initialState () {
  return {
    eurToInr: '1',
    usdToInr: ''
  }
}

export const getters = {
    getEurToInr: (state) => () => {
      return state.eurToInr
    },
    getUsdToInr: (state) => () => {
        return state.usdToInr
      }
}


export const mutations = {
  PORTAL_LANGUAGES: function (state, response) {
    state.languages = response
  },
  RESET_STATE (state)
  {
    let newState = initialState();
    state = Object.assign(state, newState);
  }
}
export const actions = {
  getInitialDiff({ commit }, {authToken}) {
    return new Promise((resolve, reject) => {
    caller.get(apiUrls.getInitialDiff, authToken).then((response) => {
      resolve(response)
    }).catch((error) => {
      if (error.response && error.response.data) {
        this.$toast.error(error)
      }
    })
  })
  }
}
