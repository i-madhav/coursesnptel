const menu = document.querySelector(".menu svg");
menu.addEventListener("click", () => {
    const root = document.querySelector(".root");
    console.log(root);
    root.classList.toggle("display")
})

const root_header = document.querySelector(".root-header svg");
root_header.addEventListener("click", () => {
    const root = document.querySelector(".root");
    root.classList.toggle("display")
})
