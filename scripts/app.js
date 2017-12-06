var application = angular.module('angular_app',['ngRoute']);
var url = "data.json";

application.controller ('angular_controller',function($scope,$http,$location){
    
    //Login function
    
    $scope.login = function(){
        window.alert('login Function is emty');
    }

   // logout function
    $scope.logout = function(){
        $location.path('/login');
        alert('Logout Successfully');
        
    }
    // Creating the List
    $scope.memberList = function(){
    $http.get(url).then( function(response) {
        $scope.students = response.data;
        })
    }
    
    // Add new member
    
    $scope.addMember = function(){
        
        var name = $scope.name;
        var email = $scope.email;
        var country = $scope.country;
        var password = $scope.password;
        var existingStudents = new Array;
        
        console.log(name+' '+email+' '+country);
        
        var request = {
            method: 'get',
            url: 'data.json',
            dataType: 'json',
            contentType: "application/json"
        };
        
        $http(request)
            .success(function (jsonData) {
                existingStudents = jsonData;
                var newMember = {
                    'Name': name,
                    'Email': email,
                    'Country': country,
                    'Password': password
                }
                existingStudents.push(newMember);
                console.log(existingStudents);
                alert('Please open the console to see the result');
            })
            .error(function () {
                console.log('Could not read file!');
            });
    }
});