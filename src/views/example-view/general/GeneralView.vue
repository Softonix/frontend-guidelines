<template>
  <Portal :to="$portalNames.header">
    <p data-testid="heading-text" class="ml-4 text-primary">teleported from example view</p>
  </Portal>

  <div ref="exampleElementRef">
    <div class="space-x-4">
      <IconCar class="w-6 h-6 text-primary" />
      <IconCart />
      <AuthButton />
    </div>

    <GeneralExampleComponent />

    <hr class="my-4">

    <div>
      <label>Compute Example</label>
      <Compute
        #default="{ data: {lastLevel} }"
        :data="{lastLevel: computeExample.firstLevel.secondLevel.thirdLevel}"
      >
        <p>{{ lastLevel }}</p>
        <p>{{ lastLevel }} with additional string</p>
      </Compute>
    </div>

    <hr class="my-4">

    <div>
      <label>Translation example</label>
      <p>{{ t('exampleGeneral.exampleViewKey') }}</p>

      <ElSelect ref="elementSelectRef" v-model="locale">
        <!--todo: create your own locales config, for example with full label, icon, etc...-->
        <el-option
          v-for="lang in availableLocales"
          :key="lang"
          :label="lang"
          :value="lang"
        />
      </ElSelect>
    </div>

    <hr class="my-4">

    <div>
      <label>Element colors</label>
      <span class="text-primary mr-4">primary</span>
      <span class="text-success mr-4">success</span>
      <span class="text-warning mr-4">warning</span>
      <span class="text-danger">danger</span>
    </div>

    <hr class="my-4">

    <div v-loading="loading" class="w-1/2">
      <label>Example view store</label>

      <el-card class="mb-2">
        <template #header>
          <div class="flex justify-between">
            <span>{{ exampleVar?.title }}</span>
            <el-button type="primary" plain>{{ exampleVar?.id }}</el-button>
          </div>
        </template>
        <p>{{ exampleVar?.description }}</p>
      </el-card>

      <el-button type="success" @click="changeExampleViewVar">
        Change value
      </el-button>
    </div>

    <hr class="my-4">

    <div v-loading="generalLoading" class="inline-flex flex-col items-start">
      <label>General store example</label>
      <p data-testid="general-store-text" class="mb-2">{{ exampleGeneralVar }}</p>
      <el-button
        data-testid="general-store-button"
        type="success"
        @click="generalStore.getGeneralStoreVar"
      >
        get general store value
      </el-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { availableLocales, locale, t } = useI18n()

const generalStore = useGeneralStore()
const { exampleGeneralVar, generalLoading } = storeToRefs(generalStore)

const loading = ref(false)

const exampleElementRef = ref()
const elementSelectRef = ref()

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
    await exampleStore.getExampleVar()
  } catch (err) {
    console.error(err)
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  getSomeExampleVar()

  // Element input ref blur method
  elementSelectRef.value?.blur()
})
</script>
