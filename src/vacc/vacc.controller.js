// https://docs.angularjs.org/guide/scope
//état des variables au départ = initialisation des variables
function VaccController($scope, $rootScope) {
	$scope.addingVaccin = false; //formulaire caché
	$scope.newVaccin = {}; //stocke le nom du nouveau vaccin donné par l'utilisateur
	$scope.vaccins = $rootScope.carnet.vaccinsObl; // récupération des données de ce carnet

    // fonction permettant de stocker le vaccin choisi
	$scope.selectVaccin = function(vaccin) {
		$scope.addingVaccin = false; //formulaire caché
		$scope.selectedVaccin = vaccin; // Stocke le vaccin sur lequel l'utilisateur a cliqué
	};
    // fonction permettant d'afficher et de stocker les valeurs dans newVaccin
	$scope.displayAddVaccinForm = function(vaccin) { // +
		$scope.addingVaccin = true; //apparition d'une formulaire
		$scope.newVaccin = vaccin; // = initialise les valeurs du champ du formulaire
	}
    //fonction ajoutant un nouveau vaccin à la condition qu'il n'existe pas
	$scope.addVaccin = function(newVaccin) { //ajouter des vaccins nouveaux
		// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/find
		var vaccinFound = $scope.vaccins.find(function(v){
		    var isFound = v.name == newVaccin.name
			return isFound; //condition (boolean)
		});

		if(!vaccinFound) {
			$scope.vaccins.push(newVaccin); //ajoute nouveau vaccin
		}
	
		$scope.newVaccin = {};
		$scope.addingVaccin = false; //formulaire à zéro
	}
}

VaccController.$inject = ['$scope', '$rootScope'];

export default VaccController