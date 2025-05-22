// Demo data
const demoCourseList = [
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

const tbody = document.getElementById("grades-body"); // Catch table

function renderTable(courseList, editMode = false) { // Renders the table with courses in view or edit mode
  tbody.parentElement.classList.toggle("edit-mode", editMode);
  tbody.innerHTML = "";
  let creditsSum = 0;
  let totalCredits = 0;
  let weightedSum = 0;

  courseList.forEach((course) => {
    const row = document.createElement("tr");

    const gradeDisplay = course.binaryChecked ? "עובר" : course.real_grade; // If binary, display "עובר"

    row.innerHTML = `
      <td><input type="text" value="${course.name}" ${editMode ? "" : "readonly"} /></td>
      <td><input type="number" value="${course.credits}" ${editMode ? "" : "readonly"} /></td>
      <td><input type="text" value="${gradeDisplay}" ${editMode ? "" : "readonly"} /></td>
    `;
    tbody.appendChild(row);
    creditsSum+= Number(course.credits); // Include all credits
    // calc only nonbinary 
    if (!course.binaryChecked) { // If not binary - included in average
      totalCredits += Number(course.credits);
      weightedSum += Number(course.real_grade) * Number(course.credits);
    }
  });

    // Update total and average display
  document.getElementById("total-credits").textContent = creditsSum;
  document.getElementById("weighted-average").textContent =
  totalCredits > 0 ? (weightedSum / totalCredits).toFixed(1) : "--";
}


let isEditMode = false;
const toggleBtn = document.getElementById("toggle-edit");

toggleBtn.addEventListener("click", () => { // Toggles between edit and view mode
  isEditMode = !isEditMode;
  toggleBtn.textContent = isEditMode ? "שמור תעודה" : "ערוך תעודה";
  applyFilters(); // Refresh table after toggle
});

document.getElementById("year").textContent = new Date().getFullYear(); // Set current year in footer

document.getElementById("hamburger-btn").addEventListener("click", () => { // Hamburger menu toggle
  document.getElementById("nav-menu").classList.toggle("active");
});

const yearFilter = document.getElementById("yearFilter");
const semesterFilter = document.getElementById("semesterFilter");


// Filter the course list based on year and semester
function applyFilters() {
  let selectedYear = yearFilter?.value || "";
  let selectedSemester = semesterFilter?.value || "";

  if (selectedYear === "הכל") selectedYear = "";
  if (selectedSemester === "הכל") selectedSemester = "";

  const filtered = demoCourseList.filter((course) => {
    return (
      (!selectedYear || course.year === selectedYear) &&
      (!selectedSemester || course.semester === selectedSemester)
    );
  });

  renderTable(filtered, isEditMode);
}

// Update table on filter change
yearFilter?.addEventListener("change", applyFilters);
semesterFilter?.addEventListener("change", applyFilters);

// Initial table load
renderTable(demoCourseList, false);
