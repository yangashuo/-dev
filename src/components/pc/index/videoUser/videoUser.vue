<template>
  <div
      class="videoUserClass">
    <el-row align="center"
            :style="[{height:'55px'}]"
        justify="center">
      <el-col>
        <div class="userClass">
          <img :src="(imgIconSrc+'user.png')" alt="用户"/>
        </div>
      </el-col>
    </el-row>
    <el-row align="center"
            justify="center">
      <el-col>
        <like
        :iconName="likeName"/>
        <div class="count">
          {{count.like}}
        </div>
      </el-col>
    </el-row>
    <el-row align="center"
            justify="center">
      <el-col>
        <like
            :iconName="collectName"/>
        <div class="count">
          {{count.collect}}
        </div>
      </el-col>
    </el-row>
    <el-row align="center"
            justify="center">
      <el-col>
        <div class="commentClass">
          <img :src="(imgIconSrc+'videoComment.svg')" alt="评论"/>
        </div>
        <div class="count">
          {{count.comment}}
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import {ref} from "vue";
import like from '@/components/pc/template/like.vue'
import { globalStore } from "../../../../store/global/global";
import {storeToRefs} from "pinia";
const store = globalStore()
const { imgIconSrc } = storeToRefs(store)
const likeName = ref("like")
const collectName = ref("collect")

const count = ref({
  like:12,
  collect:34,
  comment:53
})

//是否显示
const flag = ref(false)
</script>

<style scoped>
.videoUserClass{
  position: absolute;
  width: 40px;
  height: 320px;
  top: 320px;
  right: 15px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  z-index: 100;
}
.userClass{
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: #e0e0e5;
  cursor: pointer;
  /*border: 1px solid black;*/
}
img{
  border-radius: 50%;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.el-row{
  /*border: 1px solid black;*/
  width: 60px;
  height: 65px;
}
.count{
  /*border: 1px solid black;*/
  font-size: 16px;
  font-family: “Microsoft YaHei”,sans-serif;
  color: #ffffff;
  -webkit-font-smoothing:none;
}
</style>