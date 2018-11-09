var listDom = $("#listDataEmp");
for(var i=0;i<employees.length;i++) {
    var myDom = "<div><span>" + employees[i].name + "</span><span>" + employees[i].firstname + "</span><span>" + employees[i].jobType + "</span><span>" + employees[i].efficiency + "</span><span>" + employees[i].hiringDate + "</span></div>";
    /*listDom.append("<div>");
    listDom.append("<span>" + employees[i].name + "</span>");
    listDom.append("<span>" + employees[i].firstname + "</span>");
    listDom.append("<span>" + employees[i].jobType + "</span>");
    listDom.append("<span>" + employees[i].efficiency + "</span>");
    listDom.append("<span>" + employees[i].hiringDate + "</span>");
    listDom.append("</div>");*/
    listDom.append(myDom);
}

var listDom = $("#listDataProj");
for(var i=0;i<projects.length;i++) {
    var myDom = "<div><span>" + projects[i].client + "</span><span>" + projects[i].dateStart + "</span><span>" + projects[i].remainDevDays + "</span><span>" + projects[i].remainProjDays + "</span><span>" + projects[i].shipment + "</span></div>";
    /*listDom.append("<div>");
    listDom.append("<span>" + projects[i].client + "</span>");
    listDom.append("<span>" + projects[i].dateStart + "</span>");
    listDom.append("<span>" + projects[i].remainDevDays + "</span>");
    listDom.append("<span>" + projects[i].remainProjDays + "</span>");
    listDom.append("<span>" + projects[i].shipment + "</span>");*/
    listDom.append(myDom);
}
