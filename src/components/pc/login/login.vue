<template>
  <div
      :style="[{backgroundImage:'url('+imgIconSrc+'registerbackNone.png)'}]"
      class="bodyRegisterClass">
    <div
        :style="[{backgroundImage:'url('+imgIconSrc+'registerLeftIcon.png)'}]"
        class="leftIcon">
      relinex
    </div>
    <el-collapse-transition name="el-fade-in">
      <el-icon
          @click="isTranRight"
          style="
          width: 40px;
          height: 60px;
          border-radius: 3px;
          position: absolute;
          cursor:pointer;
          transition: right 1.5s;"
          :style="[
            {right: isRight ? 475 + 'px' : 15+'px'},
            {backgroundColor: iconTranBack}
          ]"
          :size="40">
        <component :is='isRight ? "ArrowRight" : "ArrowLeft"'/>
      </el-icon>
    </el-collapse-transition>
    <div
        style="transition: width 1.5s;overflow: hidden"
        :style="[
            {width: tranWidth + 'px'}
        ]"
        class="login_right">
      <div>relinex</div>
      <el-form
          ref="ruleFormRef"
          :model="ruleForm"
          :rules="rules"
          label-width="100px"
          class="demo-ruleForm el-form-class"
          :size="formSize"
          status-icon
      >
        <div class="formNameClass">
          <img :src="(imgIconSrc+'resName.png')" alt="">
          <el-form-item
              class="el-form-item-class"
              label="账号"
              label-width="65px">
            <el-input class="el-form-input-class"
                      placeholder="电话"
                      v-model="ruleForm.user" />
          </el-form-item>
        </div>
        <div class="formNameClass" style="margin-top: 10px">
          <img :src="(imgIconSrc+'password.png')" alt="">
          <el-form-item
              label-width="65px"
              class="el-form-item-class"
              label="密码">
            <el-input class="el-form-input-class"
                      type="password"
                      placeholder="密码"
                      v-model="ruleForm.userPassword" />
          </el-form-item>
        </div>
        <div class="loginRes" @click="loginRegister">注册</div>
        <el-form-item style="margin-bottom: 0;width: 340px;margin-top: 40px">
          <el-button class="formButtonSubmit" type="primary" @click="submitForm(ruleFormRef)">登陆</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { EluiChinaAreaDht } from 'elui-china-area-dht'
const chinaData = new EluiChinaAreaDht.ChinaArea().chinaAreaflat

import { ElMessage } from 'element-plus'

import { globalStore } from "@/store/global/global";
import {storeToRefs} from "pinia";
const store = globalStore()
const { imgIconSrc } = storeToRefs(store)

const isRight = ref(true)
const tranWidth = ref(460)
const iconTranBack = ref('rgba(241,235,235,0.81)')
const isTranRight = () =>{
  isRight.value = !isRight.value
  if(isRight.value){
    tranWidth.value = 460
  }else{
    tranWidth.value = 0
  }
}
import {reactive, ref} from 'vue'
import type { FormInstance,FormRules} from 'element-plus'
import {useRouter} from "vue-router";
import {register} from "vue-tsc/out/apis";
const formSize = ref('default')
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive({
  user:''.trim(),
  userPassword:''.trim(),
})
import {getRsa,login} from "@/api/get";
//公匙
const publicKey = ref()
import * as sysTool from '@/assets/utils/systemTool'
const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      if(ruleForm.user === '' && ruleForm.userPassword === ''){
        ElMessage({
          showClose: true,
          message: '不能为空',
          type: 'warning',
        })
      }else {
        getRsa().then((res: { data: any; })=>{
          publicKey.value = res.data
          login(encrypt(ruleForm.user,publicKey.value),encrypt(ruleForm.userPassword,publicKey.value),
              localStorage.getItem("ip"),localStorage.getItem("cityname"),sysTool.GetCurrentBrowser(),sysTool.GetOs()).then((res: { data: any; })=>{
            if(res.data===null){
              ElMessage({
                showClose: true,
                message: '账号或密码输入错误请重新登陆',
                type: 'error'
              })
            }else {



              ElMessage({
                showClose: true,
                message: '登陆成功',
                type: 'success'
              })
            }
          })
        })
      }
    } else {
      console.log('error submit!', fields)
    }
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}
const router = useRouter()
const loginRegister = ()=>{
    router.push({
      name: 'register'
    })
}

const encrypt = (str:string,publicKey:string)=>{
  let jsEncrypt = new JSEncrypt();
  // 设置加密公钥，一般通过后端接口获取，这里写在前端代码中
  jsEncrypt.setPublicKey(publicKey);
  return jsEncrypt.encrypt(str);
}
</script>

<style>
.bodyRegisterClass>.login_right{
  position: absolute;
  right: 15px;
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 460px;
  height: 400px;
  border-radius: 10px;
  background-color: white;
  box-shadow: 1px 0 5px 1px #999;
  margin-left: 43px;
}
.bodyRegisterClass>.login_right>div{
  width: 100%;
  height: 70px;
  font-size: 50px;
  color: rgb(18, 150, 219);
}
.el-form-class{
  width: 74%;
  height: 60%;
}
.el-form-item-class{
  width: 100%;
  height: 40px;
}
.el-form-item__label{
  height: 40px !important;
  line-height: 40px !important;
  font-size: 19px;
}
.el-form-input-class{
  height: 40px;
  font-size: 20px;
}
.el-input__inner {
  height: 40px;
  font-size: 16px;
}
.bodyRegisterClass{
  width: 1920px;
  height: 937px;
  background-size: 100%;
  /*position: fixed;*/
  display: flex;
  justify-content: center;
  align-items: center;
}
.formNameClass{
  display: inline-flex;
  width: 100%;
}
.formNameClass>img{
  width: 40px;
  height: 40px;
}
.bodyRegisterClass>.leftIcon{
  width: 340px;
  height: 70px;
  background-color: white;
  box-shadow: 0 0 3px 1px #cdcbcb;
  position: absolute;
  top: 10px;
  left: 10px;
  border-radius: 10px;
  background-repeat: no-repeat;
  background-size: 14%;
  background-position: 10px center;
  font-size: 50px;
  color: rgb(18, 150, 219);
}
.el-form-item--default .el-form-item__content{
  margin-left: 0!important;
  display: inline-flex;
  justify-content: center;
  align-items: center;
}
.formButtonSubmit{
  width: 260px;
  height: 40px;
  font-size: 16px;
  letter-spacing: 3px;
}
.loginRes{
  width: 100px;
  height: 20px;
  font-size: 17px;
  font-family: “Microsoft YaHei”,sans-serif;
  color: #585353;
  -webkit-font-smoothing:none;
}
.loginRes:hover{
  font-size: 18px;
  font-family: “Microsoft YaHei”,sans-serif;
  color: #298df7;
  -webkit-font-smoothing:none;
  cursor: pointer;
}
</style>