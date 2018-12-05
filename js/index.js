// Insert employees data into DOM
var displayEmployees = function() {
    $("#listDataEmp").html("");
    var listDom = $("#listDataEmp");

    for(var i=0;i<employees.length;i++) {
        var myDom = "<div><span>" + employees[i].name + "</span><span>" + employees[i].firstname + "</span><span>" + employees[i].jobType + "</span><span>" + employees[i].efficiency + "</span><span>" + employees[i].hiringDate + "</span></div>";
        listDom.append(myDom);
    }
}

displayEmployees();

// Insert project data into DOM
var displayProject = function() {
    $("#listDataProj").html("");
    var listDom = $("#listDataProj");

    for(var i=0;i<projects.length;i++) {
        var myDom = "<div><span>" + projects[i].client + "</span><span>" + projects[i].dateStartDev + "</span><span>" + projects[i].remainDevDays + "</span><span>" + projects[i].remainProjDays + "</span><span>" + projects[i].shipment + "</span></div>";
        listDom.append(myDom);
    }
}

displayProject();

var sortProjectByDate = function(p) {
    p.sort((a, b) => {
        return new Date(a.shipment) > new Date(b.shipment);
    })
};

// Count number of business days between two dates
var getBusinessDatesCount = function(startDate, endDate) {
    var count = 0;
    var curDate = new Date(startDate.getTime());
    while (curDate <= endDate) {
        var dayOfWeek = curDate.getDay();
        if(!((dayOfWeek == 6) || (dayOfWeek == 0)))
           count++;
        curDate.setDate(curDate.getDate() + 1);
    }
    return count;
}

// function to add working days on date.
var addWorkDays = function(startDate, days) {
    if(isNaN(days)) {
        console.log("Value provided for \"days\" was not a number");
        return
    }
    if(!(startDate instanceof Date)) {
        console.log("Value provided for \"startDate\" was not a Date object");
        return
    }

    var date = new Date(startDate.getTime());
    var dow = date.getDay();
    var daysToAdd = parseInt(days);
    if (dow == 0)
        daysToAdd++;
    if (dow + daysToAdd >= 6) {
        var remainingWorkDays = daysToAdd - (5 - dow);
        daysToAdd += 2;
        if (remainingWorkDays > 5) {
            daysToAdd += 2 * Math.floor(remainingWorkDays / 5);
            if (remainingWorkDays % 5 == 0)
                daysToAdd -= 2;
        }
    }
    date.setDate(date.getDate() + daysToAdd);
    return date;
}

var getDDMMYYY = function(date) {

    var dd = date.getDate();
    var mm = date.getMonth() + 1;
    var yyyy = date.getFullYear();

    dd = dd < 10 ? "0" + dd : dd;
    mm = mm < 10 ? "0" + mm : mm;

    return dd + "-" + mm + "-" + yyyy + "";
}

// Check if projects can be delivered in time
var isDispo = function() {

    $("#displayResult").html("");
    var listDom = $("#displayResult");

    // Number of employees on dev or project side
    var countDevEmployee = 0;
    var countProjEmployee = 0;

    // Count number of employees in each side(dev or project)
    employees.forEach(employee => {
        if(employee.jobType === "DEV" || employee.jobType === "RT") {
            countDevEmployee++;
        } else if(employee.jobType === "CP") {
            countProjEmployee++;
        }
    });

    // Can we deliver the project on time
    var canDeliver = true;

    // Number of days to complete a project for dev or project side
    var jourDH = 0;
    var jourPH = 0;

    // The start date of project on dev or project side
    var dateStartDev = new Date(projects[0].dateStartDev);
    var dateStartProj = new Date(projects[0].dateStartProj);
    var dateFinDev = null;
    var dateFinProj = null;

    projects.forEach(project => {

        listDom.append("<h3>" + project.client + "</h3>");
        listDom.append("<div>Date début développement : " + getDDMMYYY(dateStartDev) + "</div>");
        listDom.append("<div>Date début gestion de projet : " + getDDMMYYY(dateStartProj) + "</div></br>");
        
        // Get number of days remaining to complete project
        jourDH = Math.round(project.remainDevDays / countDevEmployee);
        jourPH = Math.round(project.remainProjDays / countProjEmployee);

        listDom.append("<div>Nombre de jour à travailler pour l'équipe de développement : " + jourDH + "</div>");
        listDom.append("<div>Nombre de jour à travailler pour l'équipe de gestion de projet : " + jourPH + "</div></br>");
        
        // Get working days remaining until end of project
        var globalDevDaysRemaining = getBusinessDatesCount(dateStartDev, new Date(project.shipment));
        var globalProjDaysRemaining = getBusinessDatesCount(dateStartProj, new Date(project.shipment));
        
        listDom.append("<div>Nombre de jour ouvré disponible pour le développement : " + globalDevDaysRemaining + "</div>");
        listDom.append("<div>Nombre de jour ouvré disponible pour la gestion de projet : " + globalProjDaysRemaining + "</div></br>");

        // Check that number of working days necessary is inferior to remaining days until end of project, else we are in deep shit
        if(jourDH > globalDevDaysRemaining || jourPH > globalProjDaysRemaining) {
            canDeliver = false;
        }
        else {
            dateFinDev = addWorkDays(dateStartDev, jourDH);
            dateFinProj = addWorkDays(dateStartProj, jourPH);
            dateStartDev = addWorkDays(dateFinDev, 1);
            dateStartProj = addWorkDays(dateFinProj, 1);
        }

        listDom.append("<div>Date de fin du développement : " + dateFinDev + "</div>");
        listDom.append("<div>Date de fin de la gestion de projet : " + dateFinProj + "</div>");        
    });

    return canDeliver;
}

$("#launchSimulation").click(function() {
    sortProjectByDate(projects);
    console.log(isDispo());
});

const windowBtnProjects = document.getElementById('manageProjects');

windowBtnProjects.addEventListener('click', (event) => {
  const modalPath = path.join('file://', __dirname, '/view/projects.html')
  console.log(modalPath);
  let win = new BrowserWindow({ width: 400, height: 320 })

  win.on('close', () => { win = null })
  win.loadURL(modalPath)
  win.show()
});