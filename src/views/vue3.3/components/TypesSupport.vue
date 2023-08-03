<template>
  <div class="p-4">
    <div class="grid grid-cols-3 gap-x-4 text-sm text-primary">
      <div v-for="(course, index) in courses" :key="index" class="space-y-1.5">
        <p><span class="font-semibold"> prop1: </span>{{ course.name }}</p>
        <p><span class="font-semibold"> prop2: </span>{{ course.short_description }}</p>
        <p><span class="font-semibold"> prop3: </span>{{ course.online_course }}</p>
        <p><span class="font-semibold"> prop4: </span> {{ course.short_description }}</p>
        <!-- <p><span class="font-semibold"> extraProp from props: </span> {{ qqq.extraProp }}</p> -->
      </div>
    </div>
    <div class="mt-4">
      <p class="mb-2">
        Was everything clear in the workshop, book or course you bought and are you satisfied with your purchase?
      </p>
      <el-radio-group v-model="sss.test" class="space-y-1">
        <el-radio :label="true"> Yes </el-radio>
        <el-radio :label="false"> No </el-radio>
      </el-radio-group>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { TDataAttendees } from '@/views/vue3.3/vue.3.3'

const props = defineProps<{
  courses: TDataAttendees[]
  // & { extraProp?: boolean }
}>()

// const qqq = { ...props, extraProp: props.courses.extraProp = true }

const sss = ref<TDataAttendees & { test?: boolean }>({
  ...props.courses[0],
  test: true
})
</script>
