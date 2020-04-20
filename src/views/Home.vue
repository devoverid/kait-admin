<template>
  <div class="home">
    <HelloEngineer msg="Hello Engineer's KAIT" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloEngineer from '@/components/HelloEngineer.vue'
import { SampleService } from '../services'

const sampleService = new SampleService()

export default {
  name: 'Home',
  components: {
    HelloEngineer,
  },
  mounted() {
    this.getUser()
  },
  methods: {
    getUser() {
      sampleService
        .getUser()
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
    },
  },
}
</script>
