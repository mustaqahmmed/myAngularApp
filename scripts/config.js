application.config(function($routeProvider) {
   $routeProvider.
   when('/',{
       templateUrl: 'partials/login.html', 
       controller: 'angular_controller'
   }).
   when('/member_list', {
      templateUrl: 'partials/member_list.html', 
       controller: 'angular_controller'
   }).
   
   when('/add_member', {
      templateUrl: 'partials/add_member.html', 
      controller: 'angular_controller'
   }).
   
    when('/login', {
        templateUrl: 'partials/login.html', 
        controller: 'angular_controller'
    })

});
     