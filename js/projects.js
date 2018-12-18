let WindowBtnProjects = $('#manageProjects');
let projectArea = $("#projectArea");

let projectName;
let projectDevDays;
let projectProjDays;
let projectStartDate;
let projectEndDate;

let validateProject;
let alreadyAttachProjectListener = false;

WindowBtnProjects.click(() => {
	projectArea.toggle();

	if(projectArea.is(":visible")) {
    validateProject = $("#validateProject");
    projectName = $("#projectName");
    projectDevDays = $("#projectDevDays");
    projectProjDays = $("#projectProjDays");
    projectStartDate = $("#projectStartDate");
    projectEndDate = $("#projectEndDate");
		attachProjectListener();
	}
});

attachProjectListener = function () {
	if(!alreadyAttachProjectListener) {
		validateProject.on("click", validateProjectData);
		alreadyAttachProjectListener = true;
	}
}

validateProjectData = function() {
  console.log("Try validating project");
  let pname = projectName.val()
  let pdevdays = projectDevDays.val();
  let pprojdays = projectProjDays.val();
  let pdatestart = new Date(projectStartDate.val());
  let pdateend = new Date(projectEndDate.val());

  if(isNaN(pdevdays) || pdevdays === "" || parseInt(pdevdays) <= 0) {
    return;
  }

  if(isNaN(pprojdays) || pprojdays=== "" || parseInt(pprojdays) <= 0) {
    return;
  }

  if(pname === "") {
    return;
  }

  if(pdatestart > pdateend) {
    return;
  }

  projects.push({
    id: Math.floor(Math.random() * Math.floor(10000)),
    client: pname,
    dateStartDev: getDDMMYYY(pdatestart, true),
    dateStartProj: getDDMMYYY(pdatestart, true), 
    remainDevDays: pdevdays,
    remainProjDays: pprojdays,
    shipment: getDDMMYYY(pdateend, true)
  })

  displayProject();
}