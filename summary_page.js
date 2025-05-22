// Courses dataset - demo data
const courses = [
  {
    name: "אלגברה",
    components: [
      { name: "מבחן", weight: 60 },
      { name: "תרגילים", weight: 30 },
      { name: "הגשה", weight: 10 },
    ],
    average: 88,
  },
  {
    name: "מבוא למדעי המחשב",
    components: [
      { name: "פרויקט", weight: 50 },
      { name: "מבחן", weight: 40 },
      { name: "נוכחות", weight: 10 },
    ],
    average: 92,
  },
  {
    name: "אנגלית אקדמית",
    components: [
      { name: "עבודה", weight: 30 },
      { name: "הצגה", weight: 30 },
      { name: "בחינה", weight: 40 },
    ],
    average: 85,
  },
];

let componentChart;

function renderComponentChart(courseIndex) { // Pie chart showing the component breakdown for a selected course
  const course = courses[courseIndex];
  const ctx = document.getElementById("componentPieChart").getContext("2d");

  const data = {
    labels: course.components.map((c) => c.name),
    datasets: [
      {
        data: course.components.map((c) => c.weight),
        backgroundColor: ["#f39c12", "#2980b9", "#27ae60"],
      },
    ],
  };

  if (componentChart) componentChart.destroy(); // Destroy previous chart before creating a new one

  componentChart = new Chart(ctx, {
    type: "pie",
    data: data,
    options: {
      maintainAspectRatio: false,
      plugins: {
        legend: {
          labels: {
            font: {
              size: 20,
            },
          },
        },
      },
    },
  });


  document.getElementById( // Update weighted score text
    "weighted-score"
  ).textContent = ` ציון משוקלל: ${course.average}`;
}

document.getElementById("course-select").addEventListener("change", (e) => { // Listen for course selection change
  renderComponentChart(e.target.value);
});

renderComponentChart(0); // Default chart on load


const tagsData = { מתמטיקה: 84, "מדעי המחשב": 89, אנגלית: 92, פסיכולוגיה: 82, "רב מלל": 70};
let tagsBarChart;


function renderTagsBarChart(selectedTags) { // A bar chart for selected tags
  const labels = Object.keys(tagsData).filter((tag) =>
    selectedTags.includes(tag)
  );
  const dataValues = labels.map((tag) => tagsData[tag]);
  const ctx = document.getElementById("tagsBarChart").getContext("2d");

  if (tagsBarChart) tagsBarChart.destroy();

  tagsBarChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: labels,
      datasets: [
        {
          label: "ציון ממוצע",
          data: dataValues,
          backgroundColor: "#00796b",
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          labels: {
            font: {
              size: 25,
            },
          },
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          suggestedMin: 50,
          suggestedMax: 100,
          ticks: {
            stepSize: 10,
            font: { size: 20 },
          },
        },
        x: {
          ticks: {
            font: { size: 20 },
          },
          grid: {
            display: false,
          },
        },
      },
    },


  });
}

// Grade distribution pie chart
const rangeData = {
  "פחות מ-50": 1,
  "50-60": 3,
  "60-70": 2,
  "70-80": 3,
  "80-90": 5,
  "90-100": 6,
};
new Chart(document.getElementById("rangePieChart"), {
  type: "pie",
  data: {
    labels: Object.keys(rangeData),
    datasets: [
      {
        data: Object.values(rangeData),
        backgroundColor: [
          "#e74c3c",
          "#f39c12",
          "#2ecc71",
          "#3498db",
          "#9b59b6",
          "#16a085",
        ],
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          font: {
            size: 20,
          },
        },
      },
    },
  },
});


// Toggle hamburger menu
const hamburgerBtn = document.getElementById("hamburger-btn");
const navMenu = document.getElementById("nav-menu");
hamburgerBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// Checkboxes for tag summary section
const TAGS = ["מתמטיקה", "אנגלית", "מדעי המחשב", "פסיכולוגיה", "רב מלל"];
function renderSummaryTagCheckboxes() {
  const container = document.getElementById('summary-tag-options');


  TAGS.forEach(tag => {
    const wrapper = document.createElement('div');
    const label = document.createElement('label');
    label.style.cursor = 'pointer';

    const input = document.createElement('input');
    input.type = 'checkbox';
    input.value = tag;

    label.appendChild(input);
    label.append(` ${tag}`);
    wrapper.appendChild(label);
    container.appendChild(wrapper);
  });
}


renderSummaryTagCheckboxes();

// Dropdown for tag selection and label updating
const dropdown = document.getElementById('summary-tag-dropdown');
const checkboxList = document.getElementById('summary-tag-options');
const selectedDiv = document.getElementById('summary-tag-dropdown');

if (!selectedDiv.querySelector('.selected-tags-label')) { // Add default label if not present
  const span = document.createElement('span');
  span.className = 'selected-tags-label';
  span.textContent = 'בחר תגיות...';
  selectedDiv.prepend(span);
}


// Toggle dropdown when clicked
selectedDiv.addEventListener('click', (e) => {
  e.stopPropagation();
  checkboxList.classList.toggle('hidden');
});

// When tags selected - update label and chart
checkboxList.addEventListener('change', () => {
  const selected = [...checkboxList.querySelectorAll('input:checked')].map(cb => cb.value);
  const currentText = selected.length ? selected.join(', ') : 'בחר תגיות...';
  const textSpan = selectedDiv.querySelector('.selected-tags-label');
  if (textSpan) {
    textSpan.textContent = currentText;
  }
  renderTagsBarChart(selected);
});


// Initial tag chart based on default selections
const initialSelected = [...checkboxList.querySelectorAll('input:checked')].map(cb => cb.value);
renderTagsBarChart(initialSelected);

document.getElementById("year").textContent = new Date().getFullYear(); // Update current year in footer