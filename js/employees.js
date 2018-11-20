const WindowBtnEmployees = document.getElementById('manageEmployees')

WindowBtnEmployees.addEventListener('click', (event) => {
  const modalPath = path.join('file://', __dirname, '/view/employees.html')
  console.log(modalPath);
  let win = new BrowserWindow({ width: 400, height: 320 })

  win.on('close', () => { win = null })
  win.loadURL(modalPath)
  win.show()
})