import { it, expect, describe, beforeAll, afterAll } from 'vitest'
import { exampleViewService } from '../example-view.service'
import { setupServer } from 'msw/node'
import { rest } from 'msw'

const responceFromServer = {
  userId: 1,
  id: 1,
  title: 'test title',
  body: 'test body'
}

const server = setupServer(
  rest.get('https://jsonplaceholder.typicode.com/posts/1', (req, res, ctx) => {
    return res(ctx.json(responceFromServer))
  })
)

beforeAll(() => server.listen())
afterAll(() => server.close())

describe('exampleViewService', () => {
  it('should get the data for the given ID', async () => {
    const expectedResponce = Object.assign({}, responceFromServer)

    const data = await exampleViewService.getSomeData(1)

    expect(data).toEqual(expectedResponce)
  })
})
