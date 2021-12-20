<template>
  <Portal :to="$portalNames.HEADER" />

  <div ref="exampleElementRef" class="h-full overflow-hidden">
    <div class="p-4">
      <label>Date Filter</label>
      <p>{{ filteredDate }}</p>
    </div>

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

      <el-select ref="elementSelectRef" v-model="$i18n.locale">
        <!--todo: create your own locales config, for example with full label, icon, etc...-->
        <el-option
          v-for="lang in $i18n.availableLocales"
          :key="lang"
          :label="lang"
          :value="lang"
        />
      </el-select>
    </div>

    <div class="p-4">
      <label>Element colors</label>
      <span class="text-primary mr-4">primary</span>
      <span class="text-success mr-4">success</span>
      <span class="text-warning mr-4">warning</span>
      <span class="text-danger">danger</span>
    </div>

    <div v-loading="loading" class="p-4 inline-flex flex-col items-start">
      <label>Vuex example</label>
      <p class="mb-2">{{ exampleVuexVar }}</p>
      <el-button
        :type="$componentType.SUCCESS"
        @click="changeVuexValue"
      >
        Change value
      </el-button>
    </div>

    <div class="p-4">
      <label>Fontawesome example</label>
      <Icon class="mr-4 text-red-500" :name="$icons.fasUser" />
      <Icon class="mr-4 text-green-500" :name="$icons.farBell" />
      <Icon class="text-gray-500" :name="$icons.farEnvelope" />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref } from 'vue'
import { ElSelect } from 'element-plus'

import { useComponentRef, useElementRef, useGlobalProperties } from '@/composables'
import { exampleViewStore } from '@/store'

import Compute from '@/components/stateless/hoc/Compute.vue'

export default defineComponent({
  name: 'ExampleView',

  components: { Compute },

  setup () {
    const loading = ref(false)

    // todo: use the following syntax or import directly from @/core/filters
    const { $filters } = useGlobalProperties()

    const date = ref(new Date())

    const filteredDate = $filters.date(date.value).full

    const exampleElementRef = useElementRef()
    const elementSelectRef = useComponentRef<InstanceType<typeof ElSelect>>()

    const computeExample = {
      firstLevel: {
        secondLevel: {
          thirdLevel: 'I\'m the last level'
        }
      }
    }

    const exampleVuexVar = computed(() => exampleViewStore.exampleVar)
    function changeVuexValue () {
      exampleViewStore.CHANGE_VALUE()
    }

    async function getSomeExampleVar () {
      try {
        loading.value = true
      } finally {
        await exampleViewStore.getTestVar()
        loading.value = false
      }
    }

    onMounted(() => {
      getSomeExampleVar()

      console.log('Html element ref', exampleElementRef)
      console.log('element input ref blur method', elementSelectRef.value?.blur)
    })

    return {
      loading,
      exampleElementRef,
      elementSelectRef,
      computeExample,
      exampleVuexVar,
      changeVuexValue,
      filteredDate
    }
  }
})
</script>
