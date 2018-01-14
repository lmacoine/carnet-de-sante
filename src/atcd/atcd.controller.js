function AtcdController($rootScope) {
    const atcd = this;

    atcd.addingAtcd = false; //formulaire caché
    atcd.antecedents = $rootScope.carnet.antecedents; //récupère les antécédents de ce carnet

    atcd.displayAddAtcd = function(Atcd) {
    	atcd.addingAtcd = true;  //affiche le formulaire pour ajouter un atcd
    }

    atcd.addAtcd = function(newAtcd) {
    	atcd.antecedents.push(newAtcd); //ajoute les données rentrées l'utilisateur au tableau
    	atcd.newAtcd = {};  //vide les données rentrées par l'utilisateur lorsque le formulaire est soumis
    	atcd.addingAtcd = false; //efface le formulaire
    }
}

AtcdController.$inject = ['$rootScope'];

export default AtcdController
