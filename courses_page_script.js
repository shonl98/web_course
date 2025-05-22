// Runs when DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  var TAGS = ["מתמטיקה", "אנגלית", "מדעי המחשב", "פסיכולוגיה", "רב מלל"]; // TODO: replace with server data

  renderTagCheckboxes(); // Create tag lists
  calculateTotalPointsAndAverage(); // Calc nakaz and avg

  var coursesList = []; // List of all displayed courses
  var currentEditingCard = null; // Currently edited card

  const demoCourseList = [
    // Demo data
    {
      id: "c1",
      name: "מבוא למדעי המחשב",
      credits: "4",
      grade: "95",
      year: "א",
      semester: "חורף",
      tags: ["מדעי המחשב", "מתמטיקה"],
      components: [
        { type: "מבחן", weight: "70", grade: "96" },
        { type: "עבודה", weight: "30", grade: "92" },
      ],
      binaryChecked: false,
      bonus: 2,
      real_grade: 97,
    },
    {
      id: "c2",
      name: "כתיבה אקדמית באנגלית",
      credits: "2",
      grade: "85",
      year: "א",
      semester: "אביב",
      tags: ["אנגלית", "רב מלל"],
      components: [],
      binaryChecked: true,
      bonus: 1,
      real_grade: 86,
    },
    {
      id: "c3",
      name: "פסיכולוגיה קוגניטיבית",
      credits: "3",
      grade: "88",
      year: "ב",
      semester: "קיץ",
      tags: ["פסיכולוגיה"],
      components: [
        { type: "מבחן", weight: "60", grade: "85" },
        { type: "תרגיל", weight: "40", grade: "92" },
      ],
      binaryChecked: false,
      bonus: 0,
      real_grade: 87,
    },
    {
      id: "c4",
      name: "סטטיסטיקה למדעי החברה",
      credits: "3",
      grade: "76",
      year: "ג",
      semester: "חורף",
      tags: ["מתמטיקה", "פסיכולוגיה"],
      components: [],
      binaryChecked: true,
      bonus: 0,
      real_grade: 76,
    },
    {
      id: "c5",
      name: "פרויקטים במדעי המחשב",
      credits: "5",
      grade: "90",
      year: "ד",
      semester: "אביב",
      tags: ["מדעי המחשב"],
      components: [{ type: "פרויקט", weight: "100", grade: "90" }],
      binaryChecked: false,
      bonus: 2,
      real_grade: 92,
    },
    {
      id: "c6",
      name: "תרבות אנגלית",
      credits: "2",
      grade: "82",
      year: "ב",
      semester: "חורף",
      tags: ["אנגלית"],
      components: [],
      binaryChecked: true,
      bonus: 0,
      real_grade: 82,
    },
    {
      id: "c7",
      name: "יסודות בלוגיקה",
      credits: "3",
      grade: "89",
      year: "א",
      semester: "קיץ",
      tags: ["מתמטיקה"],
      components: [
        { type: "בוחן", weight: "30", grade: "90" },
        { type: "מבחן", weight: "70", grade: "88" },
      ],
      binaryChecked: false,
      bonus: 1,
      real_grade: 90,
    },
    {
      id: "c8",
      name: "מבוא לפסיכולוגיה",
      credits: "3",
      grade: "77",
      year: "ג",
      semester: "אביב",
      tags: ["פסיכולוגיה", "רב מלל"],
      components: [],
      binaryChecked: true,
      bonus: 0,
      real_grade: 77,
    },
    {
      id: "c9",
      name: "מערכות הפעלה",
      credits: "4",
      grade: "91",
      year: "ג",
      semester: "קיץ",
      tags: ["מדעי המחשב"],
      components: [
        { type: "מבחן", weight: "80", grade: "92" },
        { type: "תרגיל", weight: "20", grade: "85" },
      ],
      binaryChecked: false,
      bonus: 0,
      real_grade: 91.4,
    },
    {
      id: "c10",
      name: "ספרות אנגלית מודרנית",
      credits: "2",
      grade: "68",
      year: "ב",
      semester: "חורף",
      tags: ["אנגלית", "רב מלל"],
      components: [],
      binaryChecked: true,
      bonus: 0,
      real_grade: 68,
    },
    {
      id: "c11",
      name: "פרוייקט סיום",
      credits: "6",
      grade: "100",
      year: "ד",
      semester: "קיץ",
      tags: ["מדעי המחשב"],
      components: [{ type: "פרויקט", weight: "100", grade: "100" }],
      binaryChecked: false,
      bonus: 3,
      real_grade: 103,
    },
    {
      id: "c12",
      name: "קורס מתקדם בפסיכולוגיה",
      credits: "4",
      grade: "84",
      year: "ד",
      semester: "חורף",
      tags: ["פסיכולוגיה"],
      components: [
        { type: "עבודה", weight: "40", grade: "86" },
        { type: "מבחן", weight: "60", grade: "82" },
      ],
      binaryChecked: false,
      bonus: 0,
      real_grade: 83.2,
    },
    {
      id: "c13",
      name: "שיטות מחקר במדעי החברה",
      credits: "3",
      grade: "80",
      year: "ג",
      semester: "חורף",
      tags: ["פסיכולוגיה", "רב מלל"],
      components: [],
      binaryChecked: true,
      bonus: 1,
      real_grade: 81,
    },
    {
      id: "c14",
      name: "אנגלית עסקית",
      credits: "2",
      grade: "75",
      year: "א",
      semester: "אביב",
      tags: ["אנגלית"],
      components: [],
      binaryChecked: false,
      bonus: 0,
      real_grade: 75,
    },
    {
      id: "c15",
      name: "תכנות מונחה עצמים",
      credits: "4",
      grade: "93",
      year: "ב",
      semester: "אביב",
      tags: ["מדעי המחשב"],
      components: [
        { type: "תרגיל", weight: "40", grade: "95" },
        { type: "מבחן", weight: "60", grade: "91" },
      ],
      binaryChecked: false,
      bonus: 1,
      real_grade: 94,
    },
    {
      id: "c16",
      name: "מתמטיקה בדידה",
      credits: "4",
      grade: "88",
      year: "א",
      semester: "חורף",
      tags: ["מתמטיקה"],
      components: [],
      binaryChecked: false,
      bonus: 0,
      real_grade: 88,
    },
    {
      id: "c17",
      name: "אנגלית למתקדמים",
      credits: "2",
      grade: "92",
      year: "ג",
      semester: "אביב",
      tags: ["אנגלית"],
      components: [],
      binaryChecked: true,
      bonus: 0,
      real_grade: 92,
    },
    {
      id: "c18",
      name: "סדנת פסיכולוגיה יישומית",
      credits: "3",
      grade: "85",
      year: "ד",
      semester: "אביב",
      tags: ["פסיכולוגיה"],
      components: [{ type: "עבודה", weight: "100", grade: "85" }],
      binaryChecked: false,
      bonus: 0,
      real_grade: 85,
    },
    {
      id: "c19",
      name: "אנליזה מתמטית 1",
      credits: "5",
      grade: "80",
      year: "ב",
      semester: "חורף",
      tags: ["מתמטיקה"],
      components: [{ type: "מבחן", weight: "100", grade: "80" }],
      binaryChecked: false,
      bonus: 0,
      real_grade: 80,
    },
    {
      id: "c20",
      name: "מבוא ללמידת מכונה",
      credits: "4",
      grade: "94",
      year: "ד",
      semester: "קיץ",
      tags: ["מדעי המחשב", "מתמטיקה"],
      components: [
        { type: "מבחן", weight: "70", grade: "93" },
        { type: "עבודה", weight: "30", grade: "96" },
      ],
      binaryChecked: false,
      bonus: 2,
      real_grade: 95.1,
    },
  ];

  function renderCourseToScreen( // Renders a course card in the DOM (adds or updates)
    course,
    container = document.getElementById("course-grid")
  ) {
    const existing = container.querySelector(
      `.course-card[data-id="${course.id}"]`
    );

    const tagsHTML = course.tags
      .map((tag) => `<span class="tag">${tag}</span>`)
      .join("");

    const gradeDisplay = course.binaryChecked ? "עובר" : course.real_grade;
    const binaryChecked = course.binaryChecked;
    const bonus = course.bonus;

    const cardHTML = `
<article class="course-card"
  data-id="${course.id}"
  data-name="${course.name}"
  data-year="${course.year}"
  data-semester="${course.semester}"
  data-tags="${course.tags.join(",")}"
  data-credits="${course.credits}"
  data-grade="${course.grade}"
  data-real-grade="${course.real_grade}"
  data-binaryChecked="${course.binaryChecked}"
  data-bonus="${course.bonus}"
>
  <h2>${course.name}</h2>
  <div class="course-summary">
    <span>שנה: ${course.year}<br>סמסטר: ${course.semester}</span>
    <div class="divider"></div>
    <span class="grade-credits">ציון: ${gradeDisplay}<br>נק"ז: ${
      course.credits
    }</span>
  </div>
  <div class="tags">${tagsHTML}</div>
  <button class="edit-course">✏️</button>
</article>`;

    if (existing) {
      // Replace card if it already exists, otherwise add it
      existing.outerHTML = cardHTML;
    } else {
      container.insertAdjacentHTML("beforeend", cardHTML);
    }

    const card = container.querySelector(
      // Add edit button logic
      `.course-card[data-id="${course.id}"]`
    );
    card.querySelector(".edit-course").addEventListener("click", () => {
      const id = card.dataset.id;
      const courseFromList = coursesList.find((c) => c.id === id);
      if (courseFromList) {
        populateFormFromCourseObject(courseFromList);
        currentEditingCard = card;
        modal.classList.remove("hidden");
        const deleteB = document.getElementById("delete-btn");
        deleteB.classList.remove("locked");
        deleteB.disabled = false;
      }
    });
  }

  function createCourseFromForm() {
    // Extracts course data from the form fields
    const name = document.getElementById("course-name").value;
    const credits = document.getElementById("credits").value;
    const grade = document.getElementById("final-grade").value;
    const binaryChecked = document.getElementById("binary-bonus").checked;
    const bonus = document.getElementById("bonus").value;
    const year = document.getElementById("year").value;
    const semester = document.getElementById("semester").value;
    const text = document.getElementById("weighted-result").textContent; //
    const number = parseFloat(text.replace(/[^\d.]/g, "")); //
    const real_grade = number;
    const tags = [
      ...document.querySelectorAll("#tag-options input:checked"),
    ].map((cb) => cb.value);
    const components = [...document.querySelectorAll(".component-row")].map(
      (row) => {
        return {
          type: row.querySelector(".comp-type").value,
          weight: row.querySelector(".comp-weight").value,
          grade: row.querySelector(".comp-grade").value,
        };
      }
    );

    return {
      name,
      credits,
      grade,
      year,
      semester,
      tags,
      components,
      binaryChecked,
      bonus,
      real_grade,
    };
  }

  document.getElementById("course-form").addEventListener("submit", (e) => {
    // On course form submit: update existing or add new course

    e.preventDefault();
    const formCourse = createCourseFromForm();
    const idFromForm = currentEditingCard?.dataset.id;

    if (idFromForm) {
      // Update existing course
      formCourse.id = idFromForm;
      const index = coursesList.findIndex((c) => c.id === idFromForm);
      if (index !== -1) coursesList[index] = formCourse;
    } else {
      // Add new course
      formCourse.id = crypto.randomUUID();
      coursesList.push(formCourse);
    }

    renderCourseToScreen(formCourse);
    calculateTotalPointsAndAverage();
    filterCourses();
    resetForm();
    closeModal();
  });

  function populateFormFromCourseObject(course) {
    // Loads data from course object into form
    document.getElementById("course-name").value = course.name;
    document.getElementById("final-grade").value = course.grade;
    document.getElementById("credits").value = course.credits;
    document.getElementById("year").value = course.year;
    document.getElementById("semester").value = course.semester;
    document.getElementById("binary-bonus").checked = course.binaryChecked;
    document.getElementById("bonus").value = course.bonus;

    compContainer.innerHTML = "";
    course.components.forEach((c) => addComponent(c.type, c.weight, c.grade));

    const allCheckboxes = document.querySelectorAll("#tag-options input"); // Select matching tags
    allCheckboxes.forEach(
      (cb) => (cb.checked = course.tags.includes(cb.value))
    );

    selectedTagsDiv.textContent = course.tags.length
      ? course.tags.join(", ")
      : "בחר תגיות...";

    calcWeighted();
  }

  // Display all demo courses on load
  coursesList = [...demoCourseList];
  coursesList.forEach((course) => renderCourseToScreen(course));
  calculateTotalPointsAndAverage();
  filterCourses();

  // Setup filter dropdowns
  function setupMultiSelect(dropdownId, listId, displayId, filterCallback) {
    const dropdown = document.getElementById(dropdownId);
    const list = document.getElementById(listId);
    const display = document.getElementById(displayId);

    dropdown.addEventListener("click", (e) => {
      if (e.target.tagName !== "INPUT") list.classList.toggle("hidden");
    });

    document.addEventListener("click", (e) => {
      if (!dropdown.contains(e.target)) list.classList.add("hidden");
    });

    list.addEventListener("input", () => {
      const selected = [...list.querySelectorAll("input:checked")].map(
        (cb) => cb.value
      );
      display.textContent = selected.length ? selected.join(", ") : "בחר...";
      filterCallback();
    });
  }

  // Calculates total credits and weighted average grade
  function calculateTotalPointsAndAverage() {
    const courses = document.querySelectorAll(".course-card");
    let totalCredits = 0; // Count all credits
    let weightedSum = 0; // Sum of grade × credits
    let creditsForAvg = 0; // Only non-binary credits used for average

    courses.forEach((course) => {
      const binary = course.dataset.binarychecked === "true";
      const grade = parseFloat(course.dataset.realGrade);
      const credits = parseFloat(course.dataset.credits);
      // Always include in total credits
      if (!isNaN(credits)) {
        totalCredits += credits; // Always count total credits
      }

      if (!binary && !isNaN(grade) && !isNaN(credits)) {
        // Include in average only if not binary
        weightedSum += grade * credits;
        creditsForAvg += credits;
      }
    });

    const totalPointsElem = document.getElementById("total-points");
    const avgGradeElem = document.getElementById("average-grade");

    totalPointsElem.textContent = totalCredits;

    if (creditsForAvg > 0) {
      const weightedAvg = weightedSum / creditsForAvg;
      avgGradeElem.textContent = weightedAvg.toFixed(1);
    } else {
      avgGradeElem.textContent = "--";
    }
  }

  function renderTagCheckboxes() {
    // Renders tag checkboxes in both filter and modal
    const tagFilterContainer = document.getElementById("filter-tag-options"); // tags for filter
    const tagModalContainer = document.getElementById("tag-options"); // tags in popup
    tagFilterContainer.innerHTML = "";
    tagModalContainer.innerHTML = "";
    TAGS.forEach((tag) => {
      // Run for all tags and insert them in html
      var checkboxHTML = `<label><input type="checkbox" value="${tag}"> ${tag}</label>`;
      tagFilterContainer.innerHTML += checkboxHTML;
      tagModalContainer.innerHTML += checkboxHTML;
    });
  }

  setupMultiSelect(
    // Call the setupMultiSelect function
    "filter-tag-dropdown",
    "filter-tag-options",
    "filter-selected-tags",
    filterCourses
  );

  setupMultiSelect(
    // Call the setupMultiSelect function
    "filter-year-dropdown",
    "filter-year-options",
    "filter-selected-years",
    filterCourses
  );

  setupMultiSelect(
    // Call the setupMultiSelect function
    "filter-semester-dropdown",
    "filter-semester-options",
    "filter-selected-semesters",
    filterCourses
  );

  document.getElementById("filter-toggle").addEventListener("click", () => {
    document.getElementById("filter-options").classList.toggle("hidden");
  });

  document.getElementById("search").addEventListener("input", filterCourses);

  function filterCourses() {
    // Filter function
    const tagVals = [
      ...document.querySelectorAll("#filter-tag-options input:checked"),
    ].map((i) => i.value);
    const yearVals = [
      ...document.querySelectorAll("#filter-year-options input:checked"),
    ].map((i) => i.value);
    const semVals = [
      ...document.querySelectorAll("#filter-semester-options input:checked"),
    ].map((i) => i.value);
    const searchVal = document.getElementById("search").value.toLowerCase();

    const courses = document.querySelectorAll(".course-card");

    courses.forEach((course) => {
      const year = course.dataset.year;
      const sem = course.dataset.semester;
      const tags = course.dataset.tags.split(",");
      const title = course.querySelector("h2").textContent.toLowerCase();

      const matchTags =
        tagVals.length === 0 || tagVals.some((tag) => tags.includes(tag));
      const matchYear = yearVals.length === 0 || yearVals.includes(year);
      const matchSem = semVals.length === 0 || semVals.includes(sem);
      const matchText = title.includes(searchVal);

      course.style.display =
        matchTags && matchYear && matchSem && matchText ? "" : "none"; // Show or hide course based on match
    });
  }

  document
    .getElementById("hamburger-btn")
    .addEventListener("click", () =>
      document.getElementById("nav-menu").classList.toggle("active")
    );

  document
    .querySelector(".disconnection")
    .addEventListener("click", function () {
      this.nextElementSibling.classList.toggle("hidden");
    });

  const modal = document.getElementById("course-modal");

  // Popup open/close logic
  function openModal() {
    currentEditingCard = null; // Reset editing course
    modal.classList.remove("hidden");
    resetForm();
    if (currentEditingCard == null) {
      const deleteB = document.getElementById("delete-btn");
      deleteB.classList.add("locked");
      deleteB.disabled = true;
    }
  }

  function closeModal() {
    modal.classList.add("hidden");
  }

  document.getElementById("add-course").addEventListener("click", openModal); // click on plus button
  document.querySelector(".close-modal").addEventListener("click", closeModal); // click on x on popup
  modal.querySelector(".modal-overlay").addEventListener("click", closeModal); // click on gray area

  const dropdown = document.getElementById("tag-dropdown");
  const tagOptions = document.getElementById("tag-options");
  const selectedTagsDiv = document.getElementById("selected-tags");

  dropdown.addEventListener("click", (e) => {
    if (e.target.tagName !== "INPUT") tagOptions.classList.toggle("hidden");
    dropdown.classList.toggle("active");
  });

  tagOptions.addEventListener("change", () => {
    const selected = [...tagOptions.querySelectorAll("input:checked")].map(
      (cb) => cb.value
    );
    selectedTagsDiv.textContent = selected.length
      ? selected.join(", ")
      : "בחר תגיות...";
  });

  document.addEventListener("click", (e) => {
    if (!dropdown.contains(e.target)) tagOptions.classList.add("hidden");
  });

  const compContainer = document.getElementById("components-container");
  document
    .getElementById("add-component")
    .addEventListener("click", () => addComponent());

  function addComponent(type = "מבחן", weight = "", grade = "") {
    // Add new component to course
    const row = document.createElement("div");
    row.className = "component-row fade-in";
    row.innerHTML = `
          <div class="comp-field">
            <label>
              סוג רכיב
              <select class="comp-type">
                <option value="מבחן">מבחן</option>
                <option value="עבודה">עבודה</option>
                <option value="תרגיל">תרגיל</option>
                <option value="בוחן">בוחן</option>
              </select>
            </label>
          </div>
          <div class="comp-field">
            <label>
              משקל
              <input type="number" class="comp-weight" min="0" max="100" value="${weight}">
            </label>
          </div>
          <div class="comp-field">
            <label>
              ציון
              <input type="number" class="comp-grade" min="0" max="100" value="${grade}">
            </label>
          </div>
          <button type="button" class="del-row">✕</button>
        `;
    compContainer.appendChild(row);
    const select = row.querySelector(".comp-type");
    select.value = type;
    setTimeout(() => row.classList.remove("fade-in"), 300);
    calcWeighted();
  }

  compContainer.addEventListener("click", (e) => {
    // Remove component row and recalculate
    if (e.target.classList.contains("del-row")) {
      e.target.parentElement.remove();
      if (!compContainer.querySelector(".component-row")) {
        // Allow manual grade if no components left
        unlockFinalGrade();
      }
      updateWeightWarningVisibility();
      calcWeighted();
    }
  });

  document.getElementById("bonus").addEventListener("input", function () {
    calcWeighted();
  });

  compContainer.addEventListener("input", calcWeighted);

  const finalGradeInp = document.getElementById("final-grade"); // final grade

  function lockFinalGrade() {
    // Not allow to change the grade if there is componenets
    finalGradeInp.classList.add("locked");
    finalGradeInp.disabled = true;
  }

  function unlockFinalGrade() {
    // Revele grade
    finalGradeInp.disabled = false;
    finalGradeInp.classList.remove("locked");
  }

  const bonusInp = document.getElementById("bonus");
  const warnBox = document.getElementById("weight-warning");
  const resultBox = document.getElementById("weighted-result");
  const saveBtn = document.getElementById("save-btn");

  [compContainer, bonusInp].forEach((el) =>
    el.addEventListener("input", calcWeighted)
  );

  document
    .getElementById("binary-bonus")
    .addEventListener("change", calcWeighted); // Listening the binary checkbox

  document
    .getElementById("final-grade")
    .addEventListener("change", calcWeighted); // Listening the binary checkbox

  function updateWeightWarningVisibility() {
    const hasComponents =
      compContainer.querySelectorAll(".component-row").length > 0;
    if (!hasComponents) {
      warnBox.classList.add("hidden");
    }
  }

  function calcWeighted() {
    // Calculates weighted grade based on components + bonus
    resultBox.classList.remove("hidden");
    const binaryChecked = document.getElementById("binary-bonus").checked;

    if (binaryChecked) {
      lockFinalGrade();
      resultBox.textContent = "ציון משוקלל : עובר";
      saveBtn.disabled = false;
      saveBtn.classList.remove("locked");
      return;
    }

    const rows = [...compContainer.children];
    let totalW = 0,
      wSum = 0;

    rows.forEach((r) => {
      const w = +r.querySelector(".comp-weight").value || 0;
      const g = +r.querySelector(".comp-grade").value || 0;
      totalW += w;
      wSum += g * w;
    });

    if (rows.length) {
      lockFinalGrade();
    } else {
      unlockFinalGrade();
      resultBox.textContent = "ציון משוקלל :" + finalGradeInp.value;
      saveBtn.disabled = false;
      saveBtn.classList.remove("locked");
    }

    const bonus = +bonusInp.value || 0;

    if ((totalW !== 100) & (totalW > 0)) {
      warnBox.classList.remove("hidden");
      saveBtn.disabled = true;
      saveBtn.classList.add("locked");
      resultBox.textContent = "(סה״כ משקל לא 100%)";
    } else {
      warnBox.classList.add("hidden");
      saveBtn.disabled = false;
      saveBtn.classList.remove("locked");

      var weighted = 0;

      if (!finalGradeInp.disabled) {
        weighted = (parseFloat(finalGradeInp.value) + bonus).toFixed(1);
      } else {
        weighted = (wSum / 100 + bonus).toFixed(1);
      }

      resultBox.textContent = "ציון משוקלל : " + weighted;
    }
  }

  function resetForm() {
    // Reset form
    document.getElementById("course-form").reset();
    compContainer.innerHTML = "";
    calcWeighted();
    resultBox.textContent = "ציון משוקלל : " + 0;
    selectedTagsDiv.textContent = "בחר תגיות...";
    [...tagOptions.querySelectorAll("input:checked")].forEach(
      (cb) => (cb.checked = false)
    );
  }

  document.getElementById("delete-btn").addEventListener("click", () => {
    // Delete the currently edited course
    if (currentEditingCard && confirm("מחיקה?")) {
      // Delete cousese from list
      const idToDelete = currentEditingCard.dataset.id;
      const index = coursesList.findIndex((c) => c.id === idToDelete);
      if (index !== -1) {
        coursesList.splice(index, 1);
      }

      // Remove from screen
      currentEditingCard.remove();
      currentEditingCard = null;

      calculateTotalPointsAndAverage();
      filterCourses(); // Filtering update
      closeModal();
    }
  });
});

const yearSpan = document.getElementById("year1");
if (yearSpan) {
  console.log("a");
  yearSpan.textContent = new Date().getFullYear();
  console.log(yearSpan.textContent);
}
