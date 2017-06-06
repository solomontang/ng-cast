var VideoListEntryCtrl = function () {
  var ctrl = this;
};

angular.module('video-player')
.component('videoListEntry', {
  bindings: {
    video: '<'
  },
  controller: VideoListEntryCtrl,
  templateUrl: 'src/templates/videoListEntry.html'
});
