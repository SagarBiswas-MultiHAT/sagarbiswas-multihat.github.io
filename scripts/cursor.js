(function () {
    var prefersReducedMotion = false;
    try {
        prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    } catch (e) {
        prefersReducedMotion = false;
    }

    if (prefersReducedMotion) {
        document.body.style.cursor = 'auto';
        return;
    }

    var isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouch) {
        document.body.style.cursor = 'auto';
        return;
    }

    var ring = document.getElementById('cursor');
    var dot = document.getElementById('cursor-dot');

    if (!ring) {
        ring = document.createElement('div');
        ring.id = 'cursor';
        ring.setAttribute('aria-hidden', 'true');
        document.body.appendChild(ring);
    }

    if (!dot) {
        dot = document.createElement('div');
        dot.id = 'cursor-dot';
        dot.setAttribute('aria-hidden', 'true');
        document.body.appendChild(dot);
    }

    var mx = 0;
    var my = 0;
    var rx = 0;
    var ry = 0;

    document.addEventListener('mousemove', function (e) {
        mx = e.clientX;
        my = e.clientY;
    });

    (function loop() {
        rx += (mx - rx) * 0.15;
        ry += (my - ry) * 0.15;
        ring.style.left = rx + 'px';
        ring.style.top = ry + 'px';
        dot.style.left = mx + 'px';
        dot.style.top = my + 'px';
        requestAnimationFrame(loop);
    })();
})();
