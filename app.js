// Sample data only. Replace with real, verified listings later.
const opportunities = [
  { title: "Sample Scholarship", organizer: "Sample Organizer", category: "Scholarship",
    grades: [11, 12], deadline: "2026-12-31", eligibility: "Sample eligibility text.", link: "#" },
  { title: "Sample Coding Camp", organizer: "Sample Organizer", category: "Technology",
    grades: [9, 10, 11], deadline: "2026-11-30", eligibility: "Sample eligibility text.", link: "#" },
  { title: "Sample Science Competition", organizer: "Sample Organizer", category: "Competition",
    grades: [10, 11, 12], deadline: "2027-01-15", eligibility: "Sample eligibility text.", link: "#" }
];

const list = document.getElementById("list");
const search = document.getElementById("search");
const category = document.getElementById("category");
const grade = document.getElementById("grade");

function show() {
  const text = search.value.toLowerCase();
  const results = opportunities.filter(o =>
    (o.title + o.organizer).toLowerCase().includes(text) &&
    (category.value === "" || o.category === category.value) &&
    (grade.value === "" || o.grades.includes(Number(grade.value)))
  );

  if (results.length === 0) {
    list.innerHTML = "<p>No opportunities found.</p>";
    return;
  }

  list.innerHTML = results.map(o => `
    <div class="card">
      <h2>${o.title}</h2>
      <span class="tag">${o.category}</span>
      <span class="tag">Grades ${o.grades.join(", ")}</span>
      <p><strong>Organizer:</strong> ${o.organizer}</p>
      <p><strong>Eligibility:</strong> ${o.eligibility}</p>
      <p><strong>Deadline:</strong> ${o.deadline}</p>
      <a href="${o.link}">Official page</a>
    </div>
  `).join("");
}

search.addEventListener("input", show);
category.addEventListener("change", show);
grade.addEventListener("change", show);
show();
