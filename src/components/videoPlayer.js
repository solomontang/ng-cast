angular.module('video-player')
.controller('VideoPlayerCtrl', function($scope) {
})

.component('videoPlayer', {
  bindings: {
    video: '<',
  },
  controller: 'VideoPlayerCtrl',
  templateUrl: 'src/templates/videoPlayer.html'
});
