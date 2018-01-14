
function HomeController($rootScope) {
    const home = this;

    home.user = $rootScope.carnet.user; //récupère les données de ce carnet
}

HomeController.$inject = ['$rootScope'];

export default HomeController