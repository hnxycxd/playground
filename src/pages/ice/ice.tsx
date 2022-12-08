import React from "react"
import store from "../../store"

const Ice = () => {
  const { useModel, useModelDispatchers } = store
  // const [count, dispatchers] = useModel("themeStore")
  const dispatchers = useModelDispatchers("themeStore")
  return (
    <div>
      {/* <div>theme: {count}</div> */}
      <button onClick={() => dispatchers.updateTheme(Math.random())}>
        changeTheme
      </button>
    </div>
  )
}

export default Ice
