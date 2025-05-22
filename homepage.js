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

// ===== Login Form Validation & Error Bubbles =====
// Handles login validation and dynamic error bubbles (no changes to HTML needed)
document.addEventListener('DOMContentLoaded', () => {
  const emailInput = document.getElementById('login-email');
  const passwordInput = document.getElementById('login-password');
  const loginBtn = document.getElementById('login-btn');

 // Removes all existing error bubbles from inputs
  function clearErrors() {
    document.querySelectorAll('.input-error-bubble').forEach(el => el.remove());
  }

  // Displays a custom error bubble after a specific input field
  function showError(inputEl, message) {
  // Remove existing bubble if present
    if (inputEl.nextElementSibling && inputEl.nextElementSibling.classList.contains('input-error-bubble')) {
      inputEl.nextElementSibling.remove();
    }
  // Create and insert new bubble
    const bubble = document.createElement('div');
    bubble.className = 'input-error-bubble';
    bubble.textContent = message;
    inputEl.after(bubble);
  }

 // Validates email and returns a specific error message (if any)
  function validateEmail(email) {
    if (!email.includes('@')) return "האימייל חייב לכלול @";
    if (email.length < 15) return "האימייל חייב לכלול מעל 15 תווים";
    if (!/^[a-zA-Z0-9@._-]+$/.test(email)) return "האימייל חייב להיות באנגלית בלבד ובתווים תקניים";
    return "";
  }

// Validates password length (6+ characters)
  function validatePassword(password) {
    return password.length >= 6 ? "" : "הסיסמה חייבת לכלול 6 תווים לפחות";
  }

// Login button click handler – runs all validations and shows bubbles if needed
  loginBtn?.addEventListener('click', function (e) {
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

    if (!isValid) {
      e.preventDefault();
      return;
    }

   // All fields valid: redirect to courses page
    window.location.href = "courses_page.html";
  });
});
