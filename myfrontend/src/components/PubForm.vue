<template>
  <div class="p-float-label">
    <InputText id="name" v-model="formData.name"/>
    <label for="name">Name</label>
  </div>
  <div class="p-float-label">
    <InputText id="city" v-model="formData.city"/>
    <label for="city">City</label>
  </div>
  <span class="p-float-label">
    <InputText id="capacity" v-model="formData.capacity"/>
    <label for="capacity">Capacity</label>
  </span>
  <Button v-on:click="createPub(formData)">Create pub</Button>
</template>

<script>

import axios from "axios";

export default {
  name: "PubForm",
  data() {
    return {
      formData: {
        name: '',
        city: '',
        capacity: 0
      }
    }
  },
  props: {
    getPubs: Function
  },
  methods: {
    createPub(formData) {
      axios.post('http://localhost:9090/base/pubs', formData).then(
          () => this.getPubs(),
      ).catch(err => console.log(err))
    }
  }
}
</script>

<style scoped>

</style>
