window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

document.querySelectorAll('.photocards-container').forEach(function(container) {
    let isDown = false;
    let startX;
    let scrollLeft;

    container.addEventListener('mousedown', function(event) {
        isDown = true;
        startX = event.pageX - container.offsetLeft;
        scrollLeft = container.scrollLeft;
    });

    container.addEventListener('mouseleave', function() {
        isDown = false;
    });

    container.addEventListener('mouseup', function() {
        isDown = false;
    });

    container.addEventListener('mousemove', function(event) {
        if (!isDown) return;
        event.preventDefault();
        const x = event.pageX - container.offsetLeft;
        const walk = (x - startX) * 2; // Adjust scroll speed
        container.scrollLeft = scrollLeft - walk;
    });

    container.addEventListener('wheel', function(event) {
        event.preventDefault();
        container.scrollLeft += event.deltaY;
    });
});


