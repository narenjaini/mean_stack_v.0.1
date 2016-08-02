app.config(function($routeProvider){
  $routeProvider
  /* route for home page
  .when('/goHomePage'{
    templateUrl: 'index.html',
    controller: ''
  })*/

  /* route for contactlist view */
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
