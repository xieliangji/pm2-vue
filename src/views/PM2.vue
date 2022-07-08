<template>
  <div>
    <button @click="handler.add()">+1</button>
  </div>
  <div style="color: red;">{{a}}</div>
</template>

<script setup>

import {ref} from "vue";

const a = ref(1)

const handler = {
  add: () => {
    a.value += 1
  }
}

</script>

<style scoped>

</style>