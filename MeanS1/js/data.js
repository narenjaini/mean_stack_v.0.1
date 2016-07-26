

	angular
			.module("studentDetails")
			.factory("DataService", DataService);

	
	function DataService(){

		var dataObj = {
			studentsJsonData : studentsJsonData
		};
		return dataObj;
	}


var studentsJsonData = [
	{"index":1,"img_url":"https://robohash.org/doloremetquia.png?size=50x50\u0026set=set1","first_name":"Philip","last_name":"Howard","Address":"16349 Rieder Drive"},
	{"index":2,"img_url":"https://robohash.org/enimtemporeinventore.bmp?size=50x50\u0026set=set1","first_name":"Wayne","last_name":"Simpson","Address":"4642 Daystar Drive"},
	{"index":3,"img_url":"https://robohash.org/facerequoin.png?size=50x50\u0026set=set1","first_name":"Catherine","last_name":"Morris","Address":"3 Vera Place"},
	{"index":4,"img_url":"https://robohash.org/aliquamquosest.jpg?size=50x50\u0026set=set1","first_name":"Jason","last_name":"Sanchez","Address":"003 Eggendart Drive"},
	{"index":5,"img_url":"https://robohash.org/enimautinventore.png?size=50x50\u0026set=set1","first_name":"Samuel","last_name":"Little","Address":"5670 Golf Course Avenue"},
	{"index":6,"img_url":"https://robohash.org/cupiditateestconsequatur.jpg?size=50x50\u0026set=set1","first_name":"Julie","last_name":"Cunningham","Address":"679 Glendale Junction"},
	{"index":7,"img_url":"https://robohash.org/utquaeaut.bmp?size=50x50\u0026set=set1","first_name":"Lois","last_name":"Armstrong","Address":"78 Summer Ridge Pass"},
	{"index":8,"img_url":"https://robohash.org/quiasitvoluptates.bmp?size=50x50\u0026set=set1","first_name":"Diana","last_name":"Kelly","Address":"1230 New Castle Place"},
	{"index":9,"img_url":"https://robohash.org/totamsuntvoluptatem.png?size=50x50\u0026set=set1","first_name":"Robin","last_name":"Stanley","Address":"8983 Kingsford Pass"},
	{"index":10,"img_url":"https://robohash.org/quiaccusamusdolorem.jpg?size=50x50\u0026set=set1","first_name":"Douglas","last_name":"Butler","Address":"8150 Brown Park"},
	{"index":11,"img_url":"https://robohash.org/doloribusnequeet.jpg?size=50x50\u0026set=set1","first_name":"Raymond","last_name":"Harris","Address":"65569 Hoepker Center"},
	{"index":12,"img_url":"https://robohash.org/etomnisanimi.jpg?size=50x50\u0026set=set1","first_name":"Lisa","last_name":"Walker","Address":"47 Barnett Lane"},
	{"index":13,"img_url":"https://robohash.org/distinctiodoloresdolor.bmp?size=50x50\u0026set=set1","first_name":"Deborah","last_name":"Cole","Address":"44 Beilfuss Point"},
	{"index":14,"img_url":"https://robohash.org/nonconsequaturaccusamus.png?size=50x50\u0026set=set1","first_name":"Kathy","last_name":"Rogers","Address":"96008 Pennsylvania Park"},
	{"index":15,"img_url":"https://robohash.org/ipsumconsequatureaque.jpg?size=50x50\u0026set=set1","first_name":"Dennis","last_name":"Long","Address":"2 Redwing Circle"}
];


