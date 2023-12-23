import { evaluateInput } from './regex-evaluation.js';

document.getElementById('form').addEventListener('submit', signUp);
var enableParallax = true;



function signUp(event) {
    event.preventDefault();

    // Function for regex evaluation
    evaluateInput();
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        document.getElementById('btn-submit').click();
        document.getElementById('btn-submit').classList.toggle('btn-submit-active');
    }
});



/*   PARALLAX / VECTOR MANIPULATION   */

function moveBackground(e) {
    const body = document.body;
    const parallaxElements = document.querySelectorAll(".para");

    const centerX = body.offsetWidth / 2;
    const centerY = body.offsetHeight / 2;
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    // Calculate parallax movement for the vectors / png's
    parallaxElements.forEach((element) => {
        const factorX = element.getAttribute("data-speed-x");
        const factorY = element.getAttribute("data-speed-y");

        const translateX = (mouseX - centerX) * factorX;
        const translateY = (mouseY - centerY) * factorY;

        // Apply translation and scaling
        element.style.transform = `translate(${translateX}px, ${translateY}px)`;
    });
}

(function () {
    const body = document.body;

    // Turns off parallax for devices with a certain width
    if (window.matchMedia("(max-width: 600px)").matches)
        enableParallax = false;
    if (enableParallax)
        document.addEventListener("mousemove", moveBackground);

})();

export function transitionPage() {
    enableParallax = false;
    document.removeEventListener("mousemove", moveBackground);
    document.getElementById('form-container').classList.toggle('roll-out-form');

    // Adds class roll-out-para-[i] to each NightVector element
    const toggleNightVectors = ['para-1', 'para-2', 'para-3', 'para-4', 'para-5', 'para-7', 'para-8'];
    let i = 1;
    for (const elementId of toggleNightVectors) {
        document.getElementById(elementId).classList.toggle('roll-out-para-' + i);
        i++;
    }
    document.documentElement.classList.toggle('sunrise-background-color');

    setTimeout(function () {
        beginSunset();
    }, 2000);
}

function beginSunset() {

    const toggleSunriseVectors = ['para-9', 'para-10', 'para-11', 'para-12', 'para-13', 'para-14'];
    for (const elementId of toggleSunriseVectors) {
        document.getElementById(elementId).classList.toggle('para-sunrise');
        document.getElementById(elementId).classList.toggle('para-sunrise-settings');
    }

    document.getElementById('para-9').classList.toggle('sunrise-roll-in-para-9');
    document.getElementById('para-10').classList.toggle('sunrise-roll-in-para-10');
    document.getElementById('para-11').classList.toggle('sunrise-roll-in-para-10');
    document.getElementById('para-14').classList.toggle('sunrise-roll-in-para-14');
    setTimeout(function () {
        document.getElementById('para-9').classList.toggle('sunrise-9-end');
        document.getElementById('para-10').classList.toggle('sunrise-10-12-13-end');
        document.getElementById('para-11').classList.toggle('sunrise-10-12-13-end');
    }, 2000);
    document.getElementById('para-12').classList.toggle('sunrise-roll-in-para-12');
    document.getElementById('para-13').classList.toggle('sunrise-roll-in-para-13');
    setTimeout(function () {
        document.getElementById('para-12').classList.toggle('sunrise-10-12-13-end');
        document.getElementById('para-13').classList.toggle('sunrise-10-12-13-end');
    }, 1500);
    setTimeout(function () {
        document.getElementById('landing-page-container').classList.toggle('no-display');
        document.getElementById('landing-page-container').classList.toggle('landing-page-transition');
    }, 2300); 

    // Name Message
    setTimeout(function () {
        document.getElementById('greet-message-1').classList.toggle('no-display-text');
        document.getElementById('greet-message-1').classList.toggle('transition-user-info');
        document.getElementById('h1-info-name').classList.toggle('no-display');
        document.getElementById('h1-info-name').classList.toggle('transition-user-info');
        document.getElementById('h1-info-name').innerHTML += document.getElementById('input-name').value + " " + document.getElementById('input-last-name').value;
    }, 3400);
    setTimeout(function () {
        document.getElementById('greet-message-2').classList.toggle('no-display-text');
        document.getElementById('greet-message-2').classList.toggle('transition-user-info');
        document.getElementById('h1-info-password').classList.toggle('no-display');
        document.getElementById('h1-info-password').classList.toggle('transition-user-info');
        document.getElementById('h1-info-password').innerHTML += document.getElementById('input-password').value;
    }, 3600);
    setTimeout(function () {
        document.getElementById('greet-message-3').classList.toggle('no-display-text');
        document.getElementById('greet-message-3').classList.toggle('transition-user-info');
        document.getElementById('h1-info-email').classList.toggle('no-display');
        document.getElementById('h1-info-email').classList.toggle('transition-user-info');
        document.getElementById('h1-info-email').innerHTML += document.getElementById('input-email').value;
    }, 3800);
    setTimeout(function () {
        document.getElementById('greet-message-4').classList.toggle('no-display-text');
        document.getElementById('greet-message-4').classList.toggle('transition-user-info');
        document.getElementById('h1-info-phone').classList.toggle('no-display');
        document.getElementById('h1-info-phone').classList.toggle('transition-user-info');
        document.getElementById('h1-info-phone').innerHTML += document.getElementById('input-phone-num').value;
    }, 4000);
    setTimeout(function () {
        document.getElementById('greet-message-5').classList.toggle('no-display-text');
        document.getElementById('greet-message-5').classList.toggle('transition-user-info');
        document.getElementById('h1-info-webpage').classList.toggle('no-display');
        document.getElementById('h1-info-webpage').classList.toggle('transition-user-info');
        document.getElementById('h1-info-webpage').innerHTML += document.getElementById('input-site-url').value;
    }, 4200);







    
    // Toggle other vector elements off
    document.getElementById('form-container').classList.toggle('para-night-sky');
    const toggleNightVectors = ['para-1', 'para-2', 'para-3', 'para-4', 'para-5', 'para-7', 'para-8'];

    for (const elementId of toggleNightVectors) {
        document.getElementById(elementId).classList.toggle('para-night-sky');
        document.getElementById(elementId).classList.toggle('para');
    }

    setTimeout(function () {
        enableParallax = true;
        document.addEventListener("mousemove", moveBackground);
    }, 1550);
}

/*   \PARALLAX / VECTOR MANIPULATION   */