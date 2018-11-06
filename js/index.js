const { BrowserWindow } = require ('electron').remote;
const path = require('path');


const projectBtn = document.getElementById("manageProjects");

projectBtn.addEventListener('click', (event) => {
    const projectPath = path.join('file://', __dirname, '/view/project.html');

    let win = new BrowserWindow({ 
        width: 720, 
        height: 480, 
        icon: "assets/icon.png",
        title: "ERP : Mohamed, Emilie, Jordan, Quentin",
        frame: false  
    });

    win.loadURL(projectPath);

    win.show();

    win.on('closed', () => {
        win = null;
    })
})
