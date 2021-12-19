import { Module, VuexModule } from 'vuex-class-modules'
import { store } from '@/store/create-store'

@Module
class ExampleViewStore extends VuexModule {}

export const exampleViewStore = new ExampleViewStore({
  store,
  name: 'ExampleViewStore'
})
