let WindowBtnEmployees = $('#manageEmployees');
let empArea = $("#empArea");
let globalEfficiency; 
let validateEmp;
let alreadyAttachListener = false;

WindowBtnEmployees.click(() => {
	empArea.toggle();

	if(empArea.is(":visible")) {
		validateEmp = $("#validateEmp");
		globalEfficiency = $("#globalEfficiency");
		attachListener();
	}
});

attachListener = function () {
	if(!alreadyAttachListener) {
		validateEmp.on("click", validateData);
		alreadyAttachListener = true;
	}
}

validateData = function() {
	console.log("Try validating Employees");
	if(!isNaN(globalEfficiency.val()) &&  globalEfficiency.val() !== "" && globalEfficiency.val() >= 0) {
		employees.forEach(element => {
			element.efficiency = globalEfficiency.val();
		});
		displayEmployees();
	}
}