setTimeout(() => {
    makeBoard();
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
            gotuDown = parseInt(gotu.style.top || 180);
            gotu.style.top = (gotuDown + 15) + 'px';
            if (parseInt(gotu.style.top) <= 210) {
                gotu.style.top = (gotuDown) + 'px';
            }
        } else if (e.keyCode === p1Up) {
            e.preventDefault();
            gotuUp = parseInt(gotu.style.top || 180);
            gotu.style.top = (gotuUp - 15) + 'px';
              if (parseInt(gotu.style.top) <= 10) {
                gotu.style.top = (gotuUp) + 'px';
            }
            
        } else if (e.keyCode === p1Fire) {
            const kamehameha = document.createElement('div')
            kamehameha.className = "kamehameha"
            document.body.appendChild(kamehameha);
            kamehamehaGPST = parseInt(gotu.style.top || 180);
            kamehameha.style.top = ((kamehamehaGPST*1.5)+22) + 'px';
            kamehameha.style.left = 128 + 'px';
            setTimeout(function() {
                const kamehameha = document.querySelector('.kamehameha');
                const kamehamehaDiv = kamehameha.getBoundingClientRect();
                const frizu = document.querySelector(".frizu-standing");
                const frizuDiv = frizu.getBoundingClientRect();
                const kameAdjTop = ((kamehamehaDiv.top-22))/1.5+24;
                const kameAdjBot = kameAdjTop + 12;
                if (kameAdjBot > frizuDiv.top && kameAdjTop < frizuDiv.top) {
                    let healthPoints2 = document.querySelector("#p2health")
                    healthPoints2.value -= 5;
                    checkHealthP2();
                } else if (frizuDiv.bottom > kameAdjTop && frizuDiv.top < kameAdjTop) {
                    let healthPoints2 = document.querySelector("#p2health")
                    healthPoints2.value -= 5;
                    checkHealthP2();
                } 
            }, 500);
            setTimeout(function() {
                kamehameha.parentNode.removeChild(kamehameha)
            }, 501);
        }  else if (e.keyCode === p2Down) {
            e.preventDefault();
            frizuDown = parseInt(frizu.style.top || 180);
            frizu.style.top = (frizuDown + 15) + 'px';
            if (parseInt(frizu.style.top) <= 210) {
                frizu.style.top = (frizuDown) + 'px';
            }
        } else if (e.keyCode === p2Up) {
            e.preventDefault();
            frizuUp = parseInt(frizu.style.top || 180);
            frizu.style.top = (frizuUp - 15) + 'px';
              if (parseInt(frizu.style.top) <= 10) {
                frizu.style.top = (frizuUp) + 'px';
            }
        } else if (e.keyCode === p2Fire) {
            const kamehameha2 = document.createElement('div')
            kamehameha2.className = "kamehameha2"
            document.body.appendChild(kamehameha2);
            kamehamehaGPST2 = parseInt(frizu.style.top || 180);
            kamehameha2.style.top = ((kamehamehaGPST2*1.5)+22) + 'px';
            kamehameha2.style.left = 128 + 'px';
            setTimeout(function() {
                const kamehameha2 = document.querySelector('.kamehameha2');
                const kamehameha2Div = kamehameha2.getBoundingClientRect();
                const gotu = document.querySelector(".gotu-standing");
                const gotuDiv = gotu.getBoundingClientRect();
                const kameAdjTop2 = ((kamehameha2Div.top)-22)/1.5+24;
                const kameAdjBot2 = kameAdjTop2+12;
                if (kameAdjBot2 > gotuDiv.top && kameAdjTop2 < gotuDiv.top) {
                    let healthPoints = document.querySelector("#p1health")
                        healthPoints.value -= 5;
                        checkHealthP1();
                } else if (gotuDiv.bottom > kameAdjTop2 && gotuDiv.top < kameAdjTop2) {
                    let healthPoints = document.querySelector("#p1health")
                    healthPoints.value -= 5;
                    checkHealthP1();
                }
            }, 500);
            setTimeout(function() {
                kamehameha2.parentNode.removeChild(kamehameha2)
            }, 501);
        }
      }
}, 3000);

const makeBoard = function() {
    makeSprites();
    makeHealthBars();
}

const makeSprites = function() {
    const gotuParent = document.querySelector('.gotu');
    const gotuCreate = document.createElement('div');
    const frizuParent = document.querySelector('.frizu');
    const frizuCreate = document.createElement('div');
    gotuCreate.className = "gotu-standing";
    frizuCreate.className = "frizu-standing";
    gotuParent.appendChild(gotuCreate);
    frizuParent.appendChild(frizuCreate);
}

const makeHealthBars = function() {
    const healthBarParent = document.querySelector('.health-bar');
    const gotuHealth = document.createElement('progress');
    const frizuHealth = document.createElement('progress');
    gotuHealth.id = "p1health";
    gotuHealth.value = "100";
    gotuHealth.max = "100";
    frizuHealth.id = "p2health";
    frizuHealth.value = "100";
    frizuHealth.max = "100";
    healthBarParent.appendChild(gotuHealth);
    healthBarParent.appendChild(frizuHealth);
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

const checkHealthP2 = function() {
    const healthPoints2 = document.querySelector("#p2health");
    const projectiles = document.querySelector('.projectiles');
    if (healthPoints2.value === 0) {
        projectiles.parentNode.removeChild(projectiles)
        return alert('PLAYER 1 WINS')
    } else {
    }
}

const makeTutorial = function() {
    const tutorialModal = document.querySelector(".tutorial-modal");
    const tutorialButton = document.querySelector("#tutorial-button");
    const closeButton = document.querySelector(".close-button");
    
    function toggleTutorial() {
        tutorialModal.classList.toggle("show-modal");
    }
    
    function clickTutorial(event) {
        if (event.target === modal) {
            toggleTutorial();
        }
    }
    
    tutorialButton.addEventListener("click", toggleTutorial);
    closeButton.addEventListener("click", toggleTutorial);
    window.addEventListener("click", clickTutorial);
}
makeTutorial();
