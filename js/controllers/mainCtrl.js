app.controller('MainCtrl', function ($scope, MainServ) {

    //Contain all of your non-shared functionality to this controller.
    $scope.vm = MainServ;
    //Always call init or clear with this model
    $scope.vm.init();
});