/* eslint-disable */

function startMusic() {
    // change 1st line "audio" to "iframe" for autoplay on load
    this.startMusic = document.createElement("audio");
    this.startMusic.src = "sounds/soundtracks/fight-music.wav";
    this.startMusic.setAttribute("preload", "auto");
    this.startMusic.setAttribute("autoplay", "autoplay");
    this.startMusic.setAttribute("controls", "none");
    this.startMusic.setAttribute("loop", "loop");
    this.startMusic.style.display = "auto";
    document.body.appendChild(this.startMusic);
    this.play = function(){
      this.startMusic.play();
    }
    this.stop = function(){
      this.startMusic.pause();
    }
  }

startMusic();