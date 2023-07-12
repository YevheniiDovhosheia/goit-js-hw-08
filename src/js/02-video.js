import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const frame = document.querySelector('iframe');
const player = new Player(frame);

const onPlay = function ({ seconds }) {
  localStorage.setItem('videoplayer-current-time', JSON.stringify(seconds));
};
const LS = localStorage.getItem('videoplayer-current-time');

player
  .setCurrentTime(LS)
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;
      default:
        break;
    }
  });
player.on('timeupdate', throttle(onPlay, 1000));
