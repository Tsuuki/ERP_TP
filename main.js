const { app, BrowserWindow } = require ('electron');

function createWindow () {

    // Créer le browser window
    win = new BrowserWindow({ width: 800, height: 600 });

    // Charge le fichier de l'application
    win.loadFile('index.html');

    // npm run debug
    if(process.argv[2] && process.argv[2] === "debug") {
        win.webContents.openDevTools();
    }

}

app.on('ready', createWindow);