window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

var currentLink = null;

function showAllProducts() {
    resetBold();
    hideAllProducts();
    document.querySelector('.features-products-d').classList.add('show');
    document.querySelector('.all-products-d').classList.add('show');
    currentLink = 'all-products-link';
    toggleBold(currentLink);
}

function showPhotoPrinting() {
    resetBold();
    hideAllProducts();
    document.querySelector('.photo-products-d').classList.add('show');
    currentLink = 'photo-printing-link';
    toggleBold(currentLink);
}

function showLabels() {
    resetBold();
    hideAllProducts();
    document.querySelector('.labels-products-d').classList.add('show');
    currentLink = 'labels-packaging-link';
    toggleBold(currentLink);
}

function showBusiness() {
    resetBold();
    hideAllProducts();
    document.querySelector('.business-products-d').classList.add('show');
    currentLink = 'business-link';
    toggleBold(currentLink);
}

function hideAllProducts() {
    var productSections = document.querySelectorAll('.features-products-d, .all-products-d, .photo-products-d, .labels-products-d, .business-products-d');
    productSections.forEach(function(section) {
        section.classList.remove('show');
    });
}

function toggleBold(id) {
    var link = document.getElementById(id);
    var currentFontWeight = window.getComputedStyle(link).getPropertyValue('font-weight');
    link.style.fontWeight = (currentFontWeight === 'bold') ? 'normal' : 'bold';
}

function resetBold() {
    if (currentLink !== null) {
        var link = document.getElementById(currentLink);
        link.style.fontWeight = 'normal';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    showAllProducts(); // Call the function when the DOM content is loaded
});