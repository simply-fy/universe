app.controller('tutorialController',
    function ($scope, $location, DataService) {
        const heading = document.querySelector('h1');
        const btn = document.querySelector('.btn');

        heading.addEventListener('click', function () {
            heading.classList.add('blue');
        })
});
