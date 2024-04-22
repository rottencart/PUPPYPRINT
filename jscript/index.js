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

// JavaScript to synchronize the animation of both companies
window.onload = function () {
    var companyOne = document.querySelector('.company-one');
    var companyTwo = document.querySelector('.company-two');
    var fifthBrands = document.querySelector('.fifth-brands');

    // Get the width of the fifth-brands container
    var fifthBrandsWidth = fifthBrands.offsetWidth;

    // Set the initial width of the company containers
    companyOne.style.width = fifthBrandsWidth + 'px';
    companyTwo.style.width = fifthBrandsWidth + 'px';

    // Adjust the width of the companies if the window is resized
    window.onresize = function () {
        fifthBrandsWidth = fifthBrands.offsetWidth;
        companyOne.style.width = fifthBrandsWidth + 'px';
        companyTwo.style.width = fifthBrandsWidth + 'px';
    };
};



