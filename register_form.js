document.getElementById("studentForm").addEventListener("submit", function (e) {
  e.preventDefault(); // prevent sending by defult
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const termsCheckbox = document.getElementById("terms");

  if (password !== confirmPassword) { // Validate password match
    alert("הסיסמאות אינן תואמות.");
    e.preventDefault();
    return;
  }

  if (!termsCheckbox.checked) { // Validate terms checkbox
    if (termsCheckbox.disabled) {
      alert("יש לקרוא את תנאי השימוש לפני אישורם.");
    } else {
      alert("יש לאשר את תנאי השימוש ומדיניות הפרטיות.");
    }
    e.preventDefault();
    return;
  }

  popup(); // Show success animation + redirect

});

function popup() { // Show popup animation
  document.getElementById("popup").classList.remove("hidden"); 
  const lottie = document.getElementById("lottie");
  const totalFrames = 94;
  const frameRate = 60;
  const durationInMs = (totalFrames / frameRate) * 3000;
  console.log("A");
  lottie.stop(); 
  lottie.play(); 
  setTimeout(() => {
    document.getElementById("popup").style.display = "none";
    window.location.href = "courses_page.html"; // Redirect after animation
  }, durationInMs);
}

// Modal for displaying terms of use
const modal = document.getElementById("termsModal");
const openLink = document.getElementById("openTerms");
const termsText = document.getElementById("termsText");
const termsCheckbox = document.getElementById("terms");

openLink.addEventListener("click", function (e) { // Open terms modal and load content from file
  e.preventDefault();
  modal.classList.remove("hidden");
  fetch("./txt/terms_of_use.txt")
    .then((response) => {
      if (!response.ok) {
        throw new Error("שגיאה בטעינת תנאי השימוש.");
      }
      return response.text();
    })
    .then((text) => {
      termsText.textContent = text;
      termsCheckbox.disabled = false; // Enable checkbox after reading
    })
    .catch((error) => {
      termsText.textContent = "אירעה שגיאה בטעינת תנאי השימוש.";
      console.error("שגיאה:", error);
    });
});

function closeModal() { // Close the terms modal
  modal.classList.add("hidden");
}

function loadOptionsFromFile(fileName, selectId) { // Load select options from text file
  fetch(fileName)
    .then((response) => response.text())
    .then((data) => {
      const lines = data
        .split(/[\r\n]+/)
        .map((line) => line.trim())
        .filter((line) => line); // Remove empty lines
      const select = document.getElementById(selectId);
      lines.forEach((line) => {
        const option = document.createElement("option");
        option.value = line;
        option.textContent = line;
        select.appendChild(option);
      });
    })
    .catch((error) => {
      console.error(`שגיאה בטעינת ${fileName}:`, error);
    });
}

document.getElementById("year").textContent = new Date().getFullYear(); // Set current year in footer 

// Load study topics and academic institutions into dropdowns
loadOptionsFromFile("./txt/study_topics.txt", "major");
loadOptionsFromFile("./txt/academic_institutions.txt", "university");
