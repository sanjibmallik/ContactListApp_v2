(function(){
angular
	.module('loginModule',['ui.router'])
	.controller('loginCtrl', loginCtrl);


	loginCtrl.$inject = ['$scope'];
	function loginCtrl(){
		var vm = this;
		vm.logginMessage = "logged in";
	}



})();