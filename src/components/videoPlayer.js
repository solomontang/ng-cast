angular.module('video-player')
.controller('VideoPlayerCtrl', function($scope) {
  
})

.component('videoPlayer', {
  controller: 'VideoPlayerCtrl',
  bindings: {
    currentVideo: '<'
  },
  templateUrl: 'src/templates/videoPlayer.html'
});
