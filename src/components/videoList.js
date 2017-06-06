var VideoListCtrl = function ($scope) {
  var ctrl = this;
  console.log(this);
  ctrl.$onInit = function () {
    console.log(this.videos);
  };
};

angular.module('video-player')
.component('videoList', {
  bindings: {
    videos: '<'
  },
  controller: VideoListCtrl,
  templateUrl: 'src/templates/videoList.html'
});

