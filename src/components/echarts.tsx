import ReactEchartsCore from "echarts-for-react/lib/core"
import type { EChartsReactProps } from "echarts-for-react"
import * as echarts from "echarts/core"
import { BarChart } from "echarts/charts"
import type { BarSeriesOption } from "echarts/charts"
import {
  TitleComponentOption,
  TitleComponent,
  TooltipComponent,
  TooltipComponentOption,
  GridComponent,
  GridComponentOption,
  DatasetComponent,
  DatasetComponentOption,
} from "echarts/components"
import { CanvasRenderer } from "echarts/renderers"

echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  // DatasetComponent,
  BarChart,
  CanvasRenderer,
])
echarts.registerTheme("themeA", {
  backgroundColor: "skyblue",
})

export type ECOption = echarts.ComposeOption<
  | BarSeriesOption
  | TitleComponentOption
  | TooltipComponentOption
  | GridComponentOption
>

const Echarts: React.FC<EChartsReactProps> = (props) => {
  const { option, ...rest } = props
  return <ReactEchartsCore echarts={echarts} option={option} {...rest} />
}

export default Echarts
