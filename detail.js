const params = new URLSearchParams(window.location.search);
const id = Number(params.get("id"));
const o = opportunities.find(item => item.id === id);
const box = document.getElementById("detail");

const STATUS_OPTIONS = ["", "Interested", "Preparing", "Submitted", "Closed"];

if (!o) {
  document.title = "Not found | OpportunityHub Ethiopia";
  box.innerHTML = `
    <div class="panel">
      <h1>Opportunity not found</h1>
      <p>This listing may have been removed, or the link is wrong.</p>
      <p><a class="btn btn-primary" href="index.html">Browse all opportunities</a></p>
    </div>`;
} else {
  renderDetail();
}

function renderDetail() {
  document.title = o.title + " | OpportunityHub Ethiopia";

  const info = deadlineInfo(o.deadline);
  const link = safeUrl(o.link);
  const isSaved = getSaved().includes(o.id);
  const current = getStatuses()[o.id] || "";
  const similar = opportunities.filter(x => x.id !== o.id && x.category === o.category).slice(0, 3);

  const statusOptions = STATUS_OPTIONS.map(s =>
    `<option value="${s}" ${s === current ? "selected" : ""}>${s === "" ? "Not tracking" : s}</option>`
  ).join("");

  const linkHtml = link
    ? `<a class="btn btn-primary" href="${escapeHtml(link)}" target="_blank" rel="noopener noreferrer">Go to official page ↗</a>`
    : `<span class="btn btn-disabled" aria-disabled="true">Official link coming soon</span>`;

  const similarHtml = similar.length
    ? `<section class="panel">
         <h2>Similar opportunities</h2>
         <ul>
           ${similar.map(x => `<li><a href="detail.html?id=${x.id}">${escapeHtml(x.title)}</a> <span class="muted">· ${escapeHtml(deadlineInfo(x.deadline).label)}</span></li>`).join("")}
         </ul>
       </section>`
    : "";

  box.innerHTML = `
    <article class="panel">
      <div class="tags">
        <span class="tag">${escapeHtml(o.category)}</span>
        <span class="tag tag-plain">${escapeHtml(formatGrades(o.grades))}</span>
        <span class="tag tag-plain">${escapeHtml(o.mode)}</span>
        <span class="deadline ${info.level}">${escapeHtml(info.label)}</span>
      </div>
      <h1>${escapeHtml(o.title)}</h1>
      <p class="muted">Offered by ${escapeHtml(o.organizer)}</p>

      ${info.expired ? '<p class="notice danger">This deadline has passed. Check the official page for new dates.</p>' : ""}
      ${o.deadlineNote ? `<p class="notice">${escapeHtml(o.deadlineNote)}</p>` : ""}

      <div class="facts">
        <div class="fact"><span>Deadline</span><strong>${escapeHtml(formatDate(o.deadline))}</strong></div>
        <div class="fact"><span>Grades</span><strong>${escapeHtml(formatGrades(o.grades))}</strong></div>
        <div class="fact"><span>Format</span><strong>${escapeHtml(o.mode)}</strong></div>
        <div class="fact"><span>Last checked</span><strong>${escapeHtml(formatDate(o.lastChecked))}</strong></div>
      </div>

      <section class="block">
        <h2>Who can apply</h2>
        <p>${escapeHtml(o.eligibility)}</p>
      </section>
      <section class="block">
        <h2>Benefits</h2>
        <p>${escapeHtml(o.benefits)}</p>
      </section>
      <section class="block">
        <h2>What you need to apply</h2>
        <p>${escapeHtml(o.materials)}</p>
      </section>

      <div class="actions">
        ${linkHtml}
        <button id="save-btn" class="btn btn-ghost" type="button" aria-pressed="${isSaved}">${saveLabel(isSaved)}</button>
        <button id="copy-btn" class="btn btn-ghost" type="button">Copy link</button>
      </div>

      <p class="notice">Always confirm the details on the official page before applying. Never pay a fee to a third party to apply.</p>
    </article>

    <section class="panel">
      <h2>Track your application</h2>
      <div class="tracker">
        <label for="status" class="sr-only">Application status</label>
        <select id="status">${statusOptions}</select>
        <span class="small">Saved on this device only.</span>
      </div>
    </section>

    ${similarHtml}
  `;

  document.getElementById("save-btn").addEventListener("click", function () {
    const nowSaved = toggleSaved(o.id);
    this.textContent = saveLabel(nowSaved);
    this.setAttribute("aria-pressed", nowSaved ? "true" : "false");
  });

  document.getElementById("status").addEventListener("change", function () {
    setStatus(o.id, this.value);
  });

  document.getElementById("copy-btn").addEventListener("click", async function () {
    const url = window.location.href;
    try {
      await navigator.clipboard.writeText(url);
      this.textContent = "Copied!";
      setTimeout(() => { this.textContent = "Copy link"; }, 2000);
    } catch (e) {
      window.prompt("Copy this link:", url);
    }
  });
}
