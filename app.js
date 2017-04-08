(function(){
	'use strict'
	angular.module('MyNameCalculator',[])
	.controller('MyNameController',function($scope){
		$scope.name="";
		$scope.totalValue=0;
		$scope.displayNumeric= function(){

			$scope.totalValue=convertStringtoValue($scope.name);;

		};
		function convertStringtoValue(string){
			var totalStringValue=0;
			for(var i =0; i < string.length ;i++){
				totalStringValue+=string.charCodeAt(i);

			}

			return totalStringValue;


		}


		

	});
})();