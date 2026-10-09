const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");
if (menuBtn && navMenu) {
  menuBtn.addEventListener("click", () => {
    const open = navMenu.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", String(open));
  });
  navMenu.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    navMenu.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
  }));
}
