angular.module('video-player')

.component('app', {
  bindings: {
    player: '<'
  },
  templateUrl: 'src/templates/app.html'
});

angular.module('video-player')
.controller('AppCtrl', function($scope) {
  $scope.videos = exampleVideoData;
});
