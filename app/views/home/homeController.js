app.controller('homeController',
    function ($scope, $location, DataService) {

        $scope.content = [{
            name: "red",
            content: "This is the red content"
        }, {
            name: "blue",
            content: "This is the blue content"
        }, {
            name: "green",
            content: "This is the green content"
        }];

        $scope.currentContent = $scope.content[0];

        $scope.setPage = function (page) {
            $scope.currentContent = page;
        };
    });

