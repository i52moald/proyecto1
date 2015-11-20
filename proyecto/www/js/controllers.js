angular.module('starter.controllers', ['ionic' ,'ngResource'])
  .factory('Post', function($resource){
    return $resource('http://localhost:3000/api/clientes'); //deberia de ser por id
  })

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope, $http) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];


    // funciona bien con los corchetes
 /* $http.get('http://echo.jsontest.com/conditions/garantia/nombre/david').then(function(resp){
        $scope.conditions = [resp.data]; // para coger todos los objetos resp.data para coger un dato dentro del objeto resp.data.elvalorquesequiera
  },function(err){
    console.error('ERR', err);
    //err.status will contain the status code
  })*/



  $http.get('http://localhost:3000/api/clientes').then(function(resp){
    $scope.clientes = [resp.data]; // para coger todos los objetos resp.data para coger un dato dentro del objeto resp.data.elvalorquesequiera
  },function(err){
    console.error('ERR', err);
    //err.status will contain the status code
  })


  /*$http.get('http://localhost:3000/api/clientes').then(function(resp){
    $scope.clientes = [resp.data.clientes];
  },function(err){
    console.error('ERR', err);
    //err.status will contain the status code
  })*/
})

/*.controller('ClientesCtrl', function($scope, $http) {
  $scope.clientes = {};
    $scope.getClientes = function(){
      $http.get('http://localhost:3000/api/clientes',$scope.clientes)

    };
})*/

.controller('PlaylistCtrl', function($scope, $stateParams) {
    console.log('Success', resp);
});
