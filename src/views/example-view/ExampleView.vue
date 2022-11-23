<template>
  <Portal :to="$portalNames.header">
    <p class="ml-4 text-primary">teleported from example view</p>
  </Portal>

  <div ref="exampleElementRef" class="h-full">
    <IconCar class="w-6 h-6 text-primary" />
    <IconCart />
    <AuthButton />
    <ExampleViewComponent />

    <div class="p-4">
      <label>Compute Example</label>
      <Compute
        #default="{ lastLevel }"
        :lastLevel="computeExample.firstLevel.secondLevel.thirdLevel"
      >
        <p>{{ lastLevel }}</p>
        <p>{{ lastLevel }} with additional string</p>
      </Compute>
    </div>

    <div class="p-4">
      <label>Translation example</label>
      <p>{{ $t('exampleView.exampleViewKey') }}</p>

      <ElSelect ref="elementSelectRef" v-model="$i18n.locale">
        <!--todo: create your own locales config, for example with full label, icon, etc...-->
        <el-option
          v-for="lang in $i18n.availableLocales"
          :key="lang"
          :label="lang"
          :value="lang"
        />
      </ElSelect>
    </div>

    <div class="p-4">
      <label>Element colors</label>
      <span class="text-primary mr-4">primary</span>
      <span class="text-success mr-4">success</span>
      <span class="text-warning mr-4">warning</span>
      <span class="text-danger">danger</span>
    </div>

    <div v-loading="loading" class="p-4 w-1/2">
      <label>example view store var</label>
      <el-card class="mb-2">
        <template #header>
          <div class="flex justify-between">
            <span>{{ exampleVar?.title }}</span>
            <el-button :type="$elComponentType.primary" plain>{{ exampleVar?.userId }}</el-button>
          </div>
        </template>
        <p>{{ exampleVar?.body }}</p>
      </el-card>
      <el-button
        :type="$elComponentType.success"
        @click="changeExampleViewVar"
      >
        Change value
      </el-button>
    </div>

    <br>

    <div v-loading="generalLoading" class="p-4 inline-flex flex-col items-start">
      <label>general store var</label>
      <p class="mb-2">{{ exampleGeneralVar }}</p>
      <el-button
        :type="$elComponentType.success"
        @click="generalStore.getGeneralStoreVar"
      >
        get general store value
      </el-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ElSelect } from 'element-plus'

import colors from 'colors'
console.log(colors)
console.log(colors.red[700])

const generalStore = useGeneralStore()
const { exampleGeneralVar, generalLoading } = storeToRefs(generalStore)

const loading = ref(false)

const exampleElementRef = ref()
const elementSelectRef = ref<InstanceType<typeof ElSelect>>()

const computeExample = {
  firstLevel: {
    secondLevel: {
      thirdLevel: 'I\'m the last level'
    }
  }
}

const exampleStore = useExampleViewStore()
const { exampleVar } = storeToRefs(exampleStore)
function changeExampleViewVar () {
  exampleStore.setExampleVar()
}

async function getSomeExampleVar () {
  try {
    loading.value = true
  } finally {
    await exampleStore.getExampleVar()
    loading.value = false
  }
}

onMounted(() => {
  getSomeExampleVar()

  console.log('Html element ref', exampleElementRef)
  console.log('element input ref blur method', elementSelectRef.value?.blur)
})
</script>
