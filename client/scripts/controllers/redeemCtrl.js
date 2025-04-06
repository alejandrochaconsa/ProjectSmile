
angular.module('myApp')
    .controller("redeemCtrl", redeemCtrl);

function redeemCtrl($scope, $location, $ionicNavBarDelegate, $window, $meteor, $stateParams){

    $ionicNavBarDelegate.showBackButton(true);



    $scope.title = "Reedem"

    $scope.print = function(){
        $window.print();
    }

    //var path = $location.path();
    //var currentId = path.substr(path.length - 1);
    //console.log(currentId)
    //$scope.mealToRedeem = Meals.find({ id: currentId });
    $scope.mealToRedeem = $meteor.object(Meals, $stateParams.id , false);


    console.dir($scope.mealToRedeem )

}

