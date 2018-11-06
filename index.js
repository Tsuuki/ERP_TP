var listData = $("#listData");
for(var i=0;i<employees.length;i++) {
    listData.append("<div>");
    listData.append("<span>" + employees[i].name + "</span>");
    listData.append("<span>" + employees[i].firstname + "</span>");
    listData.append("<span>" + employees[i].jobType + "</span>");
    listData.append("<span>" + employees[i].efficiency + "</span>");
    listData.append("<span>" + employees[i].hiringDate + "</span>");
    listData.append("</div>");
}