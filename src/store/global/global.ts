import { defineStore } from "pinia";
export const globalStore = defineStore('globalStore',{
    state: () => ({
        showWidth:document.documentElement.clientWidth,
        showHeight:document.documentElement.clientHeight,
        imgIconSrc:"https://likedd.oss-cn-chengdu.aliyuncs.com/admin/publicImg/",
        videoSrc:"https://likedd.oss-cn-chengdu.aliyuncs.com/admin/video/"
    }),
    actions:{

    }
})