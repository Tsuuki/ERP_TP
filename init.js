const path = require('path');
const remote = require('electron').remote

/* Loading data in data.json */
const fs = require("fs");
const jsonPath = path.join(remote.app.getAppPath(), '/data.json');
let dataFile = JSON.parse(fs.readFileSync(jsonPath));

const employees = dataFile.employees;
const projects = dataFile.projects;