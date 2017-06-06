angular.module('video-player')
.controller('AppCtrl', function ($scope, $element, $attrs) {
  // var ctrl = this;
  // ctrl.$onInit = function () {
  this.videos = exampleVideoData;
  this.currentVideo = exampleVideoData[0];  
  // }
  // this.videos = exampleVideoData;
  // this.currentVideo = exampleVideoData[0];
  // // ctrl.videos = exampleVideoData;
  // // ctrl.currentVideo = exampleVideoData[0];
  // // console.log(ctrl);
})


.component('app', {
  controller: 'AppCtrl',
  templateUrl: 'src/templates/app.html'
});
