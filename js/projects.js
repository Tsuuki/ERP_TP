var ipcRenderer = require('electron').ipcRenderer;

var projects;
const projectForm = document.getElementById("projectForm");

ipcRenderer.on('projects', function (event, projects) {
  this.projects = projects;
});

function addProject() {
  projects.push({
    client: projectForm.elements["client"].value,
    dateStart: projectForm.elements["dateStart"].value,
    shipment: projectForm.elements["shipment"].value
  });
}
