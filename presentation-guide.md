# Presentation Guide: OpportunityHub Ethiopia

A speaking script of about 5 minutes, a demo plan, and answers to likely questions. Read it aloud a few times and use your own words.

---

## Part 1: The 5-minute script

### 1. Opening (30 seconds)
"Good morning. My name is Tariku Bekele, and my project is **OpportunityHub Ethiopia**. It is a website that helps students in Grades 9 to 12 find scholarships, competitions, camps, and programs in one trusted place."

### 2. The problem (45 seconds)
"Many students miss good opportunities. The information is scattered across Telegram channels, websites, and social media. Posts often leave out who can apply or when the deadline is, and students cannot always tell whether a post is real. By the time they find out, the deadline has passed. The students who suffer most are those with fewer mentors and less access to counselors."

### 3. The solution (45 seconds)
"My solution is one website where every opportunity follows the same format. It shows the organizer, who can apply, the benefits, the documents needed, the deadline, the date I last checked it, and a link to the official page. A student can search, filter, save opportunities, and track their progress."

### 4. Live demo (1 minute 30 seconds)
Follow the steps in Part 2 below.

### 5. How I built it (45 seconds)
"I built it with HTML, CSS, and JavaScript, and I host it for free on GitHub Pages. I chose these on purpose. They need no installation, they load fast on slow connections, and everything is easy to explain and maintain. All opportunities live in one data file, so updating the site means editing one file. There are no accounts, so no personal data is collected. Saved items stay on the student's own device."

### 5b. How I keep it trustworthy (30 seconds)
"I check every opportunity on the organizer's own website, not on social media. If a date has not been announced, the listing says so instead of guessing. Every listing shows the date I last checked it and links to the official page."

### 6. Closing (15 seconds)
"OpportunityHub Ethiopia reduces the information gap by putting verified opportunities, clear eligibility, and official sources in one organized place. Thank you. I am happy to take questions."

---

## Part 2: Demo plan

Practice this until you can do it without looking. Open the live site before you start, and have a backup screenshot in case the internet fails.

1. **Homepage.** Point at the hero and the three numbers. Say: "These update automatically from the data."
2. **Search.** Type `coding`. AddisCoder and 5 Million Ethiopian Coders appear. Clear the box.
3. **Category button.** Click **Scholarship**. Two listings appear.
4. **Grade filter.** Choose **Grade 9**. Only AddisCoder remains. Say: "Students only see what fits their grade." Click **Clear filters**.
5. **Open a listing.** Click **View details** on Yale Young African Scholars. Point out the deadline label, the facts boxes, the yellow note about time zones, and the last-checked date.
6. **Save and track.** Click **Save**, then set the tracker to **Preparing**.
7. **Official link.** Hover over **Go to official page** and say: "The student applies here, on the organizer's own site. My site never takes applications or money."
8. **Honest labels.** Open the UWC listing and show "No deadline yet" with the explanation. Say: "I would rather say 'not announced' than guess."
9. **Dark mode and phone.** Click the moon icon. If possible, show the site on your phone.
10. **Project page.** Show **The project** page briefly: objectives, technology, and sources.

---

## Part 3: Questions and answers

**Why did you choose this project?**
"I noticed that useful opportunities are easy to miss because the information is scattered and hard to verify. I wanted to solve a real problem that students around me face."

**Who is it for?**
"Students in Grades 9 to 12. Teachers, counselors, and parents can also use it as one reliable page to share."

**How do you know the information is correct?**
"I copy every detail from the organizer's official page, record the date I checked it, and link to that page. If something is uncertain, the listing says so."

**What if an opportunity changes after you checked it?**
"Each listing shows when it was last checked and tells students to confirm on the official page. To update, I edit one file and the site changes within a minute."

**How does the site know a deadline has passed?**
"JavaScript compares the deadline with today's date every time the page loads, and shows a red Expired label automatically."

**Why did you not use accounts or a database?**
"To protect privacy. With no accounts, I collect no personal data, so there is nothing to leak. Saved items stay in the student's own browser. The tradeoff is that they do not sync between devices, and I chose privacy over that convenience."

**Why plain HTML, CSS, and JavaScript instead of a framework?**
"It is free to host, loads quickly on slow connections, and needs nothing installed. It also means I understand and can explain every part of it."

**How does search and filtering work?**
"All opportunities are in a list in `data.js`. When the student types or picks a filter, the code goes through the list and keeps only the items that match, then redraws the cards."

**How are saved items remembered?**
"The browser has a small storage area called local storage. The site writes the saved item numbers there and reads them back when the page loads."

**Is it safe?**
"Yes. Every piece of text is cleaned before it is shown, links must begin with http or https, and the site collects no personal information. The About page also teaches students how to avoid scams."

**What are the limitations?**
"It shows a carefully checked selection, not every opportunity. It cannot guarantee that every organizer is legitimate. And saved items stay on one device. I am honest about these limits on the site itself."

**What did you learn?**
"I learned how to build a complete website, how to organize data so it is easy to update, and why accuracy matters more than the number of listings. I also learned to design for accessibility and for students on slow connections."

**How could someone else add an opportunity?**
"They open `data.js` on GitHub, copy one block, change the details, and save. It takes a few minutes and needs no special software."

**How much did it cost?**
"Nothing. GitHub Pages hosting is free, and the site uses no paid services."

---

## Part 4: Before the presentation

- [ ] Open every official link and confirm the deadlines have not changed. Update `lastChecked` in `data.js` if you change anything.
- [ ] Open the live site on your phone and on a computer.
- [ ] Practice the demo steps twice.
- [ ] Take screenshots of the homepage, a detail page, and the project page as a backup.
- [ ] Charge your laptop and phone, and check the internet connection.
- [ ] Be ready to say what you would improve with more time, and to be honest about the limitations.

---

## Part 5: Things to remember

- **Speak slowly.** Pause after each section.
- **Say "I built" and "I chose."** You made these decisions, so own them.
- **Admit what you don't know.** Say "I haven't tested that, but here is how I would approach it" instead of guessing.
- **Show, don't only tell.** A working demo is more convincing than slides.
