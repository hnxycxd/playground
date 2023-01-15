import React, { useEffect, useRef } from "react"
import { Button } from "antd"
import E from "wangeditor"

const Ice = () => {
  const editorRef = useRef(null)
  const editorInstance = useRef<any>()
  // let str =
  //   "<p>浩方平台一直以来严格保障国家关于互联网安全的相关法律法规和制度的落实，确保平台运营的合法合规性。<span></span></p> \n <p>未来，浩方平台将充分协同相关运营合作方，持续保障监督工作常态化、制度化、规范化，并就以下四个方面对整个产品平台实施更为严格的管理：<span></span></p>"
  useEffect(() => {
    if (editorRef.current) {
      const editor = new E(editorRef.current)
      editor.create()
      // editor.config.pasteFilterStyle = false
      editor.config.pasteTextHandle = (pasteStr: string) => {
        return pasteStr.replaceAll(/<p/g, "<p style='text-indent: 20px'")
      }
      editorInstance.current = editor
    }
  }, [])

  return (
    <div className="h-screen w-1/3 bg-gray-300">
      <div ref={editorRef} />
      {/* <Button type="primary" onClick={onBtnClick}>
        button
      </Button> */}
    </div>
  )
}

export default Ice
