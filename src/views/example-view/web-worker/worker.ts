import { generateData, type TEvents } from './worker.helpers.ts'

let data: any[] = []

const filterData = (filterValue: number | null) => {
  const timeStart = performance.now()
  const transformed = filterValue
    ? data
      .filter((item) => item['column-7'] === filterValue)
      .map((item) => ({
        ...item,
        'column-0': `transformed to - ${filterValue}`
      }))
    : data

  const executionTime = (performance.now() - timeStart)
  console.log('execution from worker', executionTime)
  console.log(transformed)
  return transformed
}

onmessage = (e) => {
  const [eventName, eventData] = e.data as [TEvents, any]
  postMessage(['loading', true])

  if (eventName === 'generateData') {
    data = generateData(eventData)
    const chunkSize = 100000
    const totalChunks = Math.ceil(data.length / chunkSize)

    for (let i = 0; i < totalChunks; i++) {
      setTimeout(() => {
        const chunk = data.slice(i * chunkSize, (i + 1) * chunkSize)
        postMessage(['generateData', chunk])
      }, i * 2000)
    }
  } else if (eventName === 'filterData') {
    postMessage(['filterData', filterData(eventData)])
  }

  postMessage(['loading', false])
}
