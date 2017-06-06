angular.module('video-player')
.controller('VideoListCtrl', function ($scope) {
})

.component('videoList', {
  bindings: {
    videos: '<',
  },
  controller: 'VideoListCtrl',
  templateUrl: 'src/templates/videoList.html'
});

