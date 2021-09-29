(function () {
    app.controller('views.layout.sidebar', [
        '$scope', '$state',
        function ($scope, $state) {
            $scope.$on('$includeContentLoaded', function () {
                setTimeout(function () {
                    Layout.initSidebar($state); // init sidebar
                    $(window).trigger('resize');
                }, 0);
            });
        }
    ]);
})();