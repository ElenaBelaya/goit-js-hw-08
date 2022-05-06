const iframe = document.querySelector('iframe');
      const player = new Vimeo.Player(iframe);
  
      player.on('play', function() {
          console.log('played the video!');
      });
  
      player.getVideoTitle().then(function(title) {
          console.log('title:', title);
      });

       player.on('timeupdate', function() {

        player.getCurrentTime().then(function(seconds) {
             localStorage.setItem('videoplayer-current-time', JSON.stringify(seconds));
             const currentTime = localStorage.getItem('videoplayer-current-time');

             player.setCurrentTime(currentTime).then(function(seconds) {
                 console.log(currentTime);
                // seconds = the actual time that the player seeked to
            }).catch(function(error) {
                switch (error.name) {
                    case 'RangeError':
                        // the time was less than 0 or greater than the video’s duration
                        break;
            
                    default:
                        // some other error occurred
                        break;
                }
            });

            
         }).catch(function(error) {
             console.log('error')
         });
        
        
        //console.log(currentTime)
    });
    
