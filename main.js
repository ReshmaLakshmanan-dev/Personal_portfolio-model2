document.addEventListener("DOMContentLoaded", () => {
    const openbutton = document.querySelector("#menu-open-button");
    const closebutton = document.querySelector("#menu-close-button");

    openbutton.addEventListener("click", () => {
        document.body.classList.add("show-mobile-menu");
    });

    closebutton.addEventListener("click", () => {
        document.body.classList.remove("show-mobile-menu");
        console.log("Menu closed")
    });
});