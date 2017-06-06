angular.module('video-player')
.controller('AppCtrl', function (youTube) {
  this.searchService = youTube;
  this.videos = exampleVideoData;
  this.currentVideo = exampleVideoData[0];

  this.selectVideo = (video) => {
    this.currentVideo = video;
  };

  this.searchResults = (data) => {
    this.videos = data;
    this.currentVideo = this.videos[0];
  };
})
.component('app', {
  controller: 'AppCtrl',
  templateUrl: 'src/templates/app.html'
});
