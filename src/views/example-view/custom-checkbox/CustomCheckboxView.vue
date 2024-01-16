<template>
  <h2 class="font-medium text-xl mb-2 text-gray-600">Separate checkboxes</h2>
  <div class="flex gap-5 mb-5">
    <div>
      <CustomCheckbox v-model="checkbox1.model" class="max-w-64" :data="checkbox1.data" />
      <p>{{ checkbox1.model }}</p>
    </div>

    <div>
      <CustomCheckbox v-model="checkbox2.model" class="max-w-64" :data="checkbox2.data" />
      <p>{{ checkbox2.model }}</p>
    </div>
  </div>

  <h2 class="font-medium text-xl mb-2 text-gray-600">Checkboxes Array</h2>
  <div class="flex gap-5">
    <CustomCheckbox
      v-for="checkbox in checkboxArray.data"
      :key="checkbox.id"
      v-model="checkboxArray.model"
      :value="checkbox.id"
      :data="checkbox"
      class="max-w-64"
    />
  </div>
  <p>{{ checkboxArray.model }}</p>
</template>

<script lang="ts" setup>
const checkbox1 = shallowReactive({
  model: false,
  data: readonly({
    img: '/images/test.png',
    title: 'Test checkbox title 1',
    description: 'Test checkbox description 1'
  })
})

const checkbox2 = shallowReactive({
  model: false,
  data: readonly({
    img: '/images/test.png',
    title: 'Test checkbox title 2',
    description: 'Test checkbox description 2'
  })
})

const checkboxArray = shallowReactive({
  model: [],
  data: readonly([
    { id: 1, img: '/images/test.png', title: 'Test checkbox title 1', description: 'Test checkbox description 1' },
    { id: 2, img: '/images/test.png', title: 'Test checkbox title 2', description: 'Test checkbox description 2' },
    { id: 3, img: '/images/test.png', title: 'Test checkbox title 3', description: 'Test checkbox description 3' },
    { id: 4, img: '/images/test.png', title: 'Test checkbox title 4', description: 'Test checkbox description 4' }
  ])
})
</script>
