angular.module('starter.controllers', [])

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

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];

})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})

.controller('DepartmentsController', function($scope, $stateParams) {
  /*$scope.departments = [
    { id: 1, name: '上海道勤软件有限公司', type: '总公司', level: 0,
      offspring: [
        { id: 11, name: '上海研发中心', type: '分公司', level: 1, offspring: []},
        { id: 12, name: '北京研发中心', type: '分公司', level: 1, offspring: [
          { id: 121, name: '财务部', type: '职能部门', level: 2, offspring: []},
          { id: 122, name: '人力资源部', type: '职能部门', level: 2, offspring: []},
          { id: 123, name: '前端开发部', type: '开发团队', level: 2, offspring: []},
          { id: 124, name: '后台开发部', type: '开发团队', level: 2, offspring: []}
        ]},
      ]
    },
    { id: 1, name: '爱丽丝娱乐有限公司', type: '总公司', level: 0,
      offspring: [
        { id: 11, name: '北京KTV集群', type: '事业部', level: 1, offspring: []},
      ]
    }
  ];*/
  $scope.departments = [
    { id: 1, name: '上海道勤软件有限公司', type: '总公司', level: 0 },
    { id: 11, name: '上海研发中心', type: '分公司', level: 1, parent_id: 1 },
    { id: 12, name: '北京研发中心', type: '分公司', level: 1, parent_id: 1 },
    { id: 121, name: '财务部', type: '职能部门', level: 2, parent_id: 12},
    { id: 122, name: '人力资源部', type: '职能部门', level: 2, parent_id: 12},
    { id: 2, name: '爱丽丝娱乐有限公司', type: '总公司', level: 0, parent_id: 1},
    { id: 21, name: '北京KTV集群', type: '事业部', level: 1, parent_id: 2}
  ];
})

.controller('DepartmentController', function($scope, $stateParams) {
})

.controller('TabsPageController', [ '$scope', '$state', function($scope, $state) {
    $scope.navTitle = 'Tab Page';

    $scope.leftButtons = [{
        type: 'button-icon icon ion-navicon',
        tap: function(e) {
            $scope.toggleMenu();
        }
    }];
}])
;
