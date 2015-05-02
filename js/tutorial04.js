var loginMod = angular.module("loginMod", []);
loginMod.controller("UserController",function($scope,$log)
    {
        $scope.name="admin";
        $scope.pword="123456";
        $log.info( $scope.name);
        $log.info( $scope.pword);

        $scope.login = function()
        {
            alert("登录");
        }
    }
);

var pwordMod = angular.module("pwordMod", []);
pwordMod.controller("UserController",function($scope,$log)
    {

        $scope.pword="123456";
        $scope.changePwrd = function()
        {
            alert("修改密码");
        }
    }
);
