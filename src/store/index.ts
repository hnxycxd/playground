import { createStore } from "@ice/store"

const themeStore = {
  state: 0,
  reducers: {
    updateTheme(theme: any, newState: any) {
      console.log("render")
      return newState
    },
  },
}

const models = {
  themeStore,
}

const store = createStore(models)

export default store
