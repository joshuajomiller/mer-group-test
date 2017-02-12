var app = angular.module('mer-group-test', []);
app.controller('loadDataCtrl', function($scope, $http) {
    //function to load data from json file
    $scope.loadData = function(){
        $http({
            method:'GET',
            url: '/js/demo.json',
            headers: {
                "Content-Type": "application/json"
            }
        }).then(
            function successCallback(response) {
                //save user data to scope userData object
                $scope.userData = response.data;
            }, function errorCallback(response) {
                console.log(response);
            }
        );
    };

    //on page load create user data object and call loadData function
    $scope.userData = {};
    $scope.loadData();
});