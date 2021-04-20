<template>
  <div class="p-grid">
    <div class="p-col">
      <Pubs v-bind:pubs="pubs"/>
    </div>
    <div class="p-col">
      <PubForm v-bind:get-pubs="getPubs"/>
    </div>
  </div>
</template>

<script>
import Pubs from './components/Pubs.vue'
import PubForm from './components/PubForm.vue'
import axios from "axios";


export default {
  name: 'App',
  components: {
    Pubs,
    PubForm
  },
  data() {
    return {
      pubs: []
    }
  },
  methods: {
    getPubs() {
      axios.get('http://localhost:9090/base/pubs').then(resp => {
        this.pubs = resp.data
      })
    },
  },
  mounted() {
    this.getPubs();
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
