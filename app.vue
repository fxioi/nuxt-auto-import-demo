<template>
  <div>
    <NuxtWelcome />
  </div>
</template>
<script setup lang="ts">
const { result } = useQuery(FindSomeTagsDocument as any, {
  input: { limit: 10 },
})
console.log(result.value)
// console.log(FindSomeTagsDocument)
</script>