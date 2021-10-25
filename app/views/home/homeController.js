app.controller('homeController',
    function ($scope, $location, DataService) {

        $scope.currentContent = $scope.content[0];

        $scope.setPage = function (page) {
            $scope.currentContent = page;
        };
    });

