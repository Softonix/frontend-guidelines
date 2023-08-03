<template>
  <h1 class="text-center py-5 font-bold text-2xl text-primary">Imported and Complex Types Support in Macros</h1>
  <TypesSupport :courses="course" />
</template>

<script lang="ts" setup>
// imported types in props and emits
import type { TDataAttendees } from './vue.3.3'

const course: TDataAttendees[] = ([
  {
    id: 1,
    completed: true,
    lms_percentage_completed: '24',
    online_course: 'yes',
    name: 'Comprehensive Management of Insomnia & Sleep Disorder',
    short_description: 'This workshop has been developed and conducted by experienced medical practitioners managing patients suffering from anxiety and panic disorders.',
    points: '2.5'
  },
  {
    id: 2,
    completed: true,
    lms_percentage_completed: '77',
    online_course: 'no',
    name: 'Introduction to Medicinal Cannabis (2nd Edition)',
    short_description: 'Comprehensive Management of Anxiety & Panic Disorder',
    points: '2.5'
  },
  {
    id: 3,
    completed: true,
    lms_percentage_completed: '44',
    online_course: 'yes',
    name: 'Comprehensive Management of Anxiety & Panic Disorder',
    short_description: 'This workshop has been developed and conducted by experienced medical practitioners managing patients suffering from anxiety and panic disorders.',
    points: '2.5'
  }
])
</script>
