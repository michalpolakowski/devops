<template>
  <div class="p-d-flex p-flex-column">
    <div class="p-mb-3">
      <div class="p-float-label">
        <InputText id="name" v-model="formData.name"/>
        <label for="name">Name</label>
      </div>
    </div>
    <div class="p-mb-3">
      <div class="p-float-label">
        <InputText id="city" v-model="formData.city"/>
        <label for="city">City</label>
      </div>
    </div>
    <div class="p-mb-3">
      <div class="p-float-label">
      <InputText id="capacity" v-model="formData.capacity"/>
      <label for="capacity">Capacity</label>
      </div>
    </div>
    <div class="p-mb-3">
      <Button v-on:click="createPub">Create pub</Button>
      <div v-if="pubCreated">PUB CREATED</div>
      <div v-if="error">SOMETHING WENT WRONG</div>
    </div>
  </div>
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
      },
      pubCreated: false,
      error: false
    }
  },
  methods: {
    createPub() {
      axios.post('http://localhost:9090/base/pubs', this.formData).then(
          () => this.pubCreated = true,
      ).catch(err => {
        this.error = true;
        console.log(err)
      })
    }
  }
}
</script>

<style scoped>

</style>
