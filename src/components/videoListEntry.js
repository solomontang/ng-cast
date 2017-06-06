angular.module('video-player')
.controller( 'VideoListEntryCtrl', function () {

})

.component('videoListEntry', {
  bindings: {
    video: '<'
  },
  controller: 'VideoListEntryCtrl',
  templateUrl: 'src/templates/videoListEntry.html'
});
