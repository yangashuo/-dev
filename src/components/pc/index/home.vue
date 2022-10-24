<template>
  <left/>
  <Search />
  <userTem />
  <el-divider />
  <router-view/>
</template>

<script setup>
import Search from '@/components/pc/search/search.vue'
import userTem from '@/components/pc/userTem/template/userTem.vue'
import left from '@/components/pc/leftHurdle/leftHurdle.vue'
</script>

<style scoped>
.el-divider{
  position: absolute;
  top: 80px;
  width: 1720px;
  left: 200px;
}
</style>