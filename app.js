const els = {
  search: document.getElementById("search"),
  chips: document.getElementById("chips"),
  grade: document.getElementById("grade"),
  mode: document.getElementById("mode"),
  sort: document.getElementById("sort"),
  showExpired: document.getElementById("show-expired"),
  savedOnly: document.getElementById("saved-only"),
  clear: document.getElementById("clear"),
  count: document.getElementById("count"),
  list: document.getElementById("list"),
  statTotal: document.getElementById("stat-total"),
  statSoon: document.getElementById("stat-soon"),
  statCats: document.getElementById("stat-cats")
};

const state = {
  text: "",
  category: "",
  grade: "",
  mode: "",
  sort: "deadline",
  showExpired: false,
  savedOnly: false
};

// Build category buttons and format options from the data
function setupControls() {
  const categories = Array.from(new Set(opportunities.map(o => o.category))).sort();
  els.chips.innerHTML = [""].concat(categories).map(c =>
    `<button type="button" class="chip" data-category="${escapeHtml(c)}" aria-pressed="false">${c === "" ? "All" : escapeHtml(c)}</button>`
  ).join("");

  const modes = Array.from(new Set(opportunities.map(o => o.mode))).sort();
  els.mode.innerHTML = '<option value="">All formats</option>' +
    modes.map(m => `<option>${escapeHtml(m)}</option>`).join("");

  // Stats
  const open = opportunities.filter(o => !deadlineInfo(o.deadline).expired);
  const soon = open.filter(o => {
    const d = deadlineInfo(o.deadline).days;
    return d !== null && d <= 14;
  });
  els.statTotal.textContent = open.length;
  els.statSoon.textContent = soon.length;
  els.statCats.textContent = categories.length;
}

function updateChips() {
  els.chips.querySelectorAll(".chip").forEach(btn => {
    const on = btn.dataset.category === state.category;
    btn.classList.toggle("active", on);
    btn.setAttribute("aria-pressed", on ? "true" : "false");
  });
}

function cardHtml(o, saved) {
  const info = deadlineInfo(o.deadline);
  const isSaved = saved.includes(o.id);
  return `
    <article class="card ${info.expired ? "is-expired" : ""}">
      <div class="card-top">
        <span class="tag">${escapeHtml(o.category)}</span>
        <span class="deadline ${info.level}">${escapeHtml(info.label)}</span>
      </div>
      <h3><a href="detail.html?id=${o.id}">${escapeHtml(o.title)}</a></h3>
      <p class="org">${escapeHtml(o.organizer)}</p>
      <p class="meta">${escapeHtml(formatGrades(o.grades))} · ${escapeHtml(o.mode)}</p>
      <p class="meta">Deadline: ${escapeHtml(formatDate(o.deadline))}</p>
      <div class="card-actions">
        <a class="btn btn-primary" href="detail.html?id=${o.id}">View details</a>
        <button class="btn btn-ghost save-btn" type="button" data-id="${o.id}" aria-pressed="${isSaved}">${saveLabel(isSaved)}</button>
      </div>
    </article>`;
}

function render() {
  const text = state.text.trim().toLowerCase();
  const saved = getSaved();

  const results = opportunities.filter(o => {
    const info = deadlineInfo(o.deadline);
    if (!state.showExpired && info.expired) return false;
    if (state.savedOnly && !saved.includes(o.id)) return false;
    if (state.category && o.category !== state.category) return false;
    if (state.grade && !o.grades.includes(Number(state.grade))) return false;
    if (state.mode && o.mode !== state.mode) return false;
    if (text && !(o.title + " " + o.organizer + " " + o.category).toLowerCase().includes(text)) return false;
    return true;
  });

  results.sort((a, b) => {
    if (state.sort === "title") return a.title.localeCompare(b.title);
    const A = deadlineInfo(a.deadline);
    const B = deadlineInfo(b.deadline);
    if (A.expired !== B.expired) return A.expired ? 1 : -1;
    return a.deadline.localeCompare(b.deadline);
  });

  els.count.textContent = results.length + (results.length === 1 ? " opportunity found" : " opportunities found");

  if (results.length === 0) {
    const message = state.savedOnly
      ? "You haven't saved any opportunities yet. Use the Save button on a card."
      : "No opportunities match your search. Try removing a filter.";
    els.list.innerHTML = `
      <div class="empty">
        <h2>Nothing here yet</h2>
        <p>${message}</p>
        <button class="btn btn-primary" type="button" id="empty-clear">Clear filters</button>
      </div>`;
    document.getElementById("empty-clear").addEventListener("click", clearFilters);
    return;
  }

  els.list.innerHTML = results.map(o => cardHtml(o, saved)).join("");
}

function clearFilters() {
  state.text = "";
  state.category = "";
  state.grade = "";
  state.mode = "";
  state.sort = "deadline";
  state.showExpired = false;
  state.savedOnly = false;
  els.search.value = "";
  els.grade.value = "";
  els.mode.value = "";
  els.sort.value = "deadline";
  els.showExpired.checked = false;
  els.savedOnly.checked = false;
  updateChips();
  render();
}

// Events
els.search.addEventListener("input", () => { state.text = els.search.value; render(); });
els.grade.addEventListener("change", () => { state.grade = els.grade.value; render(); });
els.mode.addEventListener("change", () => { state.mode = els.mode.value; render(); });
els.sort.addEventListener("change", () => { state.sort = els.sort.value; render(); });
els.showExpired.addEventListener("change", () => { state.showExpired = els.showExpired.checked; render(); });
els.savedOnly.addEventListener("change", () => { state.savedOnly = els.savedOnly.checked; render(); });
els.clear.addEventListener("click", clearFilters);

els.chips.addEventListener("click", e => {
  const btn = e.target.closest(".chip");
  if (!btn) return;
  state.category = btn.dataset.category;
  updateChips();
  render();
});

els.list.addEventListener("click", e => {
  const btn = e.target.closest(".save-btn");
  if (!btn) return;
  const nowSaved = toggleSaved(Number(btn.dataset.id));
  if (state.savedOnly) {
    render(); // the list changes, so redraw it
  } else {
    btn.textContent = saveLabel(nowSaved);
    btn.setAttribute("aria-pressed", nowSaved ? "true" : "false");
  }
});

setupControls();
updateChips();
render();
