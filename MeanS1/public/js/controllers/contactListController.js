app.controller("contactController", function($scope, $http){  

  $scope.formHeaders = formHeaders;

  var refresh = function(){
    $http.get('/personalContactList').success(function(response){
      console.log('I got the data I requested');
      $scope.personalContactList = response;
      $scope.contact = "";
    });
  };
  
  refresh();
  
  $scope.addContact = function(){ debugger;
    console.log($scope.contact);
    $http.post('/personalContactList', $scope.contact).success(function(response){
      console.log(response);
      refresh();
    });
  }
  
});


var formHeaders = {
  'email' : 'Email address',
  'name' : 'Name',
  'profilepic' : 'Profile picture',
  'contact': 'Contact number',
  'submit' : 'Submit'
}