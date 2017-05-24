(function(){

angular
	.module("mainApp")
	.config(config);

	function config($stateProvider,$urlRouterProvider){

		$urlRouterProvider.otherwise('/login');
		
		$stateProvider.
			  .state(login)
			  .state(logOut);

			  var login = {
			  	name:'login',
			  	url:'/login',
			  	templateUrl: '<h2>Login page</h2>'
			    
			  }
			  var logOut = {
			  	name:'logOut',
			  	url:'/logout',
			  	template: '<h2>LOG out</h2>'			  
			  }


	}

	
})();