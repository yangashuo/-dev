<template>
  <router-view/>
</template>

<script setup>
  import {onMounted} from "vue";
  onMounted(()=>{
    document.documentElement.scrollTop = 0
  })
</script>

<style scoped>
</style>
