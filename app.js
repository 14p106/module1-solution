angular.module("LunchCheck", []).controller("LunchCheckController", LunchCheckController);

LunchCheckController.$inject = ["$scope"];

function LunchCheckController($scope){
	$scope.lunchItems = "";
	$scope.errorMsg = "Too Much!";
	$scope.emptyErrorMsg = "Please enter data first";
	$scope.successMsg = "Enjoy!";
	$scope.lunchMenuCheck = function(){
		$scope.emptyErrorMsgCheck = false;
		$scope.errorMsgCheck = false;
		$scope.successMsgCheck = false;
		if($scope.lunchItems === ""){
			$scope.textBoxColor = false;
			$scope.emptyErrorMsgCheck = true;
		}else{
			$scope.textBoxColor = true;
			var itemList = $scope.lunchItems.split(",");
			if(itemList.length > 3){
				$scope.errorMsgCheck = true;
			}else{
				$scope.successMsgCheck = true;
			}
		}

	};
};