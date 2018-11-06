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
});

var listDom = $("#listDataEmployees");
for(var i=0;i<employees.length;i++) {
    listDom.append("<div>");
    listDom.append("<span>" + employees[i].name + "</span>");
    listDom.append("<span>" + employees[i].firstname + "</span>");
    listDom.append("<span>" + employees[i].jobType + "</span>");
    listDom.append("<span>" + employees[i].efficiency + "</span>");
    listDom.append("<span>" + employees[i].hiringDate + "</span>");
    listDom.append("</div>");
}

var listDom = $("#listDataProjects");
for(var i=0;i<projects.length;i++) {
    listDom.append("<div>");
    listDom.append("<span>" + projects[i].client + "</span>");
    listDom.append("<span>" + projects[i].dateStart + "</span>");
    listDom.append("<span>" + projects[i].remainDevDays + "</span>");
    listDom.append("<span>" + projects[i].remainProjDays + "</span>");
    listDom.append("<span>" + projects[i].shipment + "</span>");
    listDom.append("</div>");
}
