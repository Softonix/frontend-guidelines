import { createStore } from 'vuex'
import {
  exampleViewStore,
  exampleGeneralStore
} from './modules'
import { useAccessor } from 'typed-vuex'

const storePattern = {
  modules: {
    exampleView: exampleViewStore,
    exampleGeneral: exampleGeneralStore
  }
}

export const store = createStore(storePattern)
export const vuex = useAccessor(store, storePattern)
