<template>
  <div
      @mouseenter="publicShow"
      @mouseleave="publicOut"
      class="messageClass">
    <img :src="(imgIconSrc+'messageIcon.png')" alt="信息">
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
const headMessage = ref("消息")
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
.messageClass{
  display: inline-flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  left: 70px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #e0e0e5;
  /*border: 1px solid black;*/
  cursor: pointer;
}
img{
  width: 40px;
  height: 40px;
}
</style>