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
      <template v-if="editMode">
        <Button v-on:click="editPub">{{'Edit pub'}}</Button>
        <div v-if="success">PUB EDITED</div>

      </template>
      <template v-else>
        <Button v-on:click="createPub">{{'Create pub'}}</Button>
        <div v-if="success">PUB CREATED</div>
      </template>
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
      success: false,
      error: false,
      editMode: false,
      editObjectId: undefined,
      pub: {}
    }
  },
  methods: {
    createPub() {
      axios.post('/api/base/pubs', this.formData).then(
          () => this.success = true,
      ).catch(err => {
        this.error = true;
        console.log(err)
      })
    },
    editPub() {
      axios.patch(`/api/base/pub/${this.editObjectId}`, this.formData).then(
          () => this.success = true,
      ).catch(err => {
        this.error = true;
        console.log(err)
      })
    }
  },
  mounted() {
    if (this.$route.params.id) {
      this.editMode = true;
      this.editObjectId = this.$route.params.id;
      axios.get(`/api/base/pub/${this.$route.params.id}`).then(
          pub => {
            this.pub = pub
            this.formData.capacity = pub.data.capacity
            this.formData.city = pub.data.city
            this.formData.name = pub.data.name
          }
      )
    }
  }
}
</script>

<style scoped>

</style>
