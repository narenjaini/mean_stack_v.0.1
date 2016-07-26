
	angular
		.module("studentDetails")
		.controller("studentContentController", stdCtrl);

		stdCtrl.$inject = ['DataService'];

		function stdCtrl(DataService){
			
			var SC = this;	

			SC.studentsData = DataService.studentsJsonData;	
			SC.currentStudent = {};
			SC.currentStudentInfo = currentStudentInfo;
			SC.addContact = addContact;
			SC.input = {
				'field1':""
			};
			
			function currentStudentInfo(index){
				SC.currentStudent = index;
			}

			function addContact(){
				alert(SC.input.field1);
			}
		}


