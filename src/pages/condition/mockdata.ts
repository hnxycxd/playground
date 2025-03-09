import type { TreeSelectProps, SelectProps, GetProp } from 'antd'

export const conditionNameTreeData: TreeSelectProps['treeData'] = [
  {
    value: '参数',
    title: '参数',
    selectable: false,
    children: [
      {
        value: 'address',
        title: '收货地址',
        selectable: false,
        children: [
          {
            value: 'province',
            title: '省份',
          },
          {
            value: 'city',
            title: '城市',
          },
        ],
      },
    ],
  },
  {
    value: 'date',
    title: '发布日期',
  },
]

type SelectOptionItem = GetProp<SelectProps, 'options'>[number]
interface NameTypeOptions extends SelectOptionItem {
  operator?: SelectProps['options']
}
export const nameTypeOptions: NameTypeOptions[] = [
  {
    label: '日期',
    value: 'date',
    operator: [
      {
        label: '介于',
        value: 'between',
      },
      {
        label: '不介于',
        value: 'notBetween',
      },
    ],
  },
  {
    label: '数值',
    value: 'number',
    operator: [
      {
        label: '属于',
        value: 'belongsTo',
        valueInputType: 'input',
      },
      {
        label: '不属于',
        value: 'notBelongsTo',
        valueInputType: 'input',
      },
      {
        label: '介于',
        value: 'between',
        valueInputType: 'rangeNumber',
      },
      {
        label: '不介于',
        value: 'notBetween',
        valueInputType: 'rangeNumber',
      },
      // {
      //   label: '开头是',
      //   value: 'startWith',
      //   valueInputType: 'input',
      // },
      // {
      //   label: '开头不是',
      //   value: 'notStartWith',
      //   valueInputType: 'input',
      // },
    ],
  },
]
export const nameTypeMap = nameTypeOptions.reduce((acc, cur) => {
  acc[cur.value as string] = cur.operator
  return acc
}, {})
