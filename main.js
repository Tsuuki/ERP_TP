const { app, BrowserWindow } = require ('electron');

let mainWindow;

function createWindow () {

    // Créer le browser window
    mainWindow = new BrowserWindow({ width: 800, height: 600 });

    // Charge le fichier de l'application
    mainWindow.loadFile('index.html');

    // npm run debug
    if(process.argv[2] && process.argv[2] === "debug") {
        mainWindow.webContents.openDevTools();
    }
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    // Sur macOS, il est commun pour une application et leur barre de menu
    // de rester active tant que l'utilisateur ne quitte pas explicitement avec Cmd + Q
    if (process.platform !== 'darwin') {
      app.quit()
    }
})

app.on('activate', () => {
    // Sur macOS, il est commun de re-créer une fenêtre de l'application quand
    // l'icône du dock est cliquée et qu'il n'y a pas d'autres fenêtres d'ouvertes.
    if (win === null) {
        createWindow()
    }
})