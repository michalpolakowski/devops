<template>
  <Card>
    <template #title>
      {{pub.name}}
    </template>
    <template #content>
      This pub can contain up to <b>{{pub.capacity}}</b> people and is placed in <b>{{pub.city}}</b>
    </template>
  </Card>
</template>

<script>
import axios from "axios";

export default {
  name: "PubDetail",
  data() {
    return {
      pub: {}
    }
  },
  mounted() {
    axios.get(`http://localhost:9090/base/pub/${this.$route.params.id}`).then(
        resp => this.pub = resp.data
    )
  }
}
</script>

<style scoped>

</style>
