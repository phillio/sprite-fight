/* eslint-disable */

// function startMusic() {
//     // change 1st line "audio" to "iframe" for autoplay on load
//     this.startMusic = document.createElement("iframe");
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



//https://stackoverflow.com/questions/48545764/moving-div-using-javascript

document.onkeydown = function(e) {
    const p1Up = 87;
    const p1Down = 83;
    const p1Fire = 67;
    const p2Up = 80;
    const p2Down = 76;
    const p2Fire = 77;
    const gotu = document.querySelector(".gotu-standing")
    const frizu = document.querySelector(".frizu-standing")
  
    if (e.keyCode === p1Down) {
        e.preventDefault();
        if (parseInt(gotu.style.top) <= 215) {
            gotuDown = parseInt(gotu.style.top);
            gotu.style.top = (gotuDown + 15) + 'px';
        }
    } else if (e.keyCode === p1Up) {
        e.preventDefault();
        gotuUp = parseInt(gotu.style.top || 227);
        gotu.style.top = (gotuUp - 15) + 'px';
          if (parseInt(gotu.style.top) <= 10) {
            gotu.style.top = (gotuUp) + 'px';
            console.log('STOP')
        }
        
    } else if (e.keyCode === p1Fire) {
        const kamehameha = document.createElement('div')
        kamehameha.className = "kamehameha"
        document.body.appendChild(kamehameha);
        kamehamehaGPST = parseInt(gotu.style.top || 227);
        kamehameha.style.top = ((kamehamehaGPST*1.5)+22) + 'px';
        kamehameha.style.left = 128 + 'px';
        setTimeout(function() {
            const gotu = document.querySelector('.gotu-standing');
            //emre mentinoed getBoundingClientRect()
            const gotuDiv = gotu.getBoundingClientRect();
            const kamehameha = document.querySelector('.kamehameha');
            const kamehamehaDiv = kamehameha.getBoundingClientRect();
            const frizu = document.querySelector(".frizu-standing");
            const frizuDiv = frizu.getBoundingClientRect();
            const kameAdjTop = ((kamehamehaDiv.top-22))/1.5+24;
            const kameAdjBot = kameAdjTop + 12;
            if (kameAdjBot > frizuDiv.top && kameAdjTop < frizuDiv.top) {
                console.log('HIT - DEDUCT HP')
                //https://stackoverflow.com/questions/20277052/how-to-make-a-health-bar
                let healthPoints2 = document.querySelector("#p2health")
                healthPoints2.value -= 5;
                checkHealthP2();
            } else if (frizuDiv.bottom > kameAdjTop && frizuDiv.top < kameAdjTop) {
                console.log('HIT - DEDUCT HP')
                let healthPoints2 = document.querySelector("#p2health")
                healthPoints2.value -= 5;
                checkHealthP2();
            } else {
                console.log('MISS - LOL GET BETTER')
            }
                
        }, 500);
        setTimeout(function() {
            kamehameha.parentNode.removeChild(kamehameha)
        }, 501);
    }  else if (e.keyCode === p2Down) {
        e.preventDefault();
        if (parseInt(frizu.style.top) <= 215) {
            frizuDown = parseInt(frizu.style.top);
            frizu.style.top = (frizuDown + 15) + 'px';
        }
    } else if (e.keyCode === p2Up) {
        e.preventDefault();
        frizuUp = parseInt(frizu.style.top || 227);
        frizu.style.top = (frizuUp - 15) + 'px';
          if (parseInt(frizu.style.top) <= 10) {
            frizu.style.top = (frizuUp) + 'px';
            console.log('STOP')
        }
    } else if (e.keyCode === p2Fire) {
        const kamehameha2 = document.createElement('div')
        kamehameha2.className = "kamehameha2"
        document.body.appendChild(kamehameha2);
        kamehamehaGPST2 = parseInt(frizu.style.top || 227);
        kamehameha2.style.top = ((kamehamehaGPST2*1.5)+22) + 'px';
        kamehameha2.style.left = 128 + 'px';
        setTimeout(function() {
            const frizu = document.querySelector('.frizu-standing');
            //emre mentinoed getBoundingClientRect()
            const frizuDiv = frizu.getBoundingClientRect();
            const kamehameha2 = document.querySelector('.kamehameha2');
            const kamehameha2Div = kamehameha2.getBoundingClientRect();
            const gotu = document.querySelector(".gotu-standing");
            const gotuDiv = gotu.getBoundingClientRect();
            const kameAdjTop2 = ((kamehameha2Div.top)-22)/1.5+24;
            const kameAdjBot2 = kameAdjTop2+12;
            if (kameAdjBot2 > gotuDiv.top && kameAdjTop2 < gotuDiv.top) {
                console.log('HIT - DEDUCT HP')
                //https://stackoverflow.com/questions/20277052/how-to-make-a-health-bar
                let healthPoints = document.querySelector("#p1health")
                    healthPoints.value -= 5;
                    checkHealthP1();
            } else if (gotuDiv.bottom > kameAdjTop2 && gotuDiv.top < kameAdjTop2) {
                console.log('HIT - DEDUCT HP')
                let healthPoints = document.querySelector("#p1health")
                healthPoints.value -= 5;
                checkHealthP1();
            } else {
                console.log('MISS - LOL GET BETTER')
            }
        }, 500);
        setTimeout(function() {
            kamehameha2.parentNode.removeChild(kamehameha2)
        }, 501);
    }
  }
  
  

  const checkHealthP1 = function() {
    const healthPoints1 = document.querySelector("#p1health");
    const projectiles = document.querySelector('.projectiles');
    if (healthPoints1.value === 0) {
        projectiles.parentNode.removeChild(projectiles)
        return alert('PLAYER 2 WINS')
    } else {
        console.log('KEEP SHOOTING')
    }
}
checkHealthP1();

const checkHealthP2 = function() {
    const healthPoints2 = document.querySelector("#p2health");
    const projectiles = document.querySelector('.projectiles');
    if (healthPoints2.value === 0) {
        projectiles.parentNode.removeChild(projectiles)
        return alert('PLAYER 1 WINS')
    } else {
        console.log('KEEP SHOOTING')
    }
}
checkHealthP2();







// let checkHealthP1 = function() {
//     let healthPoints1 = document.querySelector("#p1health");
//     let kameNum = document.querySelectorAll('.kamehameha');
//     let kameNum2 = document.querySelectorAll('.kamehameha2');
//     console.log(kameNum.length, kameNum2.length);
//     if (healthPoints1.value === 0) {
//         for (let i=0; i<kameNum.length; i++) {
//             kameNum[i].parentNode.removeChild(i)
//         }
//         // for (let k=0; k<kameNum2.length; k++) {
//         //     kameNum2[k].parentNode.removeChild(k)
//         // }
//         return alert('PLAYER 2 WINS')
//     } else {
//         console.log('KEEP SHOOTING')
//     }
// }
// checkHealthP1();

// let checkHealthP2 = function() {
//     let healthPoints2 = document.querySelector("#p2health");
//     let kameNum = document.querySelectorAll('.kamehameha');
//     let kameNum2 = document.querySelectorAll('.kamehameha2');
//     console.log(kameNum.length);
//     if (healthPoints2.value === 0) {
//         // for (let i=0; i<kameNum.length; i++) {
//         //     kameNum[i].parentNode.removeChild(i)
//         // }
//         for (let k=0; k<kameNum2.length; k++) {
//             kameNum2[k].parentNode.removeChild(k)
//         }
//         return alert('PLAYER 1 WINS')
//     } else {
//         console.log('KEEP SHOOTING')
//     }
// }
// checkHealthP2();






// let checkHealthP1 = function () {
//     let p1Health = document.querySelector('#p1health')
//     let p2Health = document.querySelector('#p2health')
//     // if (p1Health.value <= 40) {
//         // p1Health["-webkit-progress-bar"].bind(  ).background = 'red';
//         // p1Health.-webkit-progress-bar.bind(p1Health) = 'red';
//         //}
//     if (p1Health.value === 0) {
//         alert('PLAYER 1 WINS!')
//     } else if (p2Health.value === 0) {
//         alert('PLAYER 2 WINS!')
//     }
// }

// checkHealthP1()





























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
//https://stackoverflow.com/questions/23585320/how-to-move-object-with-keyboard-in-javascript

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
//   const p1Up = 9;
//   const p1Down = 16;
//   const gotu = document.querySelector(".gotu-standing")

//   if (e.keyCode === p1Down) {
//         e.preventDefault();
//         gotuGPS = parseInt(gotu.style.top || 0);
//         gotu.style.top = (gotuGPS + 15) + 'px';
//         gotu.className = "gotu-down";
//         const gotuDown = document.querySelector(".gotu-down")
//         return gotuDown
//   }
//   if (e.keyCode === p1Up) {
//         e.preventDefault();
//         gotuGPS = parseInt(gotu.style.top || 0);
//         gotu.style.top = (gotuGPS - 15) + 'px';
//         gotu.className = "gotu-up";
//   }
// }

// document.onkeyup = function(e) {
//     const p1Up = 9;
//     const p1Down = 16;
//     const gotu = document.querySelector(".gotu-standing")
    
//     if (e.keyCode === p1Down) {
        
//         const gotuDown = document.querySelector(".gotu-down")
//         gotuDown.className = "gotu-standing";

//     }
//     if (e.keyCode === p1Up) {

//         const gotuUp = document.querySelector(".gotu-up")
//         gotuUp.className = "gotu-standing";

//     }
//   }


//attempt 5

// document.onkeydown = function(e) {
//   const p1Up = 9;
//   const p1Down = 16;
//   const gotu = document.querySelector(".gotu-standing")
//   const gotuGPS = document.querySelector(".gotu-down")
//   const gotuUp = document.querySelector("gotu-up")

//   if (e.keyCode === p1Down) {
//         e.preventDefault();
//         gotuGPS = parseInt(gotu.style.top || 0);
//         gotu.style.top = (gotuGPS + 15) + 'px';
//         gotu.classList.toggle("gotu-down");
//         gotu.classList.toggle("gotu-standing");
//   }
//   if (e.keyCode === p1Up) {
//         e.preventDefault();
//         gotuUp = parseInt(gotu.style.top || 0);
//         gotu.style.top = (gotuGPS - 15) + 'px';
//         gotu.classList.toggle("gotu-up");
//         gotu.classList.toggle("gotu-standing");
//   }
// }

// document.onkeyup = function(e) {
//     const p1Up = 9;
//     const p1Down = 16;
//     const gotuUp = document.querySelector(".gotu-up")
//     const gotuGPS = document.querySelector(".gotu-down")
//     const gotu = document.querySelector(".gotu-standing")
  
//     if (e.keyCode === p1Down) {
//           e.preventDefault();
//           gotuGPS.classList.toggle("gotu-standing");
//           return gotu
//     }
//     if (e.keyCode === p1Up) {
//           e.preventDefault();
//           gotuUp.classList.toggle("gotu-standing");
//           return gotu
//     }
//   }


//attempt 6


// document.onkeydown = function(e) {
//   const p1Up = 9;
//   const p1Down = 16;
//   const gotu = document.querySelector(".gotu-standing")

//   if (e.keyCode === p1Down) {
//         e.preventDefault();
//         gotuGPS = parseInt(gotu.style.top || 0);
//         gotu.style.top = (gotuGPS + 15) + 'px';
//         gotu.classList.toggle("gotu-down");
//         const gotuGPS = document.querySelector(".gotu-down");
//         gotuGPS.classList.toggle("gotu-standing");
//         return gotu;
//   }
//   if (e.keyCode === p1Up) {
//         e.preventDefault();
//         gotuGPS = parseInt(gotu.style.top || 0);
//         gotu.style.top = (gotuGPS - 15) + 'px';
//         gotu.classList.toggle("gotu-up");
//         const gotuUp = document.querySelector(".gotu-up");
//         gotuUp.classList.toggle("gotu-standing");
//         return gotu;
//   }
// }

