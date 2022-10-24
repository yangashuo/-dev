// 导入用来创建路由和确定路由模式的两个方法
import {
    createRouter,
    createWebHistory,
    RouteRecordRaw
} from 'vue-router'

/**
 * 定义路由信息
 *
 */
const routes:Array<RouteRecordRaw> = [
    {
        path:'/relinex/reg/',
        name:'register',
        component: ()=>import('@/components/pc/login/register.vue')
    },
    {
        path:'/relinex/',
        name:'login',
        component: ()=>import('@/components/pc/login/login.vue')
    },{
        path:'/relinex/home/',
        component: ()=>import('@/components/pc/index/home.vue'),
        children:[
            {
                path:'',
                name:'index',
                component: ()=>import('@/components/pc/index/index.vue')
            },{
                path:'userIndex',
                name:'userIndex',
                component: ()=>import('@/components/pc/userTem/user/userIndex.vue')
            },{
                path: 'videoZoomIn',
                name:'videoZoomIn',
                component: ()=>import('@/components/pc/index/videoZoomIn/videoZoomIn.vue')
            }
        ]
    }
];

// 创建路由实例并传递 `routes` 配置
// 我们在这里使用 html5 的路由模式，url中不带有#，部署项目的时候需要注意。
const router = createRouter({
    history: createWebHistory(),
    routes,
})


// 全局的路由守卫
router.beforeEach((to, from) => {
    // console.log(to)
    // console.log(from)
    //判断有没有登陆，没有登陆就直接跳转到登陆
    return true
})

// 讲路由实例导出
export default router