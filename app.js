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
      <p><strong>Deadline:</strong> ${o.deadline}</p>
      <a href="detail.html?id=${o.id}">View details</a>
    </div>
  `).join("");
}

search.addEventListener("input", show);
category.addEventListener("change", show);
grade.addEventListener("change", show);
show();
