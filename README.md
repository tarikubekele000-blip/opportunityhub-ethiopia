# OpportunityHub Ethiopia

**A website that helps Ethiopian students in Grades 9–12 find scholarships, competitions, camps, and programs in one trusted place.**

- **Live website:** https://tarikubekele000-blip.github.io/opportunityhub-ethiopia/
- **Student:** Tariku Bekele (Grade 12)
- **School:** Negele Ifa Boru Special Secondary Boarding School
- **Advisor:** Befekadu Birhanu
- **Year:** 2026
- **Contact:** tarikubekele000@gmail.com

---

## 1. What is this project? (the short version)

OpportunityHub Ethiopia is a free website. A student opens it, searches for an opportunity such as a scholarship, a coding camp, or a summer program, and sees clearly **who can apply, what they get, when the deadline is, and where the official application page is**. The student can save opportunities and track their progress on each one.

If you only remember one sentence: **it puts verified opportunities, clear eligibility, and official links in one place, so students stop missing chances.**

---

## 2. The problem

Opportunities for high-school students exist, but they are hard to use because:

- **They are scattered.** Information is spread across Telegram channels, websites, Facebook pages, and school notices.
- **They are hard to trust.** Students often cannot tell whether a post is real, current, or a scam.
- **They are unclear.** Posts often skip the details that matter: who is eligible, which grade, what documents are needed, and the exact deadline.
- **They are easy to miss.** Deadlines pass before a student even finds out the opportunity exists.

Students with limited access to networks, counselors, or older mentors are the most likely to miss out. Strong students lose chances because of missing information, not because of missing ability.

---

## 3. The solution

One website where every opportunity is shown in the **same clear format**:

| Detail | Why it matters |
|---|---|
| Organizer | Shows who is offering it |
| Category | Scholarship, summer program, technology, course, and so on |
| Grades | Shows whether the student qualifies by grade |
| Format | In person, online, or both |
| Eligibility | Who can apply, in plain language |
| Benefits | What the student actually gets |
| Required materials | What to prepare before applying |
| Deadline | With a colored label, such as "65 days left" or "Expired" |
| Last checked | The date the information was verified |
| Official link | Sends the student to the organizer's own page to apply |

The site never takes applications and never asks for money. It only helps students find the right opportunity and go to the right place.

---

## 4. Who is it for?

- **Students in Grades 9–12** who want to find opportunities and prepare in time.
- **Teachers, counselors, and parents** who want one reliable page to share with students.

---

## 5. Features

- **Search** by title, organizer, or category.
- **Filters** by category, grade, and format.
- **Sorting** by nearest deadline or by title.
- **Deadline labels** that turn orange when a deadline is close and red when it has passed.
- **Honest notes.** If an organizer has not announced a date yet, the listing says so. It never guesses.
- **Detail page** for each opportunity, with eligibility, benefits, required materials, and the official link.
- **Save button.** Students keep a list of opportunities they like.
- **Application tracker.** Students mark each opportunity as Interested, Preparing, Submitted, or Closed.
- **Similar opportunities** shown on each detail page.
- **Copy link button** to share an opportunity with a friend.
- **Safety page** with tips for avoiding scams, and an email address for reporting corrections.
- **Light and dark modes**, and a layout that works on phones.
- **Accessibility.** Skip link, labeled fields, visible keyboard focus, and screen-reader announcements for search results.

---

## 6. How a student uses it

1. Open the website and read the short introduction on the homepage.
2. Type a keyword in the search box, or click a category button such as **Scholarship**.
3. Narrow the list with the **Grade** and **Format** menus.
4. Click **View details** on an opportunity that looks interesting.
5. Read who can apply, what the benefits are, and what documents are needed.
6. Click **Save**, and set the tracker to **Interested** or **Preparing**.
7. When ready, click **Go to official page** and apply on the organizer's own website.
8. Come back later, find saved opportunities with the **Saved only** filter, and update the tracker to **Submitted**.

---

## 7. The opportunities included

Each one was checked on the organizer's own website on **26 October 2026**.

| # | Opportunity | Who it is for | Deadline |
|---|---|---|---|
| 1 | African Leadership Academy Diploma Program 2027 | Born on or after 1 September 2007 | 15 January 2027 (Regular Decision) |
| 2 | UWC Scholarship through UWC Ethiopia | Ethiopian citizens aged 16–19, Grades 10–11 | Not announced yet |
| 3 | Yale Young African Scholars 2027 | Grades 10–11, ages 14–18, African students | 20 January 2027 |
| 4 | AddisCoder 2027 | Ethiopian students, Grades 9–11 | 31 December 2026 |
| 5 | EducationUSA Scholars Program | Ethiopian students in Grade 11 | Not announced yet |
| 6 | 5 Million Ethiopian Coders | Free online courses; check eligibility on the portal | No deadline |

> **Important:** deadlines and rules change. Always confirm on the official page before applying. Each listing links to it.

---

## 8. How it was built

The site uses only three basic web technologies, with **no external libraries or backend**. This keeps it fast, free to host, and easy to understand.

| Part | Technology | What it does |
|---|---|---|
| Structure | **HTML** | The content and layout of each page |
| Design | **CSS** | Colors, spacing, phone layout, and light/dark themes |
| Behavior | **JavaScript** | Search, filters, sorting, saving, and the tracker |
| Data | **A JavaScript data file** | Holds all the verified opportunities |
| Storage | **Browser local storage** | Remembers saved items and tracker status on the student's own device |
| Hosting | **GitHub Pages** | Puts the website online for free |

### How the pieces fit together

```
Student's browser
      │ opens
      ▼
 index.html  ──loads──►  style.css      (how it looks)
      │                  common.js      (shared tools: dark mode, dates, saving)
      │                  data.js        (the list of opportunities)
      │                  app.js         (search, filters, and the cards)
      ▼
 Student clicks "View details"
      ▼
 detail.html ──loads──►  data.js + detail.js   (the full page for one opportunity)
      ▼
 Student clicks "Go to official page" ──► the organizer's website
```

### What each file does

| File | Purpose |
|---|---|
| `index.html` | The homepage: introduction, search, filters, and the list of opportunities |
| `detail.html` | The page that shows one opportunity in full |
| `about.html` | How listings are checked, safety tips, and the correction email |
| `project.html` | Project documentation: problem, objectives, technology, and sources |
| `style.css` | All the design, including dark mode and the phone layout |
| `data.js` | **The list of opportunities.** This is the file you edit to add or change one. |
| `common.js` | Shared helpers: theme switching, date labels, saving, and safe text handling |
| `app.js` | Homepage logic: builds the cards and handles search, filters, and sorting |
| `detail.js` | Detail page logic: shows one opportunity, plus the save button and tracker |

### Two design choices worth explaining

- **No accounts and no personal data.** Saved items stay on the student's device. This protects privacy and means there is nothing to hack or leak.
- **Safe display of text.** Every piece of data is cleaned before it is shown, and links must start with `http` or `https`. This stops broken or harmful content from running on the page.

---

## 9. How listings are verified

1. Open the **organizer's own website**, not a news or social media post.
2. Copy the deadline, eligibility, benefits, and required materials, and write them in plain language.
3. If a date has not been announced, write that clearly. **Never guess.**
4. Record the check date in `lastChecked`.
5. Link only to the official page.

---

## 10. How to update the website (no coding tools needed)

### Add or change an opportunity
1. Open `data.js` in the GitHub repository and click the **pencil icon**.
2. Copy one whole block from `{` to `},` and paste it below the last block.
3. Change the `id` to the next number, then change the other fields.
4. Use `deadline: ""` if the date is not announced, and explain in `deadlineNote`.
5. Click **Commit changes**. The site updates in about a minute.

### Mark an opportunity as expired
Nothing to do. The site compares each deadline with today's date and shows **Expired** automatically.

### Fix a mistake
Open the file, click the pencil icon, make the change, and commit.

---

## 11. Honest limits

- The site shows a **carefully checked selection**, not every opportunity in Ethiopia.
- It **cannot guarantee** that an organizer is legitimate, so it reminds students to check.
- Information can become outdated, so each listing shows its last-checked date and links to the official page.
- Saved items live in one browser on one device. They do not move between devices, because there are no accounts. This was a deliberate choice for privacy.
- The site is in English only.

---

## 12. Questions people may ask

**Why not just use Telegram?**
Telegram posts are scattered, unverified, and disappear in the scroll. This site keeps every opportunity in one format with a deadline label and an official link.

**How do you know the information is correct?**
Every detail is copied from the organizer's official page, dated, and linked. Anything uncertain is labeled instead of guessed.

**Why no login?**
Students should not need to hand over personal data just to browse. Without accounts, there is no database to protect, and the saved list stays private on their own device.

**What happens when a deadline passes?**
The card shows a red **Expired** label and is hidden by default. Students can show expired listings with a checkbox.

**How would you keep it up to date?**
By rechecking each official link before its deadline and updating `data.js`. Editing one file is simple, and GitHub keeps a history of every change.

**Why plain HTML, CSS, and JavaScript?**
It runs for free, loads fast on slow connections, needs nothing to install, and every part can be explained and checked.

More answers and a presentation script are in [`docs/presentation-guide.md`](docs/presentation-guide.md).

---

## 13. Acknowledgements

Thank you to my advisor, **Befekadu Birhanu**, for his guidance, and to **Negele Ifa Boru Special Secondary Boarding School** for its support. Thank you to the organizations whose official pages are linked on the site for publishing clear information that students can rely on.

---

## 14. Contact and corrections

Found a wrong deadline, a broken link, or a suspicious listing? Email **tarikubekele000@gmail.com** with the name of the opportunity and a link to the official page that shows the correct information.
