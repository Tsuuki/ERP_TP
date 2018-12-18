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

// function to add working days on date.
var subWorkDays = function(endDate, days) {
    if(isNaN(days)) {
        console.log("Value provided for \"days\" was not a number");
        return
    }
    if(!(endDate instanceof Date)) {
        console.log("Value provided for \"startDate\" was not a Date object");
        return
    }

    var date = new Date(endDate.getTime());
    var dow = date.getDay();
    var daysToSub = parseInt(days);
    if (dow == 0) // Sunday
        daysToSub += 2;
    if (dow + daysToSub >= 6) {
        var remainingWorkDays = daysToSub - (5 - dow);
        daysToSub += 2;
        if (remainingWorkDays > 5) {
            daysToSub += 2 * Math.floor(remainingWorkDays / 5);
            if (remainingWorkDays % 5 == 0)
            daysToSub -= 2;
        }
    }
    date.setDate(date.getDate() - daysToSub);
    return date;
}

var getDDMMYYY = function(date, american) {

    var dd = date.getDate();
    var mm = date.getMonth() + 1;
    var yyyy = date.getFullYear();

    dd = dd < 10 ? "0" + dd : dd;
    mm = mm < 10 ? "0" + mm : mm;

    if(american)
        return yyyy + "-" + mm + "-" + dd + "";

    return dd + "-" + mm + "-" + yyyy + "";
}

var getDaysNbrDiff = function(endDate, startDate) {
    return Math.round((endDate-startDate)/(1000*60*60*24));
}

// Check if projects can be delivered in time
var isDispo = function() {

    $("#displayResult").html("");
    var listDom = $("#displayResult");

    // Number of employees on dev or project side
    var countDevEmployee = 0;
    var countProjEmployee = 0;

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

    // Get efficiency
    var efficiency = 0

    projects.forEach(project => {

        // Count number of available employees
        countDevEmployee = 0;
        countProjEmployee = 0;

        listDom.append("<h3>" + project.client + "</h3>");
        listDom.append("<div>Date début développement : " + getDDMMYYY(dateStartDev) + "</div>");
        listDom.append("<div>Date début gestion de projet : " + getDDMMYYY(dateStartProj) + "</div></br>");
        
        // Count number of employees in each side(dev or project) and check if they can work (hired employees don't work for 4 months)
        employees.forEach(employee => {
            var hiringDate = new Date(employee.hiringDate);
            efficiency = employee.efficiency;
            if((employee.jobType === "DEV" || employee.jobType === "RT") && getDaysNbrDiff(dateStartDev, hiringDate) >= 120) {
                countDevEmployee++;
            } else if(employee.jobType === "CP" && getDaysNbrDiff(dateStartProj, hiringDate) >= 120) {
                countProjEmployee++;
            }
        });
        
        // Get number of days remaining to complete project
        jourDH = Math.ceil((project.remainDevDays / countDevEmployee) / (efficiency / 100));
        jourPH = Math.ceil((project.remainProjDays / countProjEmployee) / (efficiency / 100));
        

        listDom.append("<div>Nombre de jour à travailler pour l'équipe de développement : " + jourDH + "</div>");
        listDom.append("<div>Nombre de jour à travailler pour l'équipe de gestion de projet : " + jourPH + "</div></br>");
        
        // Get working days remaining until end of project
        var globalDevDaysRemaining = getBusinessDatesCount(dateStartDev, new Date(project.shipment));
        var globalProjDaysRemaining = getBusinessDatesCount(dateStartProj, new Date(project.shipment));
        
        listDom.append("<div>Nombre de jour ouvré disponible pour le développement : " + globalDevDaysRemaining + "</div>");
        listDom.append("<div>Nombre de jour ouvré disponible pour la gestion de projet : " + globalProjDaysRemaining + "</div></br>");

        let saveStartDate = new Date(dateStartDev);
        let saveStartProjDate = new Date(dateStartProj);
        dateFinDev = addWorkDays(dateStartDev, jourDH);
        dateFinProj = addWorkDays(dateStartProj, jourPH);
        dateStartDev = addWorkDays(dateFinDev, 1);
        dateStartProj = addWorkDays(dateFinProj, 1);

        listDom.append("<div>Date de fin du développement : " + getDDMMYYY(dateFinDev) + "</div>");
        listDom.append("<div>Date de fin de la gestion de projet : " + getDDMMYYY(dateFinProj) + "</div></br>"); 

        let dateMissed = 0;

        // Check that number of working days necessary is inferior to remaining days until end of project, else we are in deep shit
        if(jourDH > globalDevDaysRemaining) {
            canDeliver = false;
            dateMissed = Math.round(Math.abs((dateFinDev - new Date(project.shipment).getTime()) / (24*60*60*1000)));

            listDom.append("<div style=\"color:red;\">Retard sur le développement de : " + dateMissed + " jours</div>");
            listDom.append("<div style=\"color:red;\">Date de fin demandée : " + getDDMMYYY(new Date(project.shipment)) + "</div>");

            let nbRes = calculateNecessaryRessource(globalDevDaysRemaining, jourDH * countDevEmployee)
            listDom.append("<div style=\"color:red;\">Il faut <b>" + nbRes + " </b> développeurs sur le projet pour terminer dans les temps</div>");

            let newDateWithRessource = calculateNewDateWithRessource(project.remainDevDays, nbRes, efficiency, globalDevDaysRemaining, saveStartDate);

            listDom.append("<div style=\"color:green;\">Avec <b>" + (nbRes - countDevEmployee) + " </b> développeurs supplémentaires et une efficacité <b>" + efficiency + " %</b> le développement serait terminé le " + getDDMMYYY(newDateWithRessource) + "</div>");
            listDom.append("<div style=\"color:green;\">Il faut les recruter au plus tard le <b>" + getDDMMYYY(calculateHiringDate(saveStartDate)) + " </b></div></br>");
        }
        
        if(jourPH > globalProjDaysRemaining) {
            canDeliver = false;
            dateMissed = Math.round(Math.abs((dateFinProj - new Date(project.shipment).getTime()) / (24*60*60*1000)));

            listDom.append("<div style=\"color:red;\">Retard sur la gestion de projet de : " + dateMissed + " jours</div>");
            listDom.append("<div style=\"color:red;\">Date de fin demandée : " + getDDMMYYY(new Date(project.shipment)) + "</div>");

            let nbResP = calculateNecessaryRessource(globalProjDaysRemaining, jourPH * countProjEmployee)
            listDom.append("<div style=\"color:red;\">Il faut <b>" + nbResP + " </b> chef de projet pour terminer la gestion dans les temps</div>");

            let newDateWithRessourceP = calculateNewDateWithRessource(project.remainProjDays, nbResP, efficiency, globalProjDaysRemaining, saveStartProjDate);

            listDom.append("<div style=\"color:green;\">Avec <b>" + (nbResP - countProjEmployee) + " </b> chefs de projet supplémentaires et une efficacité <b>" + efficiency + " %</b> la gestion de projet serait terminée le " + getDDMMYYY(newDateWithRessourceP) + "</div>");
            listDom.append("<div style=\"color:green;\">Il faut les recruter au plus tard le <b>" + getDDMMYYY(calculateHiringDate(saveStartProjDate)) + " </b></div></br>");

        }

    });

    return canDeliver;
}

let calculateNecessaryRessource = function(nbDaysWork, ndDaysWorked) {
    return Math.ceil(ndDaysWorked / nbDaysWork); 
};

let calculateNewDateWithRessource = function(workDay, nbRes, efficiency, globalDays, startDate) {
    return addWorkDays(new Date(startDate), Math.ceil(workDay / nbRes * 100 / efficiency));
}

let calculateHiringDate = function (startDate) {

    let date = new Date(startDate);
    date.setDate(date.getDate() - 120);

    if(date.getDay() == 0)
        date.setDate(date.getDate() - 2);

    if(date.getDay() == 6)
        date.setDate(date.getDate() - 1);    
    
    return date;
}

$("#launchSimulation").click(function() {
    sortProjectByDate(projects);
    console.log(isDispo());
});