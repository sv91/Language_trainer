'use strict';

/**
 * @ngdoc overview
 * @name languageTrainerApp
 * @description
 * # languageTrainerApp
 *
 * Main module of the application.
 */
angular
  .module('languageTrainerApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
