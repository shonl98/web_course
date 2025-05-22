document.addEventListener("DOMContentLoaded", function () {
  // ===== Update Year in Footer =====
// Sets the current year dynamically in the footer 
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

 // ===== Login Form Variables =====
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const loginBtn = document.querySelector('.login-btn');

  // ===== Hamburger Menu Variables =====
  const hamburgerBtn = document.getElementById("hamburger-btn");
  const navMenu = document.getElementById("nav-menu");


  // ===== Remove All Existing Error Bubbles =====
  function clearErrors() {
    document.querySelectorAll('.input-error-bubble').forEach(el => el.remove());
  }

    // ===== Display Error Bubble for a Specific Input =====
  function showError(inputEl, message) { 
    // Remove existing bubble if it exists
    if (inputEl.nextElementSibling && inputEl.nextElementSibling.classList.contains('input-error-bubble')) {
      inputEl.nextElementSibling.remove();
    }
      // Create and add new bubble
    const bubble = document.createElement('div');
    bubble.className = 'input-error-bubble';
    bubble.textContent = message;
    inputEl.after(bubble);
  }

    // ===== Email Validation Function =====
  // Returns error string if invalid, otherwise empty string
  function validateEmail(email) {
    if (!email.includes('@')) return "האימייל חייב לכלול @";
    if (email.length < 15) return "האימייל חייב לכלול לפחות 15 תווים";
    if (!/^[a-zA-Z0-9@._-]+$/.test(email)) return "האימייל חייב להיות באנגלית בלבד";
    return "";
  }

 // ===== Password Validation Function =====
  // Returns error string if password too short, otherwise empty string
  function validatePassword(password) {
    return password.length >= 6 ? "" : "הסיסמה חייבת לכלול לפחות 6 תווים";
  }

    // ===== Login Button Click Event =====
  // Runs validations, shows errors, and redirects if all fields are valid
  loginBtn?.addEventListener('click', function (e) {
    e.preventDefault();
    clearErrors();

    let isValid = true;

    const emailMsg = validateEmail(emailInput.value.trim());
    if (emailMsg) {
      showError(emailInput, emailMsg);
      isValid = false;
    }

    const passwordMsg = validatePassword(passwordInput.value);
    if (passwordMsg) {
      showError(passwordInput, passwordMsg);
      isValid = false;
    }

    if (isValid) { // If everything is valid, go to the courses page
      window.location.href = "courses_page.html";
    }
  });

 // ===== Hamburger Menu Toggle =====
  // Opens/closes the nav menu on mobile when hamburger is clicked
  hamburgerBtn?.addEventListener("click", function () {
    navMenu.classList.toggle("active");
  });

   // ===== Close Nav Menu After Link Click =====
  // Automatically closes the nav menu after any link is selected (mobile UX)
  document.querySelectorAll("#nav-menu a").forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
    });
  });
});
