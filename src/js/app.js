const toggle = document.querySelector(".header-toggle");
const menu = document.querySelector(".header-menu");

toggle.addEventListener("click", () => {
  menu.classList.add("active");
});

document.addEventListener("click", (e) => {
  if (e.target.closest(".header-menu") || e.target.closest(".header-toggle"))
    return;

  menu.classList.remove("active");
});
