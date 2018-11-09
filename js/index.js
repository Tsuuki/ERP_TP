// Insert employees data into DOM
var listDom = $("#listDataEmp");
for(var i=0;i<employees.length;i++) {
    var myDom = "<div><span>" + employees[i].name + "</span><span>" + employees[i].firstname + "</span><span>" + employees[i].jobType + "</span><span>" + employees[i].efficiency + "</span><span>" + employees[i].hiringDate + "</span></div>";
    listDom.append(myDom);
}

// Insert project data into DOM
var listDom = $("#listDataProj");
for(var i=0;i<projects.length;i++) {
    var myDom = "<div><span>" + projects[i].client + "</span><span>" + projects[i].dateStart + "</span><span>" + projects[i].remainDevDays + "</span><span>" + projects[i].remainProjDays + "</span><span>" + projects[i].shipment + "</span></div>";
    listDom.append(myDom);
}
