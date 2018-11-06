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