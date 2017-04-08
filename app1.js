(function(){
	angular.module('upperCaseApp',[])
	.controller('myUpperCaseController',dicontroller);

	dicontroller.$inject =['$scope','$filter'];
	function dicontroller($scope,$filter){
		$scope.name="anurag";
		$scope.upper= function(){
			
			var uPcase = $filter('uppercase');
			$scope.name = uPcase($scope.name);
		};
	}

})();