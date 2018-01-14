function SurvController($rootScope) {
	const surv = this;

    surv.examens = $rootScope.carnet.examens; // récupération des données de ce carnet
    surv.displayAddExam = function(exam) {   //affiche l'examen rentré par l'utilisateur
    }

    surv.addExam = function(newExam) {
    	surv.examens.push(newExam);   //ajoute les données rentrées l'utilisateur au tableau
    	surv.newExam = {};   //vide les données rentrées par l'utilisateur lorsque le formulaire est soumis
    }
}

SurvController.$inject = ['$rootScope'];

export default SurvController
