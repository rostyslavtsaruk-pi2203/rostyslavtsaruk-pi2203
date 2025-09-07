document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector("nav");

  burger.addEventListener("click", () => {
    burger.classList.toggle("active");  // анімація хрестика
    nav.classList.toggle("active");     // відкриття меню
  });

  // Закриває меню після кліку на посилання
  document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", () => {
      burger.classList.remove("active");
      nav.classList.remove("active");
    });
  });
});
