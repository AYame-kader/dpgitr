document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector(".liste-container");
    button.addEventListener("click", () => {
        button.style.transform = "scale(1.2)";
        setTimeout(() => {
            button.style.transform = "scale(1)";
        }, 300);
    });
});