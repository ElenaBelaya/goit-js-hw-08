import throttle from "lodash.throttle";
const KEY = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
      const player = new Vimeo.Player(iframe);
  
    player.on('play', function() {
        player.setCurrentTime(localStorage.getItem(KEY))
        .then(function(seconds) { 

      });
    
    player.on('timeupdate', throttle(timeUpdate, 1000)); 

    

});

function timeUpdate() { 
player.getCurrentTime().then(function(seconds) {
    localStorage.setItem(KEY, seconds);            
   });   
    
 }
