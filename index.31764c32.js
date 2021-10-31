const body = document.querySelector("body");
const btnHamburger = document.querySelector("#btnHamburger");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const fadeElements = document.querySelectorAll(".has-fade");
btnHamburger.addEventListener("click", function() {
    if (header.classList.contains("open")) {
        // Close hamburger menu
        body.classList.remove("no-scroll");
        header.classList.remove("open");
        fadeElements.forEach(function(element) {
            element.classList.add("fade-out");
            element.classList.remove("fade-in");
        });
    } else {
        // Open hamburger menu
        body.classList.add("no-scroll");
        header.classList.add("open");
        fadeElements.forEach(function(element) {
            element.classList.remove("fade-out");
            element.classList.add("fade-in");
        });
    }
});

//# sourceMappingURL=index.31764c32.js.map
