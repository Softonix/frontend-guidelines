import Vue from 'vue'
import Vuex from 'vuex'

import {
  exampleGeneralStore,
  exampleViewStore
} from './modules'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    exampleGeneralStore,
    exampleViewStore
  }
})
