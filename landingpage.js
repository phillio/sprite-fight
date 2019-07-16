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


