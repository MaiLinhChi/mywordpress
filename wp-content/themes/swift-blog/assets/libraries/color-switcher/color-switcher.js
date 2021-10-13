;(function (window, document, undefined) {
    'use strict';
    if (!('localStorage' in window)) return;
    var nightMode = localStorage.getItem('gmtNightMode');
    if (nightMode) {
        document.documentElement.className += ' night-mode';
    }
})(window, document);


;(function (window, document, undefined) {

    'use strict';

    // Feature test
    if (!('localStorage' in window)) return;

    // Get the navigation menu
    var nav = document.querySelector('.theme-mode');
    if (!nav) return;

    // Insert the night mode toggle
    nav.innerHTML += '<div id="night-mode"><a role="button" href="#"><span class="twp-tooltip"></span><i class="fa fa-adjust"></i></a></div>';

    // Get our newly insert toggle
    var nightMode = document.querySelector('#night-mode');
    if (!nightMode) return;

    // When clicked, toggle night mode on or off
    nightMode.addEventListener('click', function (event) {
        event.preventDefault();
        document.documentElement.classList.toggle('night-mode');
        if ( document.documentElement.classList.contains('night-mode') ) {
            localStorage.setItem('gmtNightMode', true);
            return;
        }
        localStorage.removeItem('gmtNightMode');
    }, false);

})(window, document);