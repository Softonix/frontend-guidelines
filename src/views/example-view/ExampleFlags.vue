<template>
  <el-table :data="flagsData" style="width: 100%">
    <el-table-column prop="name" label="Flag name" min-width="180" />
    <el-table-column prop="value" label="Enable (on/off)" min-width="180">
      <template #default="{ row }">
        <el-switch v-model="row.value" :disabled="defaultFlags[row.name]" @change="changeFlag(row.name, $event)" />
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup lang="ts">
const { defaultFlags, flags, changeFlag } = useFlags()

const flagsData = Object.keys(flags.value).map(key => ({ name: key, value: flags.value[key] }))
</script>
