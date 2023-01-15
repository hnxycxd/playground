const fs = require("fs")
const path = require("path")
const parser = require("@babel/parser")

const src = path.join(__dirname, "../src")
const allPaths = []

const getAllFilePath = (filePath) => {
  fs.readdirSync(filePath).forEach((it) => {
    const isDirectory = fs.statSync(path.join(filePath, it)).isDirectory()
    const currentFilePath = path.join(filePath, it)
    if (isDirectory) {
      getAllFilePath(currentFilePath)
    } else {
      const content = fs.readFileSync(currentFilePath, "utf-8")
      const ast = parser.parse(content, {
        sourceType: "module",
      })
      console.log("ast", ast)
      // fs.writeFileSync(`${currentFilePath}/`, JSON.stringify(content))
      // allPaths.push(currentFilePath)
    }
  })
}

getAllFilePath(src)
console.log("allPaths", allPaths)
