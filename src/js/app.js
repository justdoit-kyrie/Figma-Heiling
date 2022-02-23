const toggle = document.querySelector(".header-toggle");
const menu = document.querySelector(".header-menu");
const items = document.querySelectorAll(".project-actions span");
const images = document.querySelectorAll(".project-image");

toggle.addEventListener("click", () => {
  menu.classList.add("active");
});

document.addEventListener("click", (e) => {
  if (e.target.closest(".header-menu") || e.target.closest(".header-toggle"))
    return;

  menu.classList.remove("active");
});

items.forEach((item, index) => {
  item.addEventListener("click", (e) => {
    const prev = document.querySelector(".project-actions .active");
    const prevImg = document.querySelector(".project-image.active");

    // active button
    prev.classList.remove("active");
    e.target.classList.add("active");

    // show current img
    prevImg.classList.remove("active");
    images[index].classList.add("active");
  });
});
