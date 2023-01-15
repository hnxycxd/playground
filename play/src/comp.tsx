import React, { useImperativeHandle } from "react"

// const Comp = React.forwardRef(
//   )
interface IProp {
  age: number
}
const Com = (props: IProp, ref: React.Ref<any>) => {
  useImperativeHandle(ref, () => ({
    getData: () => {
      console.log("getData2222")
    },
  }))
  return <div>comp</div>
}

export default React.forwardRef(Com)
