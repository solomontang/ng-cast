var VideoPlayerCtrl = function ($scope) {
  var ctrl = this;
  ctrl.$onInit = () => {
    console.log(this, ctrl);
    console.log($scope);
  };
};

angular.module('video-player')
.component('videoPlayer', {
  bindings: {
    currentVideo: '<'
  },
  controller: VideoPlayerCtrl,
  templateUrl: 'src/templates/videoPlayer.html'
});
