<template>
  <div class="left">
    <div class="logoLeftClass">
      <h2>ReLineX</h2>
    </div>
    <div
        @click="isCollapse = !isCollapse"
        :collapse="isCollapse"
        class="iconFlexible">
      <el-collapse-transition name="el-fade-in">
        <el-icon
            :size="35"
            :style="[{left: isCollapse ? '0' : '120px'}]">
          <component :is='isCollapse ? "ArrowRight" : "ArrowLeft"'/>
        </el-icon>
      </el-collapse-transition>
    </div>
    <el-menu
        default-active="1"
        class="el-menu-vertical-demo"
        :collapse="isCollapse"
    >
      <el-menu-item
          v-for="(data,index) in ic"
          :index="index"
          :key="index">
        <el-icon
            :size="30">
          <component :is="data.src"/>
        </el-icon>
        <template #title>{{data.message}}</template>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isCollapse = ref(true)

const ic = ref(
    [{
      src:"AddLocation",
      message:"蛋蛋001"
    },{
      src:"Aim",
      message:"蛋蛋002"
    },{
      src:"AlarmClock",
      message:"蛋蛋003"
    }]
)
</script>

<style scoped>
.left{
  /*border: 1px solid black;*/
  position: absolute;
  left: 0;
  width: 200px;
  height: 937px;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 815px;
}
.iconFlexible{
  position: relative;
  width: 170px;
  height: 35px;
  cursor: pointer;
  display: inline-flex;
  justify-content: left;
  align-items: center;
  /*border: 1px solid black;*/
  z-index: 100;
}
.iconFlexible .el-icon{
  position: absolute;
  transition: 0.5s;
}
.el-menu-item{
  font-size: 18px;
  font-family: “Microsoft YaHei”,sans-serif;
  color: #585353;
  -webkit-font-smoothing:none;
}
.el-menu{
  top: -30px;
  padding-top: 30px;
}
.el-menu-item [class^=el-icon]{
  margin-right: 25px;
}
.logoLeftClass{
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  color: rgba(183, 104, 239, 0.8);
  height: 95px;
  font-family: “Microsoft YaHei”,sans-serif;
  -webkit-font-smoothing:none;
}
</style>