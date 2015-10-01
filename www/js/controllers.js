angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})

.controller('WelcomeCtrl', function($scope, $ionicPopup, $timeout) {
  $scope.showPopup = function() {
  $scope.data = {}

  // An elaborate, custom popup
  var myPopup = $ionicPopup.show({
    template: '<input type="password" ng-model="data.wifi">',
    title: 'Join an Existing Group',
    subTitle: 'Please enter the Group ID provided by your Group Manager/Admin.',
    scope: $scope,
    buttons: [
      { text: 'Cancel' },
      {
        text: '<b>Join</b>',
        type: 'button-positive',
        onTap: function(e) {
          if (!$scope.data.group_id) {
            //don't allow the user to close unless he enters wifi password
            e.preventDefault();
          } else {
            return $scope.data.group_id;
          }
        }
      }
    ]
  });
 };
})

.controller('LocationCtrl', function($scope) {
  $scope.showLocationFields = false;
});
