import { actionTree, mutationTree } from 'typed-vuex'

const state = () => ({})

const mutations = mutationTree(state, {})

const actions = actionTree({ state, mutations }, {})

export const exampleViewStore = {
  namespaced: true,

  state,
  mutations,
  actions
}
