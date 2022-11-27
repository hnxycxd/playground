const subscribes = new Map()
let subId = -1
let size = {}
let layout: any = undefined

const layoutResponsiveObserve = {
  // 触发订阅事件
  dispatch(currentSize) {
    size = currentSize
    subscribes.forEach((func) => func(size))
    return subscribes.size > 0
  },
  // 订阅事件
  subscribe(func) {
    // 如果监听事件还没有注册，则注册监听事件
    if (!subscribes.size) {
      this.register()
    }
    subId += 1
    subscribes.set(subId, func)
    func(size)
    return subId
  },
  unSubscribe(id) {
    subscribes.delete(id)
    if (!subscribes.size) {
      this.unRegister()
    }
  },
  register() {
    if (!layout) {
      // 初始化layout
      layout = document.querySelector(".layout")
      // addEventListener会导致 handleListener的this指向有问题，所以在这里bind一下
      this.handleListener = this.handleListener.bind(this)
    }
    window.addEventListener("resize", this.handleListener)
    this.handleListener()
  },
  unRegister() {
    window.removeEventListener("resize", this.handleListener)
    subscribes.clear()
  },
  handleListener() {
    const bound = layout.getBoundingClientRect()
    const size = {
      width: bound.width,
      height: bound.height,
    }
    this.dispatch(size)
  },
}

export default layoutResponsiveObserve
