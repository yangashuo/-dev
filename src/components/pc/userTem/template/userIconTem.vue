<template>
  <div class="topTopPadding">
    <div class="publicUserTemClass">
      <el-card>
        <div
            class="divLikeClass"
            v-for="data in data" :key="data">
          <div class="divImgClass">
            <img :src=imgIconSrc+data.src :alt=data.alt />
          </div>
          <span class="span1">{{data.count}}</span>
          <span class="span2">{{data.alt}}</span>
        </div>
      </el-card>
      <el-card>
        <div class="divOut">
          <span class="span1">个人主页</span>
          <span class="span2">退出登陆</span>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue";

const data = ref([
  {
    src:"userWorkIcon.png",
    alt:"我的作品",
    count:4,
  },{
    src:"likeIcon.png",
    alt:"我的喜欢",
    count:23,
  },{
    src:"collectIconYellow.png",
    alt:"我的收藏",
    count:56,
  },{
    src:"historyIcon.png",
    alt:"浏览历史",
    count:14,
  }
])

import { globalStore } from "../../../../store/global/global";
import {storeToRefs} from "pinia";
const store = globalStore()
const { imgIconSrc } = storeToRefs(store)
</script>

<style scoped>
.publicUserTemClass{
  box-shadow: 0 0 5px 1px #999;
  height: 150px;
  position: absolute;
  z-index: 100;
  border-radius: 7px;
  background-color: white;
  width: 310px;
  left: 5px;
}
.topTopPadding{
  position: absolute;
  padding: 20px 0 !important;
  top: 47px;
  right: 0;
  width: 320px;
  height: 150px;
  /*border: 1px solid black;*/
  z-index: 99;
  overflow: inherit;
}
.divLikeClass {
  display: inline-flex;
  /*换行*/
  flex-wrap: wrap;
  /*border: 1px solid black;*/
  justify-content: center;
  width: 62px;
  height: 100px;
  margin: 5px 6px;
  cursor: pointer;
}
.divOut{
  display: inline-flex;
  /*border: 1px solid black;*/
  align-items: center;
  width: 308px;
  height: 38px;
}
.divOut span{
  display: inline-flex;
  /*border: 1px solid black;*/
  font-size: 14px;
  font-family: “Microsoft YaHei”,sans-serif;
  color: #585353;
  -webkit-font-smoothing:none;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 22px;
  cursor: pointer;
}
.divOut .span1{
  margin-left: 12px;
}
.divOut .span2{
  margin-left: 160px;
}
.divImgClass img{
  width: 80%;
  height: 80%;
}
.divLikeClass .span1{
  display: inline-flex;
  width: 52px;
  /*border: 1px solid black;*/
  height: 17px;
  justify-content: center;
  align-items: center;
}
.divLikeClass .span2{
  display: inline-flex;
  width: 52px;
  /*border: 1px solid black;*/
  height: 22px;
  font-size: 13px;
  font-family: “Microsoft YaHei”,sans-serif;
  color: #585353;
  -webkit-font-smoothing:none;
  justify-content: center;
  align-items: center;
}
.divImgClass{
  display: inline-flex;
  justify-content: center;
  align-items: center;
  /*border: 1px solid black;*/
  margin: 2px;
  width: 48px;
  height: 48px;
}
</style>