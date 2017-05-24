(function(){

angular
	.module("mainApp", ['ui.router'])
	.controller("mainCtrl", mainCtrl)
	
	mainCtrl.$inject = ['$scope'];
	function mainCtrl (){
		var vm = this;
		vm.message = "sanjib mallik";
	}
})();