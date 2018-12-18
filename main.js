const { app, BrowserWindow } = require ('electron');
const path = require("path");

function initialize () {
    const shouldQuit = makeSingleInstance()
    if (shouldQuit) return app.quit()

    let mainWindow;
    let employeesWindow;

    function createWindow () {

        const windowOptions = {
            width: 1280,
            height: 720,
            icon: "assets/icon.png",
            title: "ERP : Mohamed, Emilie, Jordan, Quentin", 
          }
      
    
          mainWindow = new BrowserWindow(windowOptions);
          mainWindow.loadURL(path.join('file://', __dirname, '/index.html'));
    
        // npm run debug
        if(process.argv[2] && process.argv[2] === "debug") {
            mainWindow.webContents.openDevTools()
            //mainWindow.maximize()
        }
    
        mainWindow.on('closed', () => {
            mainWindow = null
          })
    }

    app.on('ready', () => {
        createWindow();
    });

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
            createWindow();
            mainWindow.webContents.send('projects', projects);
        }
    })
}

// Make this app a single instance app.
//
// The main window will be restored and focused instead of a second window
// opened when a person attempts to launch a second instance.
//
// Returns true if the current version of the app should quit instead of
// launching.
function makeSingleInstance () {
    if (process.mas) return false
  
    return app.makeSingleInstance(() => {
      if (mainWindow) {
        if (mainWindow.isMinimized()) mainWindow.restore()
        mainWindow.focus()
      }
    })
}

initialize();