angular.module('video-player')

.component('app', {
  bindings: {
    player: '<'
  },
  templateUrl: 'src/templates/app.html'
});
