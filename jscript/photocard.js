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

document.addEventListener("DOMContentLoaded", function() {
    const mainImage = document.getElementById("main-image");
    const thumbnails = document.querySelectorAll(".thumbnail");

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener("click", function() {
            const imageUrl = thumbnail.getAttribute("src");
            mainImage.setAttribute("src", imageUrl);
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelector(".slides");
    let isDown = false;
    let startX;
    let scrollLeft;

    slides.addEventListener("mousedown", (e) => {
        isDown = true;
        startX = e.pageX - slides.offsetLeft;
        scrollLeft = slides.scrollLeft;
    });

    slides.addEventListener("mouseleave", () => {
        isDown = false;
    });

    slides.addEventListener("mouseup", () => {
        isDown = false;
    });

    slides.addEventListener("mousemove", (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slides.offsetLeft;
        const walk = (x - startX) * 2; // Adjust scroll speed
        slides.scrollLeft = scrollLeft - walk;
    });

    // Disable default mousewheel scrolling
    slides.addEventListener("wheel", (e) => {
        e.preventDefault();
        slides.scrollLeft += e.deltaY * 2; // Adjust scroll speed
    });
});

// Function to open the popup
function openPopup() {
    var popup = document.getElementById("popupContainer");
    popup.classList.add("show"); // Add 'show' class to apply transition effect
}

// Function to close the popup
function closePopup() {
    var popup = document.getElementById("popupContainer");
    popup.classList.remove("show"); // Remove 'show' class to hide the popup with transition
}

// Attach click event listener to the "Add to cart" button
document.addEventListener("DOMContentLoaded", function() {
    var addToCartButtons = document.querySelectorAll(".cart");
    addToCartButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            openPopup(); // Open the popup when the button is clicked
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Function to open the popup
    function openPopup() {
        var popup = document.getElementById("popupContainer");
        popup.classList.add("show"); // Add 'show' class to apply transition effect
        document.body.style.overflow = "hidden"; // Prevent scrolling of background content
    }

    // Function to close the popup
    function closePopup() {
        var popup = document.getElementById("popupContainer");
        popup.classList.remove("show"); // Remove 'show' class to hide the popup with transition
        document.body.style.overflow = ""; // Re-enable scrolling of background content
    }

    // Attach click event listener to the "Add to cart" button
    var addToCartButtons = document.querySelectorAll(".cart");
    addToCartButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            openPopup(); // Open the popup when the button is clicked
        });
    });

    // Close the popup when the "Escape" key is pressed
    document.addEventListener("keydown", function(event) {
        if (event.key === "Escape") {
            closePopup();
        }
    });

    // Prevent scrolling of background content when the mouse is over the popup
    var popupContainer = document.getElementById("popupContainer");
    popupContainer.addEventListener("mouseenter", function() {
        document.body.style.overflow = "hidden"; // Prevent scrolling of background content
    });

    // Re-enable scrolling of background content when the mouse leaves the popup
    popupContainer.addEventListener("mouseleave", function() {
        document.body.style.overflow = ""; // Re-enable scrolling of background content
    });
});

function closePopup() {
    var popupContainer = document.getElementById("popupContainer");
    popupContainer.classList.remove("show"); // Remove the "show" class to hide the popup
}