app.controller('addContactController', function($scope){
  $scope.formHeaders = formheaders;
});

var formheaders = {
  'email' : 'Email address',
  'name' : 'Name',
  'profilepic' : 'Profile picture',
  'contact': 'Contact number',
  'submit' : 'Submit'
}
