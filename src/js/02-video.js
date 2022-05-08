import throttle from "lodash.throttle";
const KEY = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
      const player = new Vimeo.Player(iframe);
  
    player.on('play', function() {
        console.log('played the video!');    
        player.setCurrentTime(localStorage.getItem(KEY)).then(function(seconds) { 

      });
    
    player.on('timeupdate', timeUpdate); 

    

});

function timeUpdate() { 
player.getCurrentTime().then(function(seconds) {
    localStorage.setItem(KEY, seconds);            
   });   
    
 }
