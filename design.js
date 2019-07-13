/* eslint-disable */

// function startMusic() {
//     // change 1st line "audio" to "iframe" for autoplay on load
//     this.startMusic = document.createElement("audio");
//     this.startMusic.src = "sounds/soundtracks/fight-music.wav";
//     this.startMusic.setAttribute("preload", "auto");
//     this.startMusic.setAttribute("autoplay", "autoplay");
//     this.startMusic.setAttribute("controls", "none");
//     this.startMusic.setAttribute("loop", "loop");
//     this.startMusic.style.display = "auto";
//     document.body.appendChild(this.startMusic);
//     this.play = function(){
//       this.startMusic.play();
//     }
//     this.stop = function(){
//       this.startMusic.pause();
//     }
//   }

// startMusic();




document.onkeydown = function(e) {
    const UpBtn = 87;
    const DownBtn = 83;
    const space = 32;
    const gotu = document.querySelector(".gotu-standing")
    const frizu = document.querySelector(".frizu-standing")
  
    if (e.keyCode === DownBtn) {
        e.preventDefault();
        if (parseInt(gotu.style.top) <= 210) {
            gotuDown = parseInt(gotu.style.top);
            gotu.style.top = (gotuDown + 15) + 'px';
        }
    } else if (e.keyCode === UpBtn) {
        e.preventDefault();
        gotuUp = parseInt(gotu.style.top || 227);
        gotu.style.top = (gotuUp - 15) + 'px';
          if (parseInt(gotu.style.top) <= 20) {
            gotu.style.top = (gotuUp) + 'px';
            console.log(STOP)
        }
    } else if (e.keyCode === space) {
        const kamehameha = document.createElement('div')
        kamehameha.className = "kamehameha"
        document.body.appendChild(kamehameha);
        kamehamehaGPST = parseInt(gotu.style.top || 227);
        kamehameha.style.top = ((kamehamehaGPST*1.5)+22) + 'px';
        kamehameha.style.left = 128 + 'px';
        setTimeout(function() {
            const gotu = document.querySelector('.gotu-standing');
            const gotuDiv = gotu.getBoundingClientRect();
            const kamehameha = document.querySelector('.kamehameha');
            const kamehamehaDiv = kamehameha.getBoundingClientRect();
            const frizu = document.querySelector(".frizu-standing");
            const frizuDiv = frizu.getBoundingClientRect();
            if (kamehamehaDiv.bottom > frizuDiv.top && kamehamehaDiv.top < frizuDiv.top) {
                console.log('HIT - DEDUCT HP')
            } else if (frizuDiv.bottom > kamehamehaDiv.top && frizuDiv.top < kamehamehaDiv.top) {
                console.log('HIT - DEDUCT HP')
            } else {
                console.log('MISS - LOL GET BETTER')
            }
                
        }, 500)
        setTimeout(function() {
            kamehameha.parentNode.removeChild(kamehameha)
        }, 501)
    }
  }




// console.log('top of frizu HIT')
                // this logic SHOULD work
                //(frizuDiv.top < kamehamehaDiv.top && frizuDiv.top > kamehamehaDiv.bot) || (frizuDiv.bot < kamehamehaDiv.top && frizuDiv.bot > kamehamehaDiv.bot)
            // } else if (frizuDiv.bot < kamehamehaDiv.top && frizuDiv.bot > kamehamehaDiv.bot) {    
            //     console.log('bot of frizu Hit')            
            // }




//attempt 1

// const gameBoard = document.querySelector('.gameboard')
// const gotu = document.querySelector('.gotu-standing')
// document.querySelector('.gotu-standing').style.display = 'block'
// const gotuGPS = parseInt(gotu.style.top)
// console.log(typeof(gotuGPS))

// window.addEventListener('keydown', event => {
//     if (event.keyCode === 40) {
//         return gotuGPS += 10;
//     } else {
//         return gotuGPS;
//     }
// })



//attempt 2

// const gotuDiv = document.querySelector('.gotu-standing');
// keyCodes = { up: 38, down: 40 };
// keys = [];

// window.addEventListener('keydown', function (evt) {
//     keys[evt.keyCode] = true;
// });

// setInterval(function () {
//     if (keys[keyCodes.up]) {
//         gotuGPS -= 10;
//     } else if (keys[keyCodes.down]) {
//         gotuGPS += 10;
//     }
    
//     gotuDiv.style.top = y + 'px';
    
// }, 1/30);



//attempt 3

// const gotu = document.querySelector('.gotu-standing')
// const gotuGPS = parseInt(gotu.style.top)

// let keys = {
//     up: false,
//     down: false,
//     left: false,
//     right: false
// };

// window.onkeydown = function(e) {
//     const key = e.keyCode;
//     e.preventDefault();
//     if (key === 40) {
//         keys.down = true;
//     } else if (key === 38) {
//         keys.up = true;
//     }
// }

// window.onkeyup = function(e) {
//     const key = e.keyCode;
//     e.preventDefault();
//     if (key === 40) {
//         keys.down = false;
//     } else if (key === 38) {
//         keys.up = false;
//     }
// }
// let checkKeys = function() {
//     if (keys.up) {
//         gotuGPS += 10;
//     }
//     else if (keys.down) { 
//         gotuGPS -= 10;
//     }
// }
// checkKeys()


//attempt 4

// document.onkeydown = function(e) {
//   const UpBtn = 9;
//   const DownBtn = 16;
//   const gotu = document.querySelector(".gotu-standing")

//   if (e.keyCode === DownBtn) {
//         e.preventDefault();
//         gotuGPS = parseInt(gotu.style.top || 0);
//         gotu.style.top = (gotuGPS + 15) + 'px';
//         gotu.className = "gotu-down";
//         const gotuDown = document.querySelector(".gotu-down")
//         return gotuDown
//   }
//   if (e.keyCode === UpBtn) {
//         e.preventDefault();
//         gotuGPS = parseInt(gotu.style.top || 0);
//         gotu.style.top = (gotuGPS - 15) + 'px';
//         gotu.className = "gotu-up";
//   }
// }

// document.onkeyup = function(e) {
//     const UpBtn = 9;
//     const DownBtn = 16;
//     const gotu = document.querySelector(".gotu-standing")
    
//     if (e.keyCode === DownBtn) {
        
//         const gotuDown = document.querySelector(".gotu-down")
//         gotuDown.className = "gotu-standing";

//     }
//     if (e.keyCode === UpBtn) {

//         const gotuUp = document.querySelector(".gotu-up")
//         gotuUp.className = "gotu-standing";

//     }
//   }


//attempt 5

// document.onkeydown = function(e) {
//   const UpBtn = 9;
//   const DownBtn = 16;
//   const gotu = document.querySelector(".gotu-standing")
//   const gotuGPS = document.querySelector(".gotu-down")
//   const gotuUp = document.querySelector("gotu-up")

//   if (e.keyCode === DownBtn) {
//         e.preventDefault();
//         gotuGPS = parseInt(gotu.style.top || 0);
//         gotu.style.top = (gotuGPS + 15) + 'px';
//         gotu.classList.toggle("gotu-down");
//         gotu.classList.toggle("gotu-standing");
//   }
//   if (e.keyCode === UpBtn) {
//         e.preventDefault();
//         gotuUp = parseInt(gotu.style.top || 0);
//         gotu.style.top = (gotuGPS - 15) + 'px';
//         gotu.classList.toggle("gotu-up");
//         gotu.classList.toggle("gotu-standing");
//   }
// }

// document.onkeyup = function(e) {
//     const UpBtn = 9;
//     const DownBtn = 16;
//     const gotuUp = document.querySelector(".gotu-up")
//     const gotuGPS = document.querySelector(".gotu-down")
//     const gotu = document.querySelector(".gotu-standing")
  
//     if (e.keyCode === DownBtn) {
//           e.preventDefault();
//           gotuGPS.classList.toggle("gotu-standing");
//           return gotu
//     }
//     if (e.keyCode === UpBtn) {
//           e.preventDefault();
//           gotuUp.classList.toggle("gotu-standing");
//           return gotu
//     }
//   }


//attempt 6


// document.onkeydown = function(e) {
//   const UpBtn = 9;
//   const DownBtn = 16;
//   const gotu = document.querySelector(".gotu-standing")

//   if (e.keyCode === DownBtn) {
//         e.preventDefault();
//         gotuGPS = parseInt(gotu.style.top || 0);
//         gotu.style.top = (gotuGPS + 15) + 'px';
//         gotu.classList.toggle("gotu-down");
//         const gotuGPS = document.querySelector(".gotu-down");
//         gotuGPS.classList.toggle("gotu-standing");
//         return gotu;
//   }
//   if (e.keyCode === UpBtn) {
//         e.preventDefault();
//         gotuGPS = parseInt(gotu.style.top || 0);
//         gotu.style.top = (gotuGPS - 15) + 'px';
//         gotu.classList.toggle("gotu-up");
//         const gotuUp = document.querySelector(".gotu-up");
//         gotuUp.classList.toggle("gotu-standing");
//         return gotu;
//   }
// }

