import data from './fakeData.js';

function run($rootScope) {
    $rootScope.carnet = data;
}

// Nomme explicitement les injections de dépendances (pour éviter les bugs lors de la minification)
run.$inject = ['$rootScope']

// Export de la fonction de lancement
export default run