<template>
  <div class="indexClass">
    <el-row class="indexClassZoomRow">
      <el-col class="indexClassZoomCol" :span="24">
        <vue3VideoPlay
            :="options"
            :src="(videoUrl+route.params.name)"
        />
      </el-col>
    </el-row>
    <videoUser/>
  </div>
</template>

<script setup>
import videoUser from '@/components/pc/index/videoUser/videoUser.vue'
import {onMounted, reactive, ref} from "vue"
import { globalStore } from '../../../../store/global/global'

const videoUrl = ref('/public/mp4/')
//路由接受传参
import { useRoute } from 'vue-router'
const route = useRoute()

// :src="(videoSrc+srcData)"

//主页视频范围的宽
const elRowVideo = ref(1400)

const options = reactive({
  width: "1695px",
  height: "800px",
  color: "#409eff",
  title: "title",
  // src:"/public/mp4/走马.mp4",
  muted: false, //静音
  poster:"",//封面
  webFullScreen: false,
  speedRate: ["0.75", "1.0", "1.25", "1.5", "2.0","3.0","5.0"], //播放倍速
  autoPlay: false, //自动播放
  loop: true, //循环播放
  mirror: false, //镜像画面
  ligthOff: false, //关灯模式
  volume: 0.5, //默认音量大小
  preload:'none',
  control: true, //是否显示控制
  controlBtns: [
    "audioTrack",
    "quality",
    "speedRate",
    "volume",
    "setting",
    "pip",
    "pageFullScreen",
    "fullScreen",
  ], //显示所有按钮,
});
import {storeToRefs} from "pinia";
const globalStoreData = globalStore()
const { showWidth,videoSrc } = storeToRefs(globalStoreData)
onMounted(()=>{
  elRowVideo.value =  1700 * showWidth.value / 1920
})
// const indexWidthClass = showWidth.value
</script>

<style scoped>
.indexClassZoomRow{
  width: v-bind(elRowVideo + 'px');
}
.indexClassZoomCol{
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  margin-left: 10px;
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
  top: 105px;
  left: 200px;
}
</style>