import { Action, Module, Mutation, VuexModule } from 'vuex-class-modules'
import { store } from '@/store/create-store'
import { IExampleInterface, TNullableField } from '@/types'
import { exampleViewService } from '@/services'

@Module
class ExampleViewStore extends VuexModule {
  exampleVar: TNullableField<IExampleInterface> = null

  @Mutation
  SET_TEST_VAR (testVar: IExampleInterface) {
    this.exampleVar = testVar
  }

  @Mutation
  CHANGE_VALUE () {
    this.exampleVar = {
      a: 'changed string',
      b: 12
    }
  }

  @Action
  async getTestVar () {
    const res = await exampleViewService.getSomeData()
    this.SET_TEST_VAR(res)
  }
}

export const exampleViewStore = new ExampleViewStore({
  store,
  name: 'ExampleViewStore'
})
