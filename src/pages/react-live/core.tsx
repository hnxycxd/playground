import React, { createContext, useContext, useState, useEffect, type ReactNode } from 'react'

// 添加 Babel 转换器的类型声明
declare global {
  interface Window {
    Babel?: {
      transform: (code: string, options: any) => { code: string }
    }
  }
}

interface LiveContextType {
  code: string
  scope: Record<string, any>
  compiledElement: ReactNode | null
  error: string | null
}

interface LiveProviderProps {
  code: string
  scope?: Record<string, any>
  children: ReactNode
}

interface LivePreviewProps {
  style?: React.CSSProperties
}

// 创建 Context
const LiveContext = createContext<LiveContextType | null>(null)

// 简单的代码执行函数
const executeCode = (code: string, scope: Record<string, any>) => {
  try {
    // 创建执行环境的代码字符串
    const scopeKeys = Object.keys(scope)
    const scopeValues = Object.values(scope)

    let executableCode = code

    // 检查是否包含 JSX 语法（简单检测）
    const hasJSX = /<[A-Z]/.test(code) || /<[a-z]/.test(code)

    if (hasJSX) {
      // 如果有 JSX，尝试使用 Babel 转换
      if (window.Babel && window.Babel.transform) {
        try {
          const result = window.Babel.transform(code, {
            presets: [['react', { runtime: 'classic' }]],
            plugins: [],
          })
          executableCode = result.code
        } catch (babelError) {
          console.warn('Babel 转换失败，尝试简单转换:', babelError)
        }
      } else {
        console.warn('Babel 未加载，使用简单 JSX 转换')
        // 如果没有 Babel，使用简单的转换
      }
    }

    console.log('executableCode', executableCode)

    // 创建函数并执行
    const func = new Function(
      ...scopeKeys,
      `
      ${executableCode}
      
      `
    )

    // const result = func(React, ...scopeValues)
    const result = func(...scopeValues)

    console.log('result', result)
    return { element: result, error: null }
  } catch (err) {
    return { element: null, error: err instanceof Error ? err.message : '代码执行错误' }
  }
}

// LiveProvider 组件
export const SimpleLiveProvider: React.FC<LiveProviderProps> = ({ code, scope = {}, children }) => {
  const [compiledElement, setCompiledElement] = useState<ReactNode | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const { element, error: execError } = executeCode(code, scope)
    setCompiledElement(element)
    setError(execError)
  }, [code, scope])

  const contextValue: LiveContextType = {
    code,
    scope,
    compiledElement,
    error,
  }

  return <LiveContext.Provider value={contextValue}>{children}</LiveContext.Provider>
}

// LivePreview 组件
export const SimpleLivePreview: React.FC<LivePreviewProps> = ({ style }) => {
  const context = useContext(LiveContext)

  if (!context) {
    return <div style={style}>错误：LivePreview 必须在 LiveProvider 内使用</div>
  }

  const { compiledElement, error } = context

  if (error) {
    return (
      <div
        style={{
          ...style,
          color: 'red',
          padding: '10px',
          border: '1px solid red',
          borderRadius: '4px',
          backgroundColor: '#ffe6e6',
        }}
      >
        <strong>执行错误：</strong>
        <pre style={{ margin: '5px 0', fontSize: '12px' }}>{error}</pre>
      </div>
    )
  }

  if (!compiledElement) {
    return <div style={style}>加载中...</div>
  }

  return <div style={style}>{compiledElement}</div>
}

// 导出默认组件
export default {
  Provider: SimpleLiveProvider,
  Preview: SimpleLivePreview,
}
