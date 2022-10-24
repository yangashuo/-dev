<template>
  <div class="userTemClass">
    <visitor/>
    <message/>
    <leaveMessage/>
    <div
        :style="[{backgroundImage:'url('+imgIconSrc+'longLineIcon.png)'}]"
        class="sxClass"></div>
    <user/>
  </div>
</template>

<script setup>
  import visitor from '../visitor/visitor.vue'
  import message from '../message/message.vue'
  import leaveMessage from '../leaveMessage/leaveMessage.vue'
  import user from '../user/userIcon.vue'

  import { globalStore } from "@/store/global/global";
  import {storeToRefs} from "pinia";
  const store = globalStore()
  const { imgIconSrc } = storeToRefs(store)
</script>

<style scoped>
.userTemClass{
  position: absolute;
  width: 290px;
  height: 50px;
  right: 27px;
  top: 46px;
}
.sxClass{
  display: inline-flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  right: 50px;
  width: 40px;
  height: 50px;
  background-position: center;
  background-repeat: no-repeat;
}
</style>