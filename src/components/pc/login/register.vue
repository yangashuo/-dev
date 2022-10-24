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
        class="res_right">
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
              label="姓名"
              label-width="65px"
              prop="userName"
              required>
            <el-input class="el-form-input-class" v-model="ruleForm.userName" />
          </el-form-item>
        </div>
        <div class="formNameClass">
          <img :src="(imgIconSrc+'resSex.png')" alt="">
          <el-form-item
              class="el-form-item-class"
              label-width="65px"
              label="性别">
            <el-select class="el-select-class" v-model="ruleForm.userSex" placeholder="男">
              <el-option label="男" value="男" />
              <el-option label="女" value="女" />
            </el-select>
          </el-form-item>
        </div>
        <div class="formNameClass">
          <img :src="(imgIconSrc+'resPhone.png')" alt="">
          <el-form-item
              label-width="65px"
              class="el-form-item-class"
              label="电话"
              prop="userPhone"
              required>
            <el-input class="el-form-input-class" v-model="ruleForm.userPhone" />
          </el-form-item>
        </div>
        <div class="formNameClass">
          <img :src="(imgIconSrc+'resAddress.png')" alt="">
          <el-form-item
              class="el-form-item-class"
              label-width="65px"
              label="地址"
              required
              prop="userAddress">
            <el-col :span="24">
              <el-form-item>
                <elui-china-area-dht
                    class="elui-china-class" v-model="ruleForm.userAddress" @change="onChange"/>
              </el-form-item>
            </el-col>
          </el-form-item>
        </div>
        <div class="formNameClass">
          <img :src="(imgIconSrc+'resEmail.png')" alt="">
          <el-form-item
              class="el-form-item-class"
              label-width="65px"
              label="邮箱">
            <el-input class="el-form-input-class" v-model="ruleForm.userEmail" />
          </el-form-item>
        </div>
        <div class="formNameClass">
          <img :src="(imgIconSrc+'resDate.png')" alt="">
          <el-form-item
              class="el-form-item-class"
              label="生日"
              label-width="65px"
              prop="userBirthday"
              required>
            <el-col :span="22">
              <el-form-item>
                <el-date-picker
                    v-model="ruleForm.userBirthday"
                    type="date"
                    label="生日"
                    format="YYYY/MM/DD"
                    value-format="YYYY-MM-DD"
                    placeholder="2022-08-06"
                    style="width: 100%"
                />
              </el-form-item>
            </el-col>
          </el-form-item>
        </div>
        <el-form-item style="margin-bottom: 0;width: 340px">
          <el-button class="formButtonNext" type="primary" @click="two">下一步</el-button>
          <el-button class="formButtonNext" @click="resetForm(ruleFormRef)">重置</el-button>
        </el-form-item>
      </el-form>
    </div>


    <el-collapse-transition name="el-fade-in">
      <el-icon
          @click="isTranRightTwo"
          style="
          height: 60px;
          border-radius: 3px;
          position: absolute;
          cursor:pointer;
          transition: right 1.5s;"
          :style="[
             {width:isRightTwo ? 40 + 'px' : '0'},
            {right: isRightTwo ? 475 + 'px' : 15+'px'},
            {backgroundColor: iconTranBack}
          ]"
          :size="40">
        <component :is='isRightTwo ? "ArrowRight" : "ArrowLeft"'/>
      </el-icon>
    </el-collapse-transition>
    <div
        style="transition: width 1.5s;overflow: hidden"
        :style="[
            {width: twoTranWidth + 'px'}
        ]"
        class="res_right">
      <div style="position: absolute;top: 40px">relinex</div>
      <el-form
          ref="ruleFormRef"
          :model="ruleForm"
          :rules="rules"
          label-width="100px"
          class="demo-ruleForm el-form-class nextClass"
          :size="formSize"
          status-icon
      >
        <div class="formNameClass formPass">
          <img :src="(imgIconSrc+'password.png')" alt="">
          <el-form-item
              class="el-form-item-class"
              label="密码"
              required
              label-width="65px"
              prop="userPassword">
            <el-input type="password" class="el-form-input-class" v-model="ruleForm.userPassword" />
          </el-form-item>
        </div>
        <div class="formNameClass marginNextTwo">
          <img :src="(imgIconSrc+'password.png')" alt="">
          <el-form-item
              class="el-form-item-class"
              label="确认密码"
              label-width="110px">
            <el-input type="password" class="el-form-input-class" v-model="passwordToo" />
          </el-form-item>
        </div>
        <el-form-item style="margin-bottom: 0;width: 340px">
          <el-button class="formButtonNext" @click="one">上一步</el-button>
          <el-button class="formButtonNext" type="primary" @click="three">下一步</el-button>
        </el-form-item>
      </el-form>
    </div>


    <el-collapse-transition name="el-fade-in">
      <el-icon
          @click="isTranRightThree"
          style="
          height: 60px;
          border-radius: 3px;
          position: absolute;
          cursor:pointer;
          transition: right 1.5s;"
          :style="[
            {width:isRightThree ? 40 + 'px' :'0'},
            {right: isRightThree ? 475 + 'px' : 15+'px'},
            {backgroundColor: iconTranBack}
          ]"
          :size="40">
        <component :is='isRightThree ? "ArrowRight" : "ArrowLeft"'/>
      </el-icon>
    </el-collapse-transition>
    <div
        style="transition: width 1.5s;overflow: hidden"
        :style="[
            {width: threeTranWidth + 'px'}
        ]"
        class="res_right">
      <div style="position: absolute;top: 20px">relinex</div>
      <el-form
          ref="ruleFormRef"
          :model="ruleForm"
          :rules="rules"
          label-width="100px"
          class="demo-ruleForm el-form-class ThreeClass"
          :size="formSize"
          status-icon
      >
        <el-upload
            class="avatar-uploader"
            action="http://127.0.0.1:801/wx/rl/head"
            :show-file-list="false"
            :data="{userPhone:ruleForm.userPhone}"
            name="headImg"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
            :on-error="handleAvatarError"
        >
          <img v-if="imageUrl" :src="imageUrl" class="avatar" />
          <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
        </el-upload>
        <div class="formNameClass" style="margin-top: 30px">
          <img :src="(imgIconSrc+'nickName.png')" alt="">
          <el-form-item
              class="el-form-item-class"
              label="昵称"
              label-width="65px"
              required
              prop="userNickname">
            <el-input class="el-form-input-class" v-model="ruleForm.userNickname" />
          </el-form-item>
        </div>
        <div class="formNameClass" style="margin-top: 10px">
          <img :src="(imgIconSrc+'about.png')" alt="">
          <el-form-item
              class="el-form-item-class"
              label="简介"
              label-width="65px"
              prop="userAbout">
            <el-input
                v-model="ruleForm.userAbout"
                :rows="4"
                type="textarea"
                maxlength="80"
                clearable="true"
                show-word-limit="true"
                size="large"
                placeholder="输入一段话介绍自己！"
            />
          </el-form-item>
        </div>
        <el-form-item style="margin-bottom: 0;width: 340px;margin-top: 80px">
          <el-button class="formButtonNext" @click="two">上一步</el-button>
          <el-button class="formButtonNext" type="primary" @click="submitForm(ruleFormRef)">提交</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { EluiChinaAreaDht } from 'elui-china-area-dht'
const chinaData = new EluiChinaAreaDht.ChinaArea().chinaAreaflat

import { globalStore } from "@/store/global/global";
import {storeToRefs} from "pinia";
const store = globalStore()
const { imgIconSrc } = storeToRefs(store)

const isRight = ref(true)
const isRightTwo = ref(false)
const isRightThree = ref(false)
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
const isTranRightTwo = () =>{
  isRightTwo.value = !isRightTwo.value
  if(isRightTwo.value){
    twoTranWidth.value = 460
  }else{
    twoTranWidth.value = 0
  }
}
const isTranRightThree = () =>{
  isRightThree.value = !isRightThree.value
  if(isRightThree.value){
    threeTranWidth.value = 460
  }else{
    threeTranWidth.value = 0
  }
}

import {reactive, ref} from 'vue'
import type { FormInstance, FormRules } from 'element-plus'

const formSize = ref('default')
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive({
  userName: ''.trim(),
  userSex:'',
  userPhone:''.trim(),
  userEmail:''.trim(),
  userBirthday: '',
  userAddress: '',
  userPassword:'',
  userNickname:''.trim(),
  userAbout:''.trim(),
})

const addressName = (china: object,data:string) => {
  let string = ''
  for (let i = 0; i < 3; i++) {
    let index = searching(data[i],Object.keys(china))
    string += Object.values(china)[index].label
  }
  return string
}

const searching = (target:string,obj:Array<string>) => {
  let start = 0, end = obj.length, middle, element;
  while (start <= end){
    middle = Math.floor((start+end)/2)
    element = obj[middle]
    if(element === target){
      return middle
    }else if(target < element){
      end = middle - 1
    }else {
      start = middle + 1
    }
  } return -1
}

const nameZ = /^[\u4e00-\u9fa5]{2,10}$/
const phoneZ = /^1(3[0-9]|4[01456879]|5[0-35-9]|6[2567]|7[0-8]|8[0-9]|9[0-35-9])\d{8}$/
const passwordZ = /^[a-zA-Z0-9_.@]{6,16}$/
const emailZ = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/.test(ruleForm.userEmail)
const nickNameZ = /^[\u4e00-\u9fa5a-zA-Z0-9`~!@#$%^&*()_\-+=<>?:"{}|,.\/;'\\[\]·~！@#￥%……&*（）——\-+={}|《》？：“”【】、；‘'，。、]{1,10}$/

const rules = reactive<FormRules>({
  userName: [
    { required: true, message: '不能为空', trigger: 'blur' },
    {
      min: 2, max: 10, message: '必须为中文且2-10位', trigger: 'blur',
      pattern: nameZ }
  ],
  userPhone: [
    {
      required: true,
      message: '不能为空',
      trigger: 'blur',
    },
    {
      message: '请输入正确的电话号', trigger: 'blur',
      pattern: phoneZ }
  ],
  userBirthday: [
    {
      type: 'date',
      required: true,
      message: '请选择生日',
      trigger: 'blur',
    }
  ],
  userAddress: [
    {
      required: true,
      message: '请选择地址',
      trigger: 'blur',
    }
  ],
  password:[
    { required: true, message: '不能为空', trigger: 'blur' },
    {
      min: 6, max: 18, message: '6~18位,且只能是字母、数字、下划线、小数点和@符号', trigger: 'blur',
      pattern: passwordZ }
  ],
  userNickname:[
    { required: true, message: '不能为空', trigger: 'blur'},
    {
      min: 1, max: 10, message: '1-10位字符', trigger: 'blur',
      pattern: nickNameZ }
  ],
  userAbout:[
    {
      min: 1, max: 80, message: '1-80位字符', trigger: 'change',
      pattern: nickNameZ }
  ]
})
import {registerOne} from "@/api/get";
import * as sysTool from '@/assets/utils/systemTool'
const twoTranWidth = ref(0)
const threeTranWidth = ref(0)
const one = () => {
  threeTranWidth.value = 0
  tranWidth.value = 460
  isRight.value = true
  isRightTwo.value = false
  isRightThree.value = false
  twoTranWidth.value = 0
}
const two = () => {
  if(ruleForm.userName !== '' && ruleForm.userSex !== ''
      && ruleForm.userPhone !== ''
      && ruleForm.userBirthday !== ''
      && ruleForm.userAddress !== ''){

      if(ruleForm.userEmail !== ''){
        if(!emailZ){
          ElMessage({
            showClose: true,
            message: "邮箱格式错误",
            type: 'error',
          })
          return
        }else {
          threeTranWidth.value = 0
          tranWidth.value = 0
          isRightTwo.value = true
          isRight.value = false
          isRightThree.value = false
          twoTranWidth.value = 460

          registerOne(ruleForm.userPhone,localStorage.getItem("ip"),localStorage.getItem("cityname"),sysTool.GetCurrentBrowser(),sysTool.GetOs());
        }
      }

    threeTranWidth.value = 0
    tranWidth.value = 0
    isRightTwo.value = true
    isRight.value = false
    isRightThree.value = false
    twoTranWidth.value = 460

    registerOne(ruleForm.userPhone,localStorage.getItem("ip"),localStorage.getItem("cityname"),sysTool.GetCurrentBrowser(),sysTool.GetOs());
  }else {
    ElMessage({
      showClose: true,
      message: "未填写完整",
      type: 'error',
    })
  }
}
const passwordToo = ref('')
import { ElMessage } from 'element-plus'
const three = () => {
  if(ruleForm.userPassword !== '' && passwordToo.value !== ''){
    //验证两次密码一致性
    if(ruleForm.userPassword !== passwordToo.value){
      ElMessage({
        showClose: true,
        message: '两次密码输入不一致，请重新输入！',
        type: 'success',
      })
    }else {
      twoTranWidth.value = 0
      threeTranWidth.value = 460
      isRightTwo.value = false
      isRight.value = false
      isRightThree.value = true
      tranWidth.value = 0
    }
  }else {
    ElMessage({
      showClose: true,
      message: "密码不能为空",
      type: 'error',
    })
  }
}
import type { UploadInstance } from 'element-plus'
const uploadRef = ref<UploadInstance>()
const router = useRouter()
import {register} from "@/api/get";
import { toRaw } from '@vue/reactivity'
const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      if(ruleForm.userNickname !== ''){
        if (ruleForm.userAbout === ''){
          ruleForm.userAbout = "这个家伙很懒，什么都没留下!"
        }
        ruleForm.userAddress = addressName(chinaData,ruleForm.userAddress)
        register(toRaw(ruleForm)).then((res: any)=>{
          if(res.data === "true"){
            ElMessage({
              showClose: true,
              message: "注册成功",
              type: 'success',
            })
            router.push({
              name:'login'
            })
          }else if(res.data === "true") {
            ElMessage({
              showClose: true,
              message: "注册失败，请重新注册！",
              type: 'error',
            })
          }
        }).catch((err: any)=>{
          console.log(err)
        })
      }else {
        ElMessage({
          showClose: true,
          message: "请输入昵称",
          type: 'error',
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

import { Plus } from '@element-plus/icons-vue'

import type { UploadProps } from 'element-plus'
import {useRouter} from "vue-router";

const imageUrl = ref('')
const handleAvatarSuccess: UploadProps['onSuccess'] = (
    response,
    uploadFile
) => {
  imageUrl.value = URL.createObjectURL(uploadFile.raw!)
  console.log(imageUrl.value)
  ElMessage({
    showClose: true,
    message: response,
    type: 'success',
  })
}
const handleAvatarError: UploadProps['onError'] = (
    response:any,
) => {
  ElMessage({
    showClose: true,
    message: response.data,
    type: 'success',
  })
}

const beforeAvatarUpload: UploadProps['beforeUpload'] = (rawFile) => {
  if (rawFile.type !== 'image/jpeg' && rawFile.type !== 'image/png' && rawFile.type !== 'image/jpg') {
    ElMessage.error('图片格式只支持image/jpeg/png/jpg')
    return false
  } else if (rawFile.size / 1024 / 1024 > 4) {
    ElMessage.error('头像大小不能超过4MB!')
    return false
  }
  return true
}
</script>

<style>
.bodyRegisterClass>.res_right{
  position: absolute;
  right: 15px;
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 460px;
  height: 530px;
  border-radius: 10px;
  background-color: white;
  box-shadow: 1px 0 5px 1px #999;
  margin-left: 43px;
}
.bodyRegisterClass>.res_right>div{
  width: 100%;
  height: 70px;
  font-size: 50px;
  color: rgb(18, 150, 219);
}
.el-form-class{
  width: 74%;
  height: 78%;
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
.elui-china-class{
  width: 100%;
  height: 100%;
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
.formButtonNext{
  width: 135px;
  height: 40px;
  font-size: 16px;
  letter-spacing: 3px;
}
.el-form-item--default .el-form-item__content{
  margin-left: 0!important;
  display: inline-flex;
  justify-content: center;
  align-items: center;
}
.res_right>.nextClass{
  position: absolute;
  top: 180px;
}
.res_right>.ThreeClass{
  position: absolute;
  top: 110px;
}
.formPass{
  margin-left: 45px;
  width: 295px;
}
.marginNextTwo{
  margin: 20px 0;
}
.avatar-uploader .avatar {
  width: 100px;
  height: 100px;
  display: block;
}
.avatar-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 100px;
  height: 100px;
  text-align: center;
}
</style>