import {actionTree, mutationTree} from 'typed-vuex'

const state = () => ({})

const mutations = mutationTree(state, {})

const actions = actionTree({ state, mutations }, {})

export const exampleGeneralStore = {
  namespaced: true,

  state,
  mutations,
  actions
}
