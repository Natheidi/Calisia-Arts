lightGallery(document.querySelector('.lightgallery'));

const hamburger = document.querySelector('.hamburger');
hamburger.addEventListener("click", toggleMenu);

function toggleMenu() {
    const menuList = document.querySelector('.hamburger-list-div');
    if (menuList.classList.contains("visible")) {
        menuList.classList.remove("visible");
        // closeIcon.style.display = "none";
        // menuIcon.style.display = "block";
    } else {
        menuList.classList.add("visible");
        // closeIcon.style.display = "block";
        // menuIcon.style.display = "none";
    }
}
