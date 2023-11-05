var audio  = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/click.mp3');
var audio2 = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/clickUp.mp3');

document.addEventListener('DOMContentLoaded', function() {
    var strtbtn = document.querySelector('.startbtn');

    strtbtn.addEventListener('mousedown', function() {
        audio2.load();
        audio2.play();
    });

    strtbtn.addEventListener('mouseup', function() {
        audio.load();
        audio.play();
    });
});

function showStartIfAnimationCompleted() {
    var start = document.querySelector('#start');
        if (animationCompleted) {
            start.style.display = "flex";
                start.style.position = "fixed";
                }
            }


            function startThis() {

                document.body.style.overflow = 'visible';
                document.body.scrollTop = 0; // For Safari
                document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera


                var header = document.querySelector('#header');
                            if (header) {
                        header.style.display = "block";
                    }

                var cursor = document.querySelector('.cursor');
                cursor.style.zIndex = '98';

            gsap.to(".start", {
                duration: 0.4,
                delay: 0.3,
                opacity:0,
                onComplete: function () {
                    var startDiv = document.querySelector('.start');
                    var startLogo = document.querySelector('.startlogo');
                    var startBtn = document.querySelector('.startbtn');


                    if (startDiv) {
                        startDiv.parentNode.removeChild(startDiv);
                    }

                    if (startLogo) {
                        startLogo.parentNode.removeChild(startLogo);
                    }

                    if (startBtn) {
                        startBtn.parentNode.removeChild(startBtn);
                    }
                }
            });

            const logo = document.getElementsByClassName('logo');
            gsap.fromTo(logo, { opacity: 0, display: 'none' }, { opacity: 1, display: 'block', duration: 2.5 });
            const menu = document.getElementsByClassName('menu');
            gsap.fromTo(menu, { opacity: 0, display: 'none' }, { opacity: 1, display: 'block', duration: 2.5 });
            const soundtoggle = document.getElementsByClassName('soundtoggle');
            gsap.fromTo(soundtoggle, { opacity: 0, display: 'none' }, { opacity: 1, display: 'block', duration: 2.5 });

            document.addEventListener('DOMContentLoaded', function () {
                var video = document.getElementById('video-background');
                video.playbackRate = 1;
            });

            const videoContainer = document.querySelector('.video-container video');

            function fadeInElement(element) {
                gsap.to(element, {
                    duration: 4,
                    opacity: 1,
                    onComplete: function() {
                    }
                });
            }

                fadeInElement(videoContainer);

                function fadeInElement(element) {
                  gsap.to(element, {
                    duration: 2,
                    opacity: 1,
                    onComplete: function() {
                      fadeOutElement(element);
                    }
                  });
                }

                fadeInElement(videoContainer);
            backgroundMusic.play();
        }
