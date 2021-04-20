<template>
  <div v-for="pub in pubs" :key="pub.id">{{ pub.name }}</div>
</template>

<script>

export default {
  name: 'Pubs',
  props: {
    pubs: Array
  },
}
</script>

<style scoped>
</style>
