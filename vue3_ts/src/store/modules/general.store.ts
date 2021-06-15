import { Action, Module, Mutation, VuexModule } from 'vuex-class-modules'
import { store } from '@/store/create-store'
import { IExampleInterface, TNullableField } from '@/types'
import { exampleGeneralService } from '@/services'

@Module
class GeneralStore extends VuexModule {
  exampleVar: TNullableField<IExampleInterface> = null

  @Mutation
  SET_TEST_VAR (testVar: IExampleInterface) {
    this.exampleVar = testVar
  }

  @Action
  async getTestVar () {
    const res = await exampleGeneralService.getSomeData()
    this.SET_TEST_VAR(res)
  }
}

export const generalStore = new GeneralStore({
  store,
  name: 'GeneralStore'
})
