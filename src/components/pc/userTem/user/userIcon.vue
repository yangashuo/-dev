<template>
  <div
      @mouseenter="flag = !flag"
      @mouseleave="flag = !flag"
      @click="onUser"
      class="userClass">
    <img :src="(imgIconSrc+'user.png')" alt="用户">
  </div>
  <el-collapse-transition>
    <publicUser
        v-show="flag"
        @mouseenter="flag = !flag"
        @mouseleave="flag = !flag"/>
  </el-collapse-transition>
</template>

<script setup>
import publicUser from '../template/userIconTem.vue'

import {ref} from "vue";

import { globalStore } from "../../../../store/global/global";
import {storeToRefs} from "pinia";
const store = globalStore()
const { imgIconSrc } = storeToRefs(store)

//路由点击头像跳转
import { useRouter } from 'vue-router'
const router = useRouter()
const onUser = () => {
  router.push({
    name:'userIndex'
  })
}
//是否显示
const flag = ref(false)
</script>

<style scoped>
.userClass{
  display: inline-flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  right: 0;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #e0e0e5;
  cursor: pointer;
}
img{
  width: 40px;
  height: 40px;
}
</style>