import axios from "axios"
// import { message } from 'antd'
// import { useAppStore } from '@/store/app'
// import router from '@/router'
import { errorCode } from "@/constant"

// const appStore = useAppStore()
let lastNoticeTime = new Date().getTime()

const instance = axios.create({
  // baseURL: import.meta.env.VITE_BASE_URL,
  baseURL: "/",
  timeout: 30000,
  // withCredentials: true,
})

// 请求拦截
instance.interceptors.request.use(
  (config) => {
    const params = config.params || {}
    const headers = config.headers || {}

    params._afst = new Date().getTime()
    // headers['access-token'] = appStore.access_token
    // headers['tenant-id'] = appStore.tenantId
    return config
  },
  (error) => Promise.reject(error)
)

// 响应拦截
instance.interceptors.response.use(
  (res) => {
    const status = Number(res.status) || 200
    const msg = res.data.msg || errorCode[status] || errorCode.default

    if (status === 401 && res.config.url?.includes("userlogin")) {
      // TODO: store.dispatch('CLEAN_SESSION')
      // message.error('登录已失效请重新登录')
      // appStore.clearAppStore()
      // router.push('/login')
      return
    }

    if (status === 403) {
      // message.error('暂无权限')
      return
    }

    if (
      (status !== 200 || res.data.code !== errorCode.SYS_CODE.SUCCESS) &&
      !res.config.silent
    ) {
      if (res.data.code === errorCode.SYS_CODE.USER_KICK_OUT) {
        // message.error('登陆状态失效')
        // router.push('/login')
        return Promise.reject(new Error("登陆状态失效"))
      }

      // if (new Date().getTime() - lastNoticeTime > 300) {
      //   lastNoticeTime = new Date().getTime()
      // message.error(msg)
      // }
    }

    return res.data
  },
  (axiosError) => {
    const status = axiosError.response.status
    const msg = errorCode[status] || errorCode.default
    // message.error(msg)
    return Promise.reject(axiosError)
  }
)

export default instance
