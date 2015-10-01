angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      StatusBar.styleLightContent();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('signup', {
    url: '/',
    templateUrl: 'setup-signup.html'
  })
  .state('welcome', {
    url: '/welcome',
    templateUrl: 'setup-welcome.html',
    controller: 'WelcomeCtrl'
  })
  .state('new-group', {
    url: '/new-group',
    templateUrl: 'new-group.html'
  })
  .state('group-location', {
    url: '/group-location',
    templateUrl: 'group-location.html',
    controller: 'LocationCtrl'
  })

  $urlRouterProvider.otherwise('/');
});
