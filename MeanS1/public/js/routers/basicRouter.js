app.config(function($routeProvider){
  $routeProvider
 
 //* route for contactlist view */
  .when('/goContactList', {
    templateUrl: 'templates/contactList.html',
    controller: 'contactController'
  })

  /* route for contactlist view */
  .when('/goAddCotnact', {
    templateUrl: 'templates/addContact.html',
    controller: 'addContactController'
  });

});
