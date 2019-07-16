/* eslint-disable */

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
        
        
        gotu.classList.add('gotu-down');
        setInterval(()=> {gotu.classList.remove('gotu-down')}, 1000)
        if (parseInt(gotu.style.top) <= 240) {
            gotuDown = parseInt(gotu.style.top);
            gotu.style.top = (gotuDown + 15) + 'px';
            
            
        }
    } else if (e.keyCode === p1Up) {
        e.preventDefault();
        gotu.classList.toggle('gotu-up');
        gotu.classList.remove('gotu-down');
        // gotu.classList.remove('gotu-standing')
        gotuUp = parseInt(gotu.style.top || 250);
        gotu.style.top = (gotuUp - 15) + 'px';
          if (parseInt(gotu.style.top) <= 10) {
            gotu.style.top = (gotuUp) + 'px';
        }
        
    } else if (e.keyCode === p1Fire) {
        const kamehameha = document.createElement('div')
        kamehameha.className = "kamehameha"
        document.body.appendChild(kamehameha);
        kamehamehaGPST = parseInt(gotu.style.top || 250);
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
                //https://stackoverflow.com/questions/20277052/how-to-make-a-health-bar
                let healthPoints2 = document.querySelector("#p2health")
                healthPoints2.value -= 5;
                checkHealthP2();
            } else if (frizuDiv.bottom > kameAdjTop && frizuDiv.top < kameAdjTop) {
                let healthPoints2 = document.querySelector("#p2health")
                healthPoints2.value -= 5;
                checkHealthP2();
            } else {
            }
                
        }, 500);
        setTimeout(function() {
            kamehameha.parentNode.removeChild(kamehameha)
        }, 501);
    }  else if (e.keyCode === p2Down) {
        e.preventDefault();
        if (parseInt(frizu.style.top) <= 240) {
            frizuDown = parseInt(frizu.style.top);
            frizu.style.top = (frizuDown + 15) + 'px';
        }
    } else if (e.keyCode === p2Up) {
        e.preventDefault();
        frizuUp = parseInt(frizu.style.top || 250);
        frizu.style.top = (frizuUp - 15) + 'px';
          if (parseInt(frizu.style.top) <= 10) {
            frizu.style.top = (frizuUp) + 'px';
        }
    } else if (e.keyCode === p2Fire) {
        const kamehameha2 = document.createElement('div')
        kamehameha2.className = "kamehameha2"
        document.body.appendChild(kamehameha2);
        kamehamehaGPST2 = parseInt(frizu.style.top || 250);
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
                //https://stackoverflow.com/questions/20277052/how-to-make-a-health-bar
                let healthPoints = document.querySelector("#p1health")
                    healthPoints.value -= 5;
                    checkHealthP1();
            } else if (gotuDiv.bottom > kameAdjTop2 && gotuDiv.top < kameAdjTop2) {
                let healthPoints = document.querySelector("#p1health")
                healthPoints.value -= 5;
                checkHealthP1();
            } else {
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
    }
}
checkHealthP2();


