<template>
  <div v-loading="loading" class="flex flex-col h-full w-full">
    <div class="shrink-0 flex gap-4 items-center">
      <el-select v-model="filterModel" clearable class="w-48" @change="onFilterChange">
        <el-option
          v-for="item in filterOptions"
          :key="item"
          :label="item"
          :value="item"
        />
      </el-select>

      <span class="w-40">{{ timeStamp }}</span>
    </div>

    <div class="grow">
      <el-auto-resizer>
        <template #default="{ height, width }">
          <el-table-v2
            :columns="columns"
            :data="filteredData"
            :width="width"
            :height="height"
            fixed
          />
        </template>
      </el-auto-resizer>
    </div>
  </div>
</template>

<script lang="ts" setup>
import FilterWorker from './worker?worker'
import { type TEvents, generateColumns } from './worker.helpers'
// import { generateData, generateColumns } from './worker.helpers'

const timeStamp = useTimestamp()
const loading = ref(false)

const filterModel = ref<number>()
const filterOptions = Array.from({ length: 10 }, (_, i) => i + 1)

const columns = generateColumns()

// const data = ref<any[]>(generateData(columns))

// const filteredData = computed(() => {
//   const timeStart = performance.now()
//   const transformed = filterModel.value
//     ? data.value
//       .filter((item) => item['column-7'] === filterModel.value)
//       .map((item) => ({ ...item, 'column-0': `transformed to - ${filterModel.value}` }))
//     : data.value

//   const executionTime = (performance.now() - timeStart) / 1000
//   console.log(executionTime)
//   return transformed
// })

const filteredData = ref<any[]>([])

const worker = new FilterWorker()
worker.onmessage = async (e) => {
  const [eventName, eventData] = e.data as [TEvents, any]

  if (eventName === 'loading') {
    loading.value = eventData
  }

  if (eventName === 'generateData') {
    filteredData.value = [...filteredData.value, ...eventData]
  }

  if (eventName === 'filterData') {
    filteredData.value = eventData
  }
}

function onFilterChange (value: number | string) {
  if (value) {
    worker.postMessage(['filterData', value])
  } else {
    filteredData.value = []
    worker.postMessage(['generateData', columns])
  }
}

onMounted(() => {
  worker.postMessage(['generateData', columns])
})

onBeforeUnmount(() => worker.terminate())
</script>
