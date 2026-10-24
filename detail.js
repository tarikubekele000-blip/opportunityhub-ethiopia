const params = new URLSearchParams(window.location.search);
const id = Number(params.get("id"));
const o = opportunities.find(item => item.id === id);
const box = document.getElementById("detail");

if (!o) {
  box.innerHTML = "<p>Opportunity not found.</p>";
} else {
  const expired = new Date(o.deadline) < new Date();
  box.innerHTML = `
    <div class="card">
      <h2>${o.title}</h2>
      <span class="tag">${o.category}</span>
      <span class="tag">Grades ${o.grades.join(", ")}</span>
      <span class="tag">${o.mode}</span>
      ${expired ? '<span class="tag expired">Expired</span>' : ""}
      <p><strong>Organizer:</strong> ${o.organizer}</p>
      <p><strong>Deadline:</strong> ${o.deadline}</p>
      <p><strong>Who can apply:</strong> ${o.eligibility}</p>
      <p><strong>Benefits:</strong> ${o.benefits}</p>
      <p><strong>What you need:</strong> ${o.materials}</p>
      <p><strong>Last checked:</strong> ${o.lastChecked}</p>
      <p><a href="${o.link}">Go to the official page</a></p>
      <p class="notice">Always confirm the details on the official page before applying.</p>
    </div>
  `;
}
