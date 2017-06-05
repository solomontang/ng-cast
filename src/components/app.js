angular.module('video-player')

.component('app', {
  bindings: {
  },
  templateUrl: 'src/templates/app.html'
});

angular.module('video-player')
.controller('AppCtrl', function($scope) {
  $scope.videoData = exampleVideoData;
});
