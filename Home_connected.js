// ===== Hamburger Menu Toggle =====
// Handles opening/closing the mobile navigation menu when hamburger is clicked
document

  .getElementById("hamburger-btn")
  ?.addEventListener("click", () => {
    document.getElementById("nav-menu").classList.toggle("active");
  });
  // ===== Update Year in Footer =====
// Sets the current year dynamically in the footer 
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}