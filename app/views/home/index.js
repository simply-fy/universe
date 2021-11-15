(function () {
    app.controller('views.layout.index', [
        '$scope',
        function ($scope) {
            var vm = this;


            window.addEventListener('click', event => {
                console.log('button press');
                // Toggle the side navigation
                const sidebarToggle = document.div.querySelector('#sidebarToggle');
                if (sidebarToggle) {
                    //Uncomment Below to persist sidebar toggle between refreshes
                    if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
                        document.body.classList.toggle('sb-sidenav-toggled');
                    }
                    sidebarToggle.addEventListener('click', event => {
                        event.preventDefault();
                        document.body.classList.toggle('sb-sidenav-toggled');
                        localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
                    });
                }

            });
                        
        }]);
})();
