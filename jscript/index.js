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

document.addEventListener("DOMContentLoaded", function() {
    // Function to toggle the popup
    function togglePopup() {
        var popup = document.getElementById("popup-id");
        if (popup.classList.contains("show")) {
            popup.classList.remove("show"); // If popup is already open, close it
            document.body.style.overflow = ""; // Re-enable scrolling of background content
        } else {
            popup.classList.add("show"); // If popup is closed, open it
            document.body.style.overflow = "hidden"; // Prevent scrolling of background content
        }
    }

    // Function to close the popup
    function closePopup() {
        var popup = document.getElementById("popup-id");
        popup.classList.remove("show"); // Close the popup
        document.body.style.overflow = ""; // Re-enable scrolling of background content
    }

    // Attach click event listener to the ".contacts" element
    var contactsButtons = document.querySelectorAll(".contacts");
    contactsButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            togglePopup(); // Toggle the popup when the button is clicked
        });
    });

    // Attach click event listener to the ".popupview" element to close the popup
    var popupView = document.querySelector(".popupview");
    popupView.addEventListener("click", function(event) {
        if (event.target.classList.contains("popupview")) {
            event.preventDefault(); // Prevent default behavior if the click is on .popupview
        }
    });

    // Close the popup when the "Escape" key is pressed
    document.addEventListener("keydown", function(event) {
        if (event.key === "Escape") {
            closePopup();
        }
    });

    // Close the popup when clicking outside of it
    document.addEventListener("click", function(event) {
        var popup = document.getElementById("popup-id");
        if (!popup.contains(event.target) && !event.target.classList.contains("contacts")) {
            closePopup();
        }
    });

    // Prevent scrolling of background content when the mouse is over the popup
    var popupContainer = document.getElementById("popup-id");
    popupContainer.addEventListener("mouseenter", function() {
        document.body.style.overflow = "hidden"; // Prevent scrolling of background content
    });

    // Re-enable scrolling of background content when the mouse leaves the popup
    popupContainer.addEventListener("mouseleave", function() {
        document.body.style.overflow = ""; // Re-enable scrolling of background content
    });
});