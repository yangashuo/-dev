<template>
  <div
    class="userIndexClass">
    <el-row
        class="userIndexClassTopRow"
        justify="center"
        align="center">
      <el-col
          class="userIndexClassTopCol"
          :span=6>
        <div class="userIndexLeftMessage">
          <div class="userIndexLeftMessageTop">
            <el-row
                class="userIndexLeftMessageTopRow"
                justify="center"
                align="center">
              <el-col
                  class="userIndexLeftMessageTopColImg"
                  :span="4">
                <img src="/public/img/like.svg" alt="">
              </el-col>
              <el-col
                  class="userIndexLeftMessageTopCol"
                  :span="6">
                <div class="colTop colTextTem">关注</div>
                <div class="colBottom colTextTem">324</div>
              </el-col>
              <el-col
                  class="userIndexLeftMessageTopCol"
                  :span="6">
                <div class="colTop colTextTem">粉丝</div>
                <div class="colBottom colTextTem">4535</div>
              </el-col>
              <el-col
                  class="userIndexLeftMessageTopCol"
                  :span="6">
                <div class="colTop colTextTem">获赞</div>
                <div class="colBottom colTextTem">343224</div>
              </el-col>
            </el-row>
          </div>
          <div class="userIndexLeftMessageBottom">
            <div class="colBottom messageBottomName">小王八蛋</div>
            <div class="colBottom messageBottomRelinex">relinex号：123123123</div>
            <div class="colBottom messageBottomAbout">最开心的事不过你在我身边</div>
          </div>
        </div>
        <div class="userIndexHistory">
          <el-card class="historyCard">
            <template #header>
              <div class="historyCard-header">
                <span>历史消息</span>
                <el-button class="button" text>全部消息</el-button>
              </div>
            </template>
            <el-card class="historyCardLoad">
              <div v-for="o in 10" :key="o" class="text item">{{ 'List item ' + o }}</div>
            </el-card>
          </el-card>
        </div>
      </el-col>
      <el-col
          style="height: 822px"
          :span="18">
          <div class="userIndexIsClass">
            <div class="userIndexIsClass-div">
              <div class="userIndexIsClass-div-div">作品 23</div>
              <div class="userIndexIsClass-div-div">喜欢 23431</div>
              <div class="userIndexIsClass-div-div">收藏 123</div>
            </div>
            <el-scrollbar
                ref="scrollbar"
                height="730px"
                max-height="730px"
                :noresize="false">
              <el-row class="userIndexIsClass-row">
                <el-col
                    @click="routerView(srcData)"
                    class="userIndexIsClass-col"
                    :span="7"
                    v-for="srcData in videoData">
                  <vue3VideoPlay
                      :="options"
                      :src="(videoUrl+srcData)"
                  />
                  <div class="videoDivText">
                    <svg t="1659350005655" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2112" data-spm-anchor-id="a313x.7781069.0.i0" width="50" height="50"><path d="M224 938.713333a53.58 53.58 0 0 1-53.333333-53.433333V138.72a53.333333 53.333333 0 0 1 80.886666-45.666667l618.666667 373.28a53.333333 53.333333 0 0 1 0 91.333334l-618.666667 373.28a53.16 53.16 0 0 1-27.553333 7.766666z m0.046667-810.666666a10.98 10.98 0 0 0-5.333334 1.42 10.466667 10.466667 0 0 0-5.38 9.253333v746.56a10.666667 10.666667 0 0 0 16.18 9.133333l618.666667-373.28a10.666667 10.666667 0 0 0 0-18.266666l-618.666667-373.28a10.386667 10.386667 0 0 0-5.446666-1.586667z" fill="#ffffff" p-id="2113" data-spm-anchor-id="a313x.7781069.0.i1" class="selected"></path></svg>
                    <span>324</span>
                  </div>
                </el-col>
              </el-row>
            </el-scrollbar>
          </div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>

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

const scrollbar = ref()

const options = reactive({
  width: "306px",
  height: "405px",
  color: "#409eff",
  title: "title",
  muted: true, //静音
  poster:"",//封面
  webFullScreen: false,
  control: false, //是否显示控制
});

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

//主页视频范围的宽
import {onMounted, onUpdated, reactive, ref} from "vue";

const elRowVideo = ref(1400)
import {storeToRefs} from "pinia";
import {globalStore} from "../../../../store/global/global";
const globalStoreData = globalStore()
const { showWidth,videoSrc } = storeToRefs(globalStoreData)
onMounted(()=>{
  elRowVideo.value =  1700 * showWidth.value / 1920
  scrollbar.value.setScrollTop(0)
})
</script>

<style>
.userIndexClass{
  position: absolute;
  justify-content: center;
  align-items: center;
  display: inline-flex;
  /*border: 1px solid black;*/
  top: 105px;
  left: 200px;
}
.userIndexClassTopRow{
  width: v-bind(elRowVideo + 'px');
  height: 822px;
  flex-wrap: nowrap;
}
.userIndexClassTopCol{
  justify-content: center;
  align-items: center;
  background-color: #fafafa
}
.userIndexLeftMessage{
  width: 100%;
  height: 40%;
  /*border: 1px solid black;*/
  display: flex;
  flex-wrap: wrap;
}
.userIndexLeftMessageTop{
  width: 100%;
  height: 30%;
  /*border: 1px solid black;*/
  display: inline-flex;
}
.userIndexLeftMessageTopRow{
  display: inline-flex;
  position: relative;
  width: 100%;
  height: 100%;
}
.userIndexLeftMessageTopCol{
  /*border-right: 1px solid black;*/
}
.userIndexLeftMessageTopColImg{
  display: flex;
  justify-content: left;
}
.userIndexLeftMessageTopColImg>img{
  border: 1px solid black;
}
.userIndexLeftMessageBottom{
  width: 100%;
  height: 70%;
  /*border: 1px solid black;*/
  margin-left: 20px;
}
.userIndexLeftMessageBottom .colBottom{
  width: 100%;
  height: 25%;
  /*border: 1px solid black;*/
  text-align: left;
  font-family: “Microsoft YaHei”,sans-serif;
  color: #585353;
  -webkit-font-smoothing:none;
}
.userIndexLeftMessageBottom .messageBottomName{
  font-weight: bold;
  display: flex;
  align-items: center;
  font-size: 24px;
}
.userIndexLeftMessageBottom .messageBottomRelinex{
  font-size: 16px;
  height: 15%;
  display: flex;
  align-items: center;
}
.userIndexLeftMessageBottom .messageBottomAbout{
  font-size: 18px;
  height: 50%;
}
.colTextTem{
  width: 100%;
  height: 47px;
  display: inline-flex;
  justify-content: center;
  font-family: “Microsoft YaHei”,sans-serif;
  color: #585353;
  -webkit-font-smoothing:none;
}
.colTop{
  /*border: 1px solid black;*/
  align-items: end;
  margin-bottom: 2px;
  font-size: 16px;
}
.colBottom{
  margin-top: 2px;
  /*border: 1px solid black;*/
  align-items: start;
  font-size: 20px;
}
.userIndexHistory{
  width: 100%;
  height: 60%;
  /*border: 1px solid black;*/
  display: inline-flex;
  position: relative;
}
.historyCard{
  width: 100%;
  background-color: #fafafa;
}
.historyCard-header{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.el-card__header{
  border-bottom: none;
}
.historyCardLoad{
  overflow-y: auto !important;
  max-height: 414px;
  background-color: #fafafa;
}
.historyCard-header span{
  font-size: 24px;
  font-family: “Microsoft YaHei”,sans-serif;
  font-weight: bold;
  color: #6c6c6f;
  -webkit-font-smoothing:none;
}
.el-button>span{
  font-size: 15px;
}
.item{
  border: none;
}
.el-card.is-always-shadow{
  box-shadow: none;
}
.el-card{
  border: none;
}
.userIndexIsClass{
  position: relative;
  width: 84%;
  height: 100%;
  /*border: 1px solid black;*/
  left: 50px;
}
.userIndexIsClass-div{
  position: relative;
  width: 100%;
  height: 6%;
  /*border: 1px solid black;*/
  display: inline-flex;
  justify-content: left;
}
.userIndexIsClass-div-div{
  margin-left: 20px;
  width: 15%;
  height: 100%;
  display: inline-flex;
  justify-content: left;
  cursor: pointer;
  align-items: end;
  /*border: 1px solid black;*/
  font-size: 20px;
  font-family: “Microsoft YaHei”,sans-serif;
  color: #585353;
  -webkit-font-smoothing:none;
}
.userIndexIsClass-row{
  display: inline-flex;
  position: relative;
  flex-wrap: wrap;
  width: 100%;
  height: 90%;
  /*border: 1px solid black;*/
}
.userIndexIsClass-col{
  height: 405px;
  /*border: 1px solid black;*/
  margin: 25px 20px 0 20px;
}
.userIndexIsClass-col .d-play-btn{
  display: none!important;
}
.videoDivText{
  position: relative;
  width: 80px;
  height: 30px;
  z-index: 100;
  color: white;
  bottom: 30px;
  display: inline-flex;
  align-items: center;
  left: -113px;
}
.videoDivText>svg{
  width: 28px;
  height: 28px;
}
.el-scrollbar{
  height: 90%;
}
</style>