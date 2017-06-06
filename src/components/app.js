var AppCtrl = function ($scope, $element, $attrs) {
  var ctrl = this;
  ctrl.videos = exampleVideoData;
  ctrl.currentVideo = exampleVideoData[0];
  // console.log(ctrl);
};

angular.module('video-player')

.component('app', {
  controller: AppCtrl,
  templateUrl: 'src/templates/app.html'
});
