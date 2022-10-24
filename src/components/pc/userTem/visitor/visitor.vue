<template>
  <div
      class="visitor"
      @mouseenter="publicShow"
      @mouseleave="publicOut">
    <img :src="(imgIconSrc+'visitorIcon.png')" alt="访客">
  </div>
  <transition name="el-fade-in-linear">
    <publicTem
      v-show="flag"
      @mouseenter="publicShow"
      @mouseleave="publicOut"
      :headMessage="headMessage">
      </publicTem>
  </transition>
</template>

<script setup>
import publicTem from '../template/messageTem.vue'
import {ref} from "vue";

import { globalStore } from "../../../../store/global/global";
import {storeToRefs} from "pinia";
const store = globalStore()
const { imgIconSrc } = storeToRefs(store)

//传递给子组件
const headMessage = ref("访客")
//是否显示
const flag = ref(false)
const publicShow = () => {
  flag.value = true
}
const publicOut = () => {
  flag.value = false
}
</script>

<style scoped>
.visitor{
  display: inline-flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  left: 0;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #e0e0e5;
  cursor: pointer;
}
img{
  width: 55px;
  height: 55px;
}
</style>