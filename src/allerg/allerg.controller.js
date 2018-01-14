function AllergController($rootScope) {
    const allerg = this;
    
	allerg.addingAllergene = false; //formulaire caché
    allerg.allergenes = $rootScope.carnet.allergenes; //va chercher les allergènes de ce carnet

    allerg.displayAddAllergene = function(Allergene) {
    	allerg.addingAllergene = true;  //affiche le formulaire pour ajouter une allergie
    }

    allerg.addAllergene = function(newAllergene) {
    	allerg.allergenes.push(newAllergene); //ajoute les données éditées par l'utilisateur au tableau vide
    	allerg.newAllergene = {}; //vide les données rentrées par l'utilisateur lorsque le formulaire est soumis
    	allerg.addingAllergene = false; //efface le formulaire
    }
}

AllergController.$inject = ['$rootScope'];

export default AllergController