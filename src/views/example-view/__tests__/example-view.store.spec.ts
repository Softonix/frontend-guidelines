import { beforeEach, it, expect, describe, vi } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { useExampleViewStore } from '../example-view.store'
import { exampleViewService } from '../example-view.service'

/*
  This is an example of testing pinia store.
  Also, check Pinia's official docs.
  https://pinia.vuejs.org/cookbook/testing.html
*/
describe('useExampleViewStore', () => {
  beforeEach(() => {
    /*
      creates a fresh pinia and makes it active
      so it's automatically picked up by any useStore() call
      without having to pass it to it: `useStore(pinia)`
    */
    setActivePinia(createPinia())
  })

  it('should initialize with an empty exampleVar', () => {
    const exampleViewStore = useExampleViewStore()

    expect(exampleViewStore.exampleVar.title).toBeUndefined()
  })

  it('setExampleVar should change the title', () => {
    const exampleViewStore = useExampleViewStore()

    exampleViewStore.setExampleVar()

    expect(exampleViewStore.exampleVar.title).toBe('changed title')
  })

  it('should save exampleVar after getting data', async () => {
    const mockData = {
      userId: 1,
      id: 1,
      title: 'test title',
      body: 'test body'
    }
    exampleViewService.getSomeData = vi.fn(() => Promise.resolve(mockData))
    const exampleViewStore = useExampleViewStore()

    await exampleViewStore.getExampleVar()

    expect(exampleViewStore.exampleVar).toEqual(mockData)

    // Restore the original implementation
    exampleViewStore.exampleVar = {}
  })
})
