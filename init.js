/* Loading data in data.json */
const fs = require("fs");
let dataFile = JSON.parse(fs.readFileSync("data.json"));

const employees = dataFile.employees;
const projects = dataFile.projects;