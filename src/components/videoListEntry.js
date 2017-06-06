var VideoListEntryCtrl = function () {
  var ctrl = this;
  ctrl.$onInit = function () {
    debugger;
    console.log(this);
  };
};

angular.module('video-player')
.component('videoListEntry', {
  bindings: {
    video: '<'
  },
  controller: VideoListEntryCtrl,
  templateUrl: 'src/templates/videoListEntry.html'
});
