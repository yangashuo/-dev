<template>
  <div
      @mouseenter="publicShow"
      @mouseleave="publicOut"
      class="leaveMessageClass">
    <img :src="(imgIconSrc+'leaveMessageIcon.png')" alt="留言">
  </div>
  <el-collapse-transition>
    <publicTem
        v-show="flag"
        @mouseenter="publicShow"
        @mouseleave="publicOut"
        :headMessage="headMessage">
    </publicTem>
  </el-collapse-transition>
</template>
<script setup>
import publicTem from '../template/messageTem.vue'
import {ref} from "vue";

import { globalStore } from "../../../../store/global/global";
import {storeToRefs} from "pinia";
const store = globalStore()
const { imgIconSrc } = storeToRefs(store)
const iconSrc = imgIconSrc.value


//传递给子组件
const headMessage = ref("留言")
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
.leaveMessageClass{
  display: inline-flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  left: 140px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #e0e0e5;
  cursor: pointer;
}
img{
  width: 38px;
  height: 38px;
}
</style>