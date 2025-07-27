import React from 'react'
import { createRoot } from 'react-dom/client'
import { SimpleLiveProvider as LiveProvider, SimpleLivePreview as LivePreview } from './SimpleLive'
import { Button } from 'antd'
import { size } from 'lodash'

const appCode = `
const { useState } = React;
const { Button } = antd;

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Button 
        type="primary" 
        onClick={() => setCount(count + 1)}
      >
        点击我
      </Button>
      <div style={{ marginTop: '10px' }}>
        计数: {count}
      </div>
      <Button 
        type="default" 
        onClick={() => setCount(0)}
        style={{ marginLeft: '10px' }}
      >
        重置
      </Button>
    </div>
  )
}

createRoot(document.getElementById('live-preview-container')).render(<App />)
`

const CodeLive = () => {
  const [code, setCode] = React.useState(appCode)

  return (
    <div style={{ padding: '20px' }}>
      <h2>代码实时编辑器</h2>
      <LiveProvider
        code={code}
        scope={{
          React,
          antd: { Button },
          lodash: { size },
          createRoot,
        }}
      >
        <div style={{ display: 'flex', gap: '20px', height: '500px' }}>
          <div style={{ flex: 1 }}>
            <h3>代码编辑器</h3>
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              style={{
                width: '100%',
                height: '400px',
                fontFamily: 'Monaco, Menlo, "Ubuntu Mono", monospace',
                fontSize: '14px',
                padding: '10px',
                border: '1px solid #ccc',
                borderRadius: '4px',
                resize: 'none',
              }}
              placeholder='在这里编写代码...'
            />
          </div>
          <div style={{ flex: 1 }}>
            <h3>实时预览</h3>
            <div
              id='live-preview-container'
              style={{
                border: '1px solid #ccc',
                padding: '10px',
                height: '400px',
                borderRadius: '4px',
                overflow: 'auto',
                backgroundColor: '#f9f9f9',
              }}
            >
              <LivePreview />
            </div>
          </div>
        </div>
      </LiveProvider>
    </div>
  )
}

export default CodeLive
