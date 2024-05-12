import antfu from '@antfu/eslint-config'
// import { FlatCompat } from '@eslint/eslintrc'

// const compat = new FlatCompat()

export default antfu(
  {
    typescript: true,
    react: true,
  },
  {
    rules: {
      'no-unused-vars': [
        'error',
        {
          vars: 'all', // 检查所有变量（包括全局变量）
          varsIgnorePattern: '^_', // 忽略以_开头的变量（常见于只想使用默认参数的情况）
          args: 'after-used', // 参数在函数体中有使用之后再次被赋值的情况不报错
          argsIgnorePattern: '^_', // 忽略以_开头的函数参数
          caughtErrors: 'all', // 检查try-catch语句中被捕获的错误是否被使用
          caughtErrorsIgnorePattern: '^_', // 忽略以_开头的被捕获的错误
        },
      ],
    },
  }
  // ...compat.config({
  //   extends: ['alloy/typescript'],
  // })
)
