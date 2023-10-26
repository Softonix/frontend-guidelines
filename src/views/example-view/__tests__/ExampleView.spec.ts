import { it, expect, describe, vi, afterEach } from 'vitest'
import { render, cleanup } from '@testing-library/vue'
import { i18n } from '@/plugins'
import { useGeneralStore } from '@/store/modules/general.store'
import { createTestingPinia } from '@pinia/testing'
import ExampleView from '../ExampleView.vue'

/*
  Read this very handy article with good example of how we should test component with store.
  https://fadamakis.com/unit-testing-a-pinia-component-37d045582aed
*/

afterEach(() => {
  cleanup()
})

describe('ExampleView', () => {
  it('exampleGeneralVar should be undefined by default', () => {
    render(ExampleView, {
      global: {
        mocks: {
          $portalNames: {
            header: 'header'
          }
        },
        plugins: [createTestingPinia({
          createSpy: vi.fn()
        }), i18n]
      }
    })

    const generalStore = useGeneralStore()
    expect(generalStore.exampleGeneralVar).toBeUndefined()
  })

  it('exampleGeneralVar should defined with initial default value', () => {
    const initialMockData = {
      userId: 1,
      id: 1,
      title: 'test title',
      body: 'test body'
    }
    render(ExampleView, {
      global: {
        mocks: {
          $portalNames: {
            header: 'header'
          }
        },
        plugins: [createTestingPinia({
          initialState: {
            generalStore: {
              exampleGeneralVar: initialMockData
            }
          },
          createSpy: vi.fn()
        }), i18n]
      }
    })

    const generalStore = useGeneralStore()
    expect(generalStore.exampleGeneralVar).toEqual(initialMockData)
  })

  it('defaul exampleGeneralVar value shoud be in template', () => {
    const initialMockData = 'test content'
    const { getByTestId } = render(ExampleView, {
      global: {
        mocks: {
          $portalNames: {
            header: 'header'
          }
        },
        plugins: [createTestingPinia({
          initialState: {
            generalStore: {
              exampleGeneralVar: initialMockData
            }
          },
          createSpy: vi.fn()
        }), i18n]
      }
    })
    const getExampleButton = getByTestId('general-store-text')
    expect(getExampleButton.textContent).toBe(initialMockData)
  })
})
