<template>
  <div class="searchHeader">
    <el-input
        v-model="searchInput"
        type="text"
        maxlength="10"
        minlength="1"
        size="large"
        clearable="ture"
        name="search"
        @focus="onFocusClear"
        @blur="onBlurClear"
        placeholder="搜索你感兴趣的内容">
      <template #prefix>
        <el-icon>
          <search />
        </el-icon>
      </template>
      <template #append>
        <div
            class="templateDiv"
            @mousedown="searchAppendMousedown"
            @mouseup="searchAppendMouseup">
          <el-icon
              :color="appendIconColor"
          >
            <search />
          </el-icon>
          <span
              :style="[
            {paddingLeft: appendSpanPaddingLeft + 'px'},
            {paddingRight: appendSpanPaddingRight + 'px'},
            {fontSize: appendSpanFontSize + 'px'},
            {fontFamily: appendSpanFontFamily},
            {color:appendSpanColor}
          ]"
          >搜索</span>
        </div>
      </template>
    </el-input>
  </div>
</template>

<script setup>
import {onMounted, ref} from 'vue'

//输入框内容
const searchInput = ref('')

//搜索框后缀样式
const appendIconColor = ref('black')
const appendSpanColor = ref('black')
const appendSpanPaddingLeft = ref(6)
const appendSpanPaddingRight = ref(6)
const appendSpanFontSize = ref(20)
const appendSpanFontFamily = ref('STSong')

//鼠标点击搜索按钮
const searchAppendMousedown = (() => {
  appendSpanIconSize.value = appendSpanIconSize.value * 0.94
  appendSpanFontSize.value = appendSpanFontSize.value * 0.94
})
//鼠标松开搜索按钮
const searchAppendMouseup = (() => {
  appendSpanIconSize.value = appendSpanIconSize.value / 0.94
  appendSpanFontSize.value = appendSpanFontSize.value / 0.94
})

//后置搜索框icon的大小
const appendSpanIconSize = ref(24)
//前置搜索框icon的大小
const prefixIconSize = ref(17)
//搜索框的长宽
const searchInputWidth = ref(420)
const searchInputHeight = ref(50)
//后置的宽高
const appendWidth = ref(96)
const appendHeight = ref(52)
//搜索框的宽
const searchWidth = ref(600)
//搜索框的边距
const searchMarginTop = ref(60)
const searchMarginBottom = ref(47)

//获取浏览器的宽高
import { globalStore } from '../../../store/global/global.ts'
import {storeToRefs} from "pinia";
const globalStoreData = globalStore()
const { showWidth,showHeight } = storeToRefs(globalStoreData)

onMounted(() => {
  //初始化组件大小
  prefixIconSize.value = showWidth.value * 17 / 1920
  searchInputWidth.value = showWidth.value * 420 / 1920
  searchInputHeight.value = showHeight.value * 50 / 937
  appendSpanPaddingLeft.value = showWidth.value * 6 / 1920
  appendSpanPaddingRight.value = showWidth.value * 6 / 1920
  appendSpanIconSize.value = showWidth.value * 24 / 1920
  appendSpanFontSize.value = showWidth.value * 20 / 1920

  appendWidth.value = showWidth.value * 96 / 1920
  appendHeight.value = showHeight.value * 52 / 937

  searchMarginTop.value = showHeight.value * 60 / 937
  searchMarginBottom.value = showHeight.value * 27 / 937

  searchWidth.value = showWidth.value * 600 / 1920
})

//搜索框获取焦点
const onFocusClear = (()=>{

})
//搜索框失去焦点
const onBlurClear = (()=>{

})
</script>

<style>
.el-input__wrapper{
  width: v-bind(searchInputWidth + 'px');
  height: v-bind(searchInputHeight + 'px');
  border-top-left-radius: 8px !important;
  border-bottom-left-radius: 8px !important;
}
.el-input--large{
  font-size: v-bind(appendSpanIconSize + 'px') !important;
}
.el-input-group{
  width: v-bind(searchWidth + 'px') !important;
}
.el-input__inner{
  font-size: v-bind(prefixIconSize + 'px') !important;
  letter-spacing: 2px;
  font-family: 'STSong',monospace;
}
.el-input-group__append{
  padding: 0 10px !important;
  width: v-bind(appendWidth + 'px') !important;
  height: v-bind(appendHeight + 'px') !important;
  border-top-right-radius: 8px !important;
  border-bottom-right-radius: 8px !important;
}
.templateDiv{
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.el-input__clear{
  font-size: 24px !important;
}
.el-input-group__append{
  background-image: linear-gradient(-225deg, #E3FDF5 0%, #FFE6FA 100%);
}
.searchHeader{
  position: absolute;
  /*border: 1px solid black;*/
  /*margin: v-bind(searchMarginTop + 'px') 0 v-bind(searchMarginBottom + 'px') 0;*/
  display: inline-flex;
  justify-content: left;
  width: 600px;
  align-items: center;
  left: 230px;
  top: 25px;
}
</style>