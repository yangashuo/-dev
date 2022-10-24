import request from "../index";

export function register(user: object) {
    return request({
        url: '/rl/reg',
        method: 'post',
        data: user
    })
}

export function getRsa() {
    return request({
        url: '/lo/prs',
        method: 'post',
    })
}
export function login(u:string,p:string,ip:string,city:string,system:string,os:string) {
    return request({
        url: '/lo/ro',
        method: 'post',
        data: {
            u,p,ip,city,system,os
        }
    })
}

export function registerOne(userPhone: string,userIp:string,userCityname:string,userSystem:string,userBrowser:string) {
    return request({
        url: '/rl/regOne',
        method: 'post',
        data: {
            userPhone,
            userIp,
            userCityname,
            userSystem,
            userBrowser
        }
    })
}
