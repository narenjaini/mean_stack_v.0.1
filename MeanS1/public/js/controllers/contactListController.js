app.controller("contactController", function($scope, $http){

  $scope.formHeaders = formheaders;

  $http.get('/personalContactList').success(function(response){
    console.log('I got the data I requested');
    $scope.personalContactList = response;
  });

  
});


var formheaders = {
  'email' : 'Email address',
  'name' : 'Name',
  'profilepic' : 'Profile picture',
  'contact': 'Contact number',
  'submit' : 'Submit'
}