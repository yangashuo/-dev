<template>
  <div class="indexClass">
    <el-scrollbar
        ref="scrollbar"
        height="830px"
        max-height="830px"
        :noresize="false">
      <el-row class="indexClassRow">
        <el-col
            class="videoBtu"
            :span="6"
            v-for="srcData in videoData"
            @click="routerView(srcData)">
          <vue3VideoPlay
              :="options"
              :src="(videoUrl+srcData)"
          />
        </el-col>
      </el-row>
    </el-scrollbar>
  </div>
</template>

<script setup>
import {onMounted, reactive, ref} from "vue"
import { globalStore } from '../../../store/global/global'
// :src=videoUrl+srcData
// :src="(videoSrc+srcData)"
const videoUrl = ref('/public/mp4/')
const videoData = ref([
  "走马合唱.mp4",
  "走马.mp4",
  "周星驰（再见）.mp4",
  "这就是爱.mp4",
  "长大秋千.mp4",
  "云烟成雨.mp4",
  "原谅我不可自拔.mp4",
  "英文不认识.mp4",
  "疑心病.mp4",
])

//主页视频范围的宽
const elRowVideo = ref(1400)

const options = reactive({
  width: "372px",
  height: "244px",
  color: "#409eff",
  title: "title",
  muted: true, //静音
  poster:"",//封面
  webFullScreen: false,
  control: false, //是否显示控制
});

import {storeToRefs} from "pinia";
const globalStoreData = globalStore()
const { showWidth,videoSrc } = storeToRefs(globalStoreData)

const scrollbar = ref()
onMounted(()=>{
  elRowVideo.value =  1700 * showWidth.value / 1920
  scrollbar.value.setScrollTop(0)
})

//路由点击视频放大
import { useRouter } from 'vue-router'
const router = useRouter()

const routerView = (srcData) => {
  router.push({
    name: 'videoZoomIn',
    params:{
      name:srcData
    }
  });
}

</script>

<style>
.indexClassRow{
  width: v-bind(elRowVideo + 'px');
}
.videoBtu{
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
}
.d-player-wrap{
  border-radius: 13px;
}
.d-player-input{
  cursor: pointer !important;
}
.indexClass{
  position: absolute;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  /*border: 1px solid black;*/
  top: 105px;
  left: 200px;
  height: 830px;
}
.videoBtu .d-play-btn{
  display: none!important;
}
</style>