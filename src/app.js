// Css
import './styles/colors.css' // Import de toutes les variables de couleurs
import './styles/custom-app.css' // import du style
import './styles/app.css' // import du style

//Config 
import angular from 'angular'
import '@uirouter/angularjs' // import d'Angular UI Router
import config from './app.config.js'
import run from './app.run.js'
import sidebarRun from './sidebar/sidebar.run.js'
import 'jquery' // import de jquery
import 'bootstrap' // import de Bootstrap

// Constant
var mediaquery = {
    'desktopLG': 1200,
    'desktop': 992,
    'tablet': 767,
    'mobile': 480
};

//Controllers
import HomeController from './home/home.controller.js' //import du controller de la home
import AllergController from './allerg/allerg.controller.js'
import AtcdController from './atcd/atcd.controller.js'
import SurvController from './surv/surv.controller.js'
import VaccController from './vacc/vacc.controller.js'

angular
    .module('myHealthBookApp', ['ui.router'])
    .constant('APP_MEDIAQUERY', mediaquery)
    .config(config)
    .run(run)
    .run(sidebarRun)
    .controller('HomeController', HomeController) //référence le controller de la home dans l'app angular
    .controller('AllergController', AllergController)
    .controller('AtcdController', AtcdController)
    .controller('SurvController', SurvController)
    .controller('VaccController', VaccController)
