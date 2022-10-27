import { createRoot, Root } from 'react-dom/client'

export const openModal = (function () {
  let root: Root | null = null

  return function (Modal: any, config: any) {
    if (!root) {
      const div = document.createElement('div')
      div.classList.add('dv')
      document.body.appendChild(div)
      root = createRoot(div)
    }

    let currentConfig = {
      ...config,
      open: true,
      onCancel: (e: React.MouseEvent<HTMLElement>) => {
        if (config.onCancel) {
          config.onCancel(e)
        }
        close()
      },
      onOk: (e: React.MouseEvent<HTMLElement>) => {
        if (config.onOk) {
          config.onOk(e)
        }
        close()
      },
    }

    function render(props: any) {
      /**
       * https://github.com/ant-design/ant-design/issues/23623
       * Sync render blocks React event. Let's make this async.
       */
      setTimeout(() => {
        root?.render(<Modal {...props} />)
      })
    }

    function close() {
      render({
        ...currentConfig,
        open: false,
      })
    }

    render(currentConfig)
  }
})()
