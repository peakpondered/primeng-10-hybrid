/**
 * This file imports the third party library dependencies, then creates the angular module "demo"
 * and exports it.
 */
import { upgradeModule } from '@uirouter/angular-hybrid';
import uiRouter from '@uirouter/angularjs';
import * as angular from 'angular';

// External dependencies
// Feature Modules
// Create the angular 1 module "demo".
//
// Since it is exported, other parts of the application (in other files) can then import it and register things.
// In bootstrap.js, the module is imported, and the components, services, and states are registered.
export const sampleAppModuleAngularJS = angular.module("sampleapp", [
  uiRouter,
  upgradeModule.name,
]);

// Apply some global configuration...

// If the user enters a URL that doesn't match any known URL (state), send them to `/welcome`
const otherwiseConfigBlock = ['$urlRouterProvider', '$locationProvider', ($urlRouterProvider, $locationProvider) => {
  $locationProvider.hashPrefix('');
  $urlRouterProvider.otherwise("/root");
}];
sampleAppModuleAngularJS.config(otherwiseConfigBlock);


