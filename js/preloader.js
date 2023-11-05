$(document).ready(function(){
    setTimeout(function(){
        var counter = document.getElementById("counter");
        counter.style.display = "flex";
        startLoader();
    }, 2000);
});

function startLoader() {
    let counterElement = document.querySelector(".counter");
    let currentValue = 0;

    function updateCounter() {

        const bar1 = document.getElementById('bar1');
        const bar2 = document.getElementById('bar2');
        const bar3 = document.getElementById('bar3');
        const bar4 = document.getElementById('bar4');
        const bar5 = document.getElementById('bar5');
        const bar6 = document.getElementById('bar6');

        if (currentValue >= 16.6667) {
            bar6.style.backgroundColor = "#bcebeb";
        }
        if (currentValue >= 33.3334) {
            bar5.style.backgroundColor = "#8ad7d7";
        }
        if (currentValue >= 50.0001) {
            bar4.style.backgroundColor = "#4bb5b5";
        }
        if (currentValue >= 66.6668) {
            bar3.style.backgroundColor = "#239494";
        }
        if (currentValue >= 83.3335) {
            bar2.style.backgroundColor = "#0e7878";
        }
        if (currentValue >= 95) {
            bar1.style.backgroundColor = "#066868";
        }


        if(currentValue === 100) {
            return;
        }

        currentValue += Math.floor(Math.random()*15) + 12;

        if (currentValue > 100) {
            currentValue = 100;
        }

        counterElement.textContent = currentValue;

        let delay = Math.floor(Math.random()*200) + 50;
        setTimeout(updateCounter, delay);
    }

    updateCounter();
}

var animationCompleted = false;

gsap.to(".counter", {
    duration: 0.25,
    delay: 3.5,
    opacity: 0,
    onComplete: function () {
        var counterElement = document.querySelector('.counter');
        var overlayElement = document.querySelector('.overlay');
        setTimeout(function() {
            animationCompleted = true;
        showStartIfAnimationCompleted();
            counterElement.parentNode.removeChild(counterElement);
            overlayElement.parentNode.removeChild(overlayElement);
        }, 1450)
    }
});

gsap.to(".bar", 1.5, {
    delay: 3.5,
    width: 0,
    stagger: {
        amount: 0.5,
    },
    ease: "power4.inOut",
});
