<template>
  <div class="p-2">
    <TaskTreeComponent v-if="list.length" :items="rootElements" :hashMap="lishHashMap" />
  </div>
</template>

<script setup lang="ts">
interface IListMember {
  email: string
  firstName: string
  lastName: string
  reportsTo: string
}

const list = ref<IListMember[]>([])

const rootElements = computed(() => {
  return list.value.filter(item => !item.reportsTo).map(item => item.email)
})

const lishHashMap = computed(() => {
  return list.value.reduce((prev, current) => {
    prev[current.email] = { ...current, members: prev[current.email]?.members || [] }

    if (current.reportsTo) {
      prev[current.reportsTo] = {
        ...(prev[current.reportsTo] || {}),
        email: current.reportsTo,
        members: prev[current.reportsTo]?.members || []
      }

      prev[current.reportsTo].members.push(current.email)
    }

    return prev
  }, {} as any)
})

const loadList = () => {
  fetch('https://gist.githubusercontent.com/marianolg/438b24261065ab81bb2f68cb83fc6c57/raw/f5bf84d7f0a36d7b4fde8f3c7be89d58fa2bb6bf/employees.json')
    .then(res => res.json())
    .then(res => (list.value = res))
}

// V.R. Solution

/* function createTree (list: any[]) {
  let root
  const map = new Map(list.map(item => [item.email, { ...item, children: [] }]))

  for (const item of map.values()) {
    const parent = map.get(item.reportsTo)

    if (parent) {
      parent.children.push(item)
    } else {
      root = item
    }
  }

  return root
} */

onMounted(() => {
  loadList()
})
</script>
