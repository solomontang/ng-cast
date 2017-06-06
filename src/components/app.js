var AppCtrl = function ($scope, $element, $attrs) {
  var ctrl = this;
  ctrl.videos = exampleVideoData;
};

angular.module('video-player')

.component('app', {
  bindings: {
  },
  controller: AppCtrl,
  templateUrl: 'src/templates/app.html'
});
