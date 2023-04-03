import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const KEY = "videoplayer-current-time";

const onPlay = function(event){
    localStorage.setItem(KEY, event.seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));

const videoTime = Number(localStorage.getItem('videoplayer-current-time')) || 0;

player.setCurrentTime(videoTime).catch(function(error) {
        switch (error.name) {
            case 'RangeError':
                break;
            default:
                break;
        };
    });
