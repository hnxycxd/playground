import type { ReactNode } from 'react'
import React from 'react'

type IFruit = 'apple' | 'banana' | 'orange'

const Apple = () => <div>apple-c</div>
const Banana = () => <div>banana-c</div>
const Orange = () => <div>orange-c</div>

const comp: Record<IFruit, ReactNode> = {
  apple: <Apple />,
  banana: <Banana />,
  orange: <Orange />,
}
function Fruit({ fruit }: { fruit: IFruit }) {
  return <div>{comp[fruit]}</div>
}

Fruit.defaultProps = {
  fruit: 'apple',
}

export default Fruit
