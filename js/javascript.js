document.getElementById('form').addEventListener('submit', signUp);
var enableParallax = true;

function signUp(event) {
    event.preventDefault();
    transitionPage();
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        document.getElementById('btn-submit').click();
        document.getElementById('btn-submit').classList.toggle('btn-submit-active');
    }
});

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
        element.style.transform = `translate(${translateX}px, ${translateY}px) scale(1.05)`;
    });
}

(function () {
    const body = document.body;

    // Turns off parallax for devices with a certain width
    if (window.matchMedia("(max-width: 600px)").matches) {
        enableParallax = false;
    }

    if (enableParallax) {
        document.addEventListener("mousemove", moveBackground);
    }
})();

function transitionPage() {
    enableParallax = false;
    document.removeEventListener("mousemove", moveBackground);
    document.getElementById('form-container').classList.toggle('roll-out-form');
    document.getElementById('para-1').classList.toggle('roll-out-para-1');
    document.getElementById('para-2').classList.toggle('roll-out-para-2');
    document.getElementById('para-3').classList.toggle('roll-out-para-3');
    document.getElementById('para-4').classList.toggle('roll-out-para-4');
    document.getElementById('para-5').classList.toggle('roll-out-para-5');
    document.getElementById('para-6').classList.toggle('roll-out-para-6');
    document.getElementById('para-7').classList.toggle('roll-out-para-7');
    document.getElementById('para-8').classList.toggle('roll-out-para-8');
    document.documentElement.classList.toggle('sunrise-background-color');

    setTimeout(function () {
        beginSunset();
    }, 2000);
}

function beginSunset() {
    document.getElementById('para-9').classList.toggle('para-sunrise');
    document.getElementById('para-9').classList.toggle('sunrise-roll-in-para-9');

    document.getElementById('para-10').classList.toggle('para-sunrise');
    document.getElementById('para-10').classList.toggle('sunrise-roll-in-para-10');

    document.getElementById('para-11').classList.toggle('para-sunrise');
    document.getElementById('para-11').classList.toggle('sunrise-roll-in-para-10');

    document.getElementById('para-12').classList.toggle('para-sunrise');
    document.getElementById('para-12').classList.toggle('sunrise-roll-in-para-12');

    document.getElementById('para-13').classList.toggle('para-sunrise');
    document.getElementById('para-13').classList.toggle('sunrise-roll-in-para-13');

    // Toggle other vector elements off
    document.getElementById('form-container').classList.toggle('para-night-sky');
    document.getElementById('para-1').classList.toggle('para-night-sky');
    document.getElementById('para-2').classList.toggle('para-night-sky');
    document.getElementById('para-3').classList.toggle('para-night-sky');
    document.getElementById('para-4').classList.toggle('para-night-sky');
    document.getElementById('para-5').classList.toggle('para-night-sky');
    document.getElementById('para-6').classList.toggle('para-night-sky');
    document.getElementById('para-7').classList.toggle('para-night-sky');
    document.getElementById('para-8').classList.toggle('para-night-sky');

    setTimeout(function () {
        enableParallax = true;
        document.addEventListener("mousemove", moveBackground);
    }, 4000);
}