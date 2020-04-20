<template>
  <div class="flex flex-col h-screen">
    <h1 class="m-auto text-6xl">{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: "HelloEngineer",
  props: {
    msg: String
  }
};
</script>
