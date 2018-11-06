const {BrowserWindow} = require('electron').remote
const path = require('path')

const newWindowBtn = document.getElementById('manageEmployees')

newWindowBtn.addEventListener('click', (event) => {
  const modalPath = path.join('file://', __dirname, '/view/employes.html')
  console.log(modalPath);
  let win = new BrowserWindow({ width: 400, height: 320 })

  win.on('close', () => { win = null })
  win.loadURL(modalPath)
  win.show()
})