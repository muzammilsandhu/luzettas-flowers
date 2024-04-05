document.addEventListener("DOMContentLoaded", function() {
    // 1
    const progressBar = document.getElementById("progress-bar");
    const flowersContent = document.querySelectorAll(".flowers-content");

    flowersContent.forEach(function(content, index) {
        content.addEventListener("mouseenter", function() {
            progressBar.style.width = (index + 1) * 33.33 + "%";
        });

        content.addEventListener("mouseleave", function() {
            progressBar.style.width = (index) * 33.33 + "%";
        });
    });

    //2 
    const arrowDownButtons = document.querySelectorAll(".arrow-down");
    const modalContainer = document.getElementById("modal-container-a");

    arrowDownButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            modalContainer.classList.toggle("d-none");
        });
    });

    //3

    const prevArrow = document.getElementById("prev-arrow");
    const nextArrow = document.getElementById("next-arrow");
    const slider = document.getElementById("reviews-slider");
    const reviewContainers = document.querySelectorAll(".reviews-container");

    let currentPosition = 0;
    const slideWidth = reviewContainers[0].offsetWidth;

    function updateVisibility() {
        const screenWidth = window.innerWidth;
        if (screenWidth <= 1024 && screenWidth > 768) {
            reviewContainers.forEach(function(container, index) {
                if (index < 2) {
                    container.style.display = "block";
                } else {
                    container.style.display = "none";
                }
            });
        } else if (screenWidth <= 768) {
            reviewContainers.forEach(function(container, index) {
                if (index < 1) {
                    container.style.display = "block";
                } else {
                    container.style.display = "none";
                }
            });
        } else {
            reviewContainers.forEach(function(container) {
                container.style.display = "block";
            });
        }
    }

    function moveSlides(direction) {
        if (direction === "next") {
            currentPosition -= slideWidth;
            if (currentPosition < -slideWidth * (reviewContainers.length - 2)) {
                currentPosition = 0;
            }
        } else {
            currentPosition += slideWidth;
            if (currentPosition > 0) {
                currentPosition = -slideWidth * (reviewContainers.length - 2);
            }
        }
        slider.style.transform = `translateX(${currentPosition}px)`;
    }

    window.addEventListener("resize", function() {
        updateVisibility();
    });

    prevArrow.addEventListener("click", function() {
        moveSlides("prev");
    });

    nextArrow.addEventListener("click", function() {
        moveSlides("next");
    });

    updateVisibility();
});
