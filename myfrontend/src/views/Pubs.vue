<template>
  <DataTable :value="pubs">
    <Column field="name" header="Name">
      <template #body="pub">
        <router-link :to='`/pub/${pub.data.id}`'>{{ pub.data.name }}</router-link>
      </template>
    </Column>
    <Column field="city" header="City"></Column>
    <Column field="capacity" header="Capacity"></Column>
    <Column header="Actions">
      <template #body="pub">
        <Button label="DELETE" class="p-button-danger" v-on:click="deletePub(pub.data.id)"/>
        <Button label="EDIT" class="p-button-warning" v-on:click="navigateToEdit(pub.data.id)"/>
      </template>
    </Column>
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
  methods: {
    deletePub( id ) {
      axios.delete(`/api/base/pub/${id}`).then(
          () => {
            this.pubs = this.pubs.filter(pub => pub.id !== id)
          }
      )
    },
    navigateToEdit( id ) {
      this.$router.push(`/edit-pub/${id}`)
    }
  },
  mounted() {
    axios.get('/api/base/pubs/').then(( resp ) => this.pubs = resp.data)
  }
}
</script>

<style scoped>
</style>
