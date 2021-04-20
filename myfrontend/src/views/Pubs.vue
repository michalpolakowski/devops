<template>
  <DataTable :value="pubs">
    <Column field="name" header="Name">
      <template #body="pub">
        <router-link :to='`/pub/${pub.data.id}`'>{{pub.data.name}}</router-link>
      </template>
    </Column>
    <Column field="city" header="City"></Column>
    <Column field="capacity" header="Capacity"></Column>
  </DataTable>
</template>

<script>

import axios from "axios";

export default {
  name: 'Pubs',
  data() {
    return {
      pubs: []
    }
  },
  mounted() {
    axios.get('http://localhost:9090/base/pubs/').then((resp) => this.pubs = resp.data)
  }
}
</script>

<style scoped>
</style>
