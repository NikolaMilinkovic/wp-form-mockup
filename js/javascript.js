import { evaluateInput } from './regex-evaluation.js';

document.getElementById('form').addEventListener('submit', signUp);
var enableParallax = true;



function signUp(event) {
    event.preventDefault();
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
    const toggleNightVectors = ['para-1', 'para-2', 'para-3', 'para-4', 'para-5', 'para-6', 'para-7', 'para-8'];
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

    const toggleSunriseVectors = ['para-9', 'para-10', 'para-11', 'para-12', 'para-13'];
    for (const elementId of toggleSunriseVectors) {
        document.getElementById(elementId).classList.toggle('para-sunrise');
        document.getElementById(elementId).classList.toggle('para-sunrise-settings');
    }

    document.getElementById('para-9').classList.toggle('sunrise-roll-in-para-9');
    document.getElementById('para-10').classList.toggle('sunrise-roll-in-para-10');
    document.getElementById('para-11').classList.toggle('sunrise-roll-in-para-10');
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

    
    // Toggle other vector elements off
    document.getElementById('form-container').classList.toggle('para-night-sky');
    const toggleNightVectors = ['para-1', 'para-2', 'para-3', 'para-4', 'para-5', 'para-6', 'para-7', 'para-8'];

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