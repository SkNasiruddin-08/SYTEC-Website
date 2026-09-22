/*
=========================================================
SYTEC EDITABLE DATA
=========================================================
BEGINNER NOTE:
Change the values in this section when you want to update
centre information or course information.

The website currently uses local JavaScript data only.
The AI chat interface below is a DEMO UI and does not call
an AI API. Never put a private API key in this file.
=========================================================
*/

const SYTEC_DATA = {
  centre: {
    name: "Sahaganj Youth Technical Education Centre",
    shortName: "SYTEC",
    address: "Keota Tyre Bagan, Sahaganj, Hooghly, 712104",
    phones: ["8777495240", "7044518410"],
    email: "sahaganjytec2026@gmail.com",
    openingHours: "8:00 AM – 8:00 PM"
  },

  courses: [
    { name:"ADCA", description:"Advanced computer applications and practical digital skills.", duration:"Information will be updated soon.", eligibility:"Information will be updated soon.", syllabus:"Information will be updated soon.", practical:"Information will be updated soon.", certificate:"Information will be updated soon.", fees:"Information will be updated soon." },
    { name:"PGDCA", description:"Postgraduate-level computer application learning pathway.", duration:"Information will be updated soon.", eligibility:"Information will be updated soon.", syllabus:"Information will be updated soon.", practical:"Information will be updated soon.", certificate:"Information will be updated soon.", fees:"Information will be updated soon." },
    { name:"FA (Tally)", description:"Computerised accounting and Tally-focused learning.", duration:"Information will be updated soon.", eligibility:"Information will be updated soon.", syllabus:"Information will be updated soon.", practical:"Information will be updated soon.", certificate:"Information will be updated soon.", fees:"Information will be updated soon." },
    { name:"DDTP", description:"Desktop publishing and computer-based creative skills.", duration:"Information will be updated soon.", eligibility:"Information will be updated soon.", syllabus:"Information will be updated soon.", practical:"Information will be updated soon.", certificate:"Information will be updated soon.", fees:"Information will be updated soon." },
    { name:"DIPP", description:"Professional computer application learning pathway.", duration:"Information will be updated soon.", eligibility:"Information will be updated soon.", syllabus:"Information will be updated soon.", practical:"Information will be updated soon.", certificate:"Information will be updated soon.", fees:"Information will be updated soon." },
    { name:"DIA+", description:"Digital application and computer skills learning pathway.", duration:"Information will be updated soon.", eligibility:"Information will be updated soon.", syllabus:"Information will be updated soon.", practical:"Information will be updated soon.", certificate:"Information will be updated soon.", fees:"Information will be updated soon." },
    { name:"Java", description:"Programming fundamentals and Java development learning.", duration:"Information will be updated soon.", eligibility:"Information will be updated soon.", syllabus:"Information will be updated soon.", practical:"Information will be updated soon.", certificate:"Information will be updated soon.", fees:"Information will be updated soon." },
    { name:"Python", description:"Python programming fundamentals and practical coding skills.", duration:"Information will be updated soon.", eligibility:"Information will be updated soon.", syllabus:"Information will be updated soon.", practical:"Information will be updated soon.", certificate:"Information will be updated soon.", fees:"Information will be updated soon." },
    { name:"MySQL", description:"Database fundamentals and MySQL-based data skills.", duration:"Information will be updated soon.", eligibility:"Information will be updated soon.", syllabus:"Information will be updated soon.", practical:"Information will be updated soon.", certificate:"Information will be updated soon.", fees:"Information will be updated soon." },
    { name:"HTML", description:"Web page structure and foundational web development skills.", duration:"Information will be updated soon.", eligibility:"Information will be updated soon.", syllabus:"Information will be updated soon.", practical:"Information will be updated soon.", certificate:"Information will be updated soon.", fees:"Information will be updated soon." },
    { name:"C", description:"Programming fundamentals using the C language.", duration:"Information will be updated soon.", eligibility:"Information will be updated soon.", syllabus:"Information will be updated soon.", practical:"Information will be updated soon.", certificate:"Information will be updated soon.", fees:"Information will be updated soon." },
    { name:"C++", description:"Object-oriented programming fundamentals using C++.", duration:"Information will be updated soon.", eligibility:"Information will be updated soon.", syllabus:"Information will be updated soon.", practical:"Information will be updated soon.", certificate:"Information will be updated soon.", fees:"Information will be updated soon." },
    { name:"Visual Basic", description:"Visual application development fundamentals.", duration:"Information will be updated soon.", eligibility:"Information will be updated soon.", syllabus:"Information will be updated soon.", practical:"Information will be updated soon.", certificate:"Information will be updated soon.", fees:"Information will be updated soon." },
    { name:"School Courses", description:"Computer learning options for school students.", duration:"Information will be updated soon.", eligibility:"Information will be updated soon.", syllabus:"Information will be updated soon.", practical:"Information will be updated soon.", certificate:"Information will be updated soon.", fees:"Information will be updated soon." }
  ],

  faqs: [
    { q:"Where is the centre located?", a:"Sahaganj Youth Technical Education Centre is located at Keota Tyre Bagan, Sahaganj, Hooghly, 712104." },
    { q:"What are the opening hours?", a:"The centre opening hours are 8:00 AM to 8:00 PM." },
    { q:"Which courses are currently available?", a:"The current course list is shown in the Courses section of this website, including ADCA, PGDCA, FA (Tally), DDTP, DIPP, DIA+, Java, Python, MySQL, HTML, C, C++, Visual Basic and School Courses." },
    { q:"Do you provide School Courses?", a:"Yes. School Courses are available. Please contact the centre for the latest details." },
    { q:"How can I know the current fees and course duration?", a:"Fees and course durations are not published yet in this website. Please contact the centre for the latest information." },
    { q:"How can I contact the centre?", a:"Call 8777495240 or 7044518410, or email sahaganjytec2026@gmail.com." }
  ]
};

const $ = (s, root=document) => root.querySelector(s);
const $$ = (s, root=document) => [...root.querySelectorAll(s)];

function renderCourses(list = SYTEC_DATA.courses) {
  const grid = $("#courseGrid");
  const count = $("#courseCount");
  if (!grid) return;
  count.textContent = `${list.length} course${list.length === 1 ? "" : "s"} available`;
  grid.innerHTML = list.map((course, i) => `
    <article class="course-card reveal visible">
      <div>
        <span class="course-number">${String(i+1).padStart(2,"0")} / COURSE</span>
        <h3>${escapeHTML(course.name)}</h3>
        <p>${escapeHTML(course.description)}</p>
      </div>
      <button class="view-course" data-course="${encodeURIComponent(course.name)}">View Details ↗</button>
    </article>
  `).join("");
  $$(".view-course", grid).forEach(btn => btn.addEventListener("click", () => openCourse(decodeURIComponent(btn.dataset.course))));
}

function openCourse(name) {
  const c = SYTEC_DATA.courses.find(x => x.name === name);
  if (!c) return;
  $("#modalCourseName").textContent = c.name;
  $("#modalCourseDescription").textContent = c.description;
  $("#modalDuration").textContent = c.duration;
  $("#modalEligibility").textContent = c.eligibility;
  $("#modalSyllabus").textContent = c.syllabus;
  $("#modalPractical").textContent = c.practical;
  $("#modalCertificate").textContent = c.certificate;
  $("#modalFees").textContent = c.fees;
  $("#courseModal").classList.add("open");
  $("#courseModal").setAttribute("aria-hidden","false");
}

function closeCourse() {
  $("#courseModal").classList.remove("open");
  $("#courseModal").setAttribute("aria-hidden","true");
}

function renderFaqs() {
  $("#faqList").innerHTML = SYTEC_DATA.faqs.map((f,i) => `
    <div class="faq-item">
      <button class="faq-q" aria-expanded="false"><span>${escapeHTML(f.q)}</span><span>+</span></button>
      <div class="faq-a">${escapeHTML(f.a)}</div>
    </div>
  `).join("");
  $$(".faq-q").forEach(q => q.addEventListener("click", () => {
    const item = q.parentElement;
    const open = item.classList.toggle("open");
    q.setAttribute("aria-expanded", open ? "true" : "false");
    q.lastElementChild.textContent = open ? "−" : "+";
  }));
}

function escapeHTML(str) {
  return String(str).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]));
}

const chatOverlay = $("#chatOverlay");
function openChat() { chatOverlay.classList.add("open"); chatOverlay.setAttribute("aria-hidden","false"); setTimeout(()=>$("#chatInput").focus(),100); }
function closeChat() { chatOverlay.classList.remove("open"); chatOverlay.setAttribute("aria-hidden","true"); }

function addMessage(text, type="bot") {
  const div = document.createElement("div");
  div.className = `message ${type}`;
  div.innerHTML = escapeHTML(text).replace(/\n/g,"<br>");
  $("#chatMessages").appendChild(div);
  $("#chatMessages").scrollTop = $("#chatMessages").scrollHeight;
}

function localAssistantReply(input) {
  const q = input.toLowerCase();
  if (/(course|courses|what do you teach|learn)/.test(q)) {
    return `SYTEC currently lists ${SYTEC_DATA.courses.map(c=>c.name).join(", ")}. Course durations and fees are marked for update where information has not yet been supplied.`;
  }
  if (/(admission|admit|enrol|enroll|join)/.test(q)) {
    return "For current admission details, available batches, fees and required documents, please contact the centre directly.";
  }
  if (/(fee|fees|price|cost|duration|month)/.test(q)) {
    return "Current fees and course durations have not been added to the website yet. Please contact SYTEC for the latest information.";
  }
  if (/(phone|call|contact|email|mail)/.test(q)) {
    return `You can call ${SYTEC_DATA.centre.phones[0]} or ${SYTEC_DATA.centre.phones[1]}, or email ${SYTEC_DATA.centre.email}.`;
  }
  if (/(where|location|address|map)/.test(q)) {
    return `The centre is at ${SYTEC_DATA.centre.address}. Use the Contact section's Maps button for navigation.`;
  }
  if (/(time|timing|open|hours)/.test(q)) {
    return `Opening hours are ${SYTEC_DATA.centre.openingHours}. Please contact the centre for current batch timings.`;
  }
  if (q.includes("python")) return "Python is currently listed as an available course. Open Courses → Python → View Details for the information currently published.";
  if (q.includes("school")) return "Yes. School Courses are available. Please contact the centre for current syllabus, duration and fee details.";
  return "I can help you explore SYTEC's courses, admission information, contact details, location and opening hours. For information not published on this website, please contact the centre.";
}

function quickAction(action) {
  const replies = {
    courses:"Our current courses include ADCA, PGDCA, FA (Tally), DDTP, DIPP, DIA+, Java, Python, MySQL, HTML, C, C++, Visual Basic and School Courses.",
    admission:"For current admission details, batches, fees and required documents, please contact the centre directly.",
    details:"Open the Courses section and select View Details on any course. Missing information is clearly marked as 'Information will be updated soon.'",
    contact:`Phone: ${SYTEC_DATA.centre.phones.join(" / ")}\nEmail: ${SYTEC_DATA.centre.email}`,
    location:`Address: ${SYTEC_DATA.centre.address}`,
    hours:`Opening hours: ${SYTEC_DATA.centre.openingHours}`
  };
  addMessage(replies[action] || "Please ask me about SYTEC.", "bot");
}

$("#courseSearch").addEventListener("input", e => {
  const term = e.target.value.trim().toLowerCase();
  renderCourses(SYTEC_DATA.courses.filter(c => c.name.toLowerCase().includes(term) || c.description.toLowerCase().includes(term)));
});
$("#modalClose").addEventListener("click", closeCourse);
$("#courseModal").addEventListener("click", e => { if (e.target === $("#courseModal")) closeCourse(); });
$("#aiFab").addEventListener("click", openChat);
$("#heroAi").addEventListener("click", openChat);
$("#navAi").addEventListener("click", openChat);
$("#chatClose").addEventListener("click", closeChat);
$("#chatOverlay").addEventListener("click", e => { if (e.target === chatOverlay) closeChat(); });
$("#quickActions").addEventListener("click", e => { if (e.target.dataset.action) quickAction(e.target.dataset.action); });
$("#chatForm").addEventListener("submit", e => {
  e.preventDefault();
  const input = $("#chatInput").value.trim();
  if (!input) return;
  addMessage(input,"user");
  $("#chatInput").value = "";
  setTimeout(() => addMessage(localAssistantReply(input),"bot"), 250);
});

$("#menuToggle").addEventListener("click", () => {
  const nav = $("#nav");
  const open = nav.classList.toggle("open");
  $("#menuToggle").setAttribute("aria-expanded", open ? "true" : "false");
});
$$(".nav a").forEach(a => a.addEventListener("click", () => $("#nav").classList.remove("open")));

window.addEventListener("scroll", () => {
  $("#siteHeader").classList.toggle("scrolled", window.scrollY > 20);
  const max = document.documentElement.scrollHeight - window.innerHeight;
  $("#scrollProgress").style.width = `${max ? (window.scrollY/max)*100 : 0}%`;
});

const observer = new IntersectionObserver(entries => entries.forEach(e => { if(e.isIntersecting) e.target.classList.add("visible"); }), {threshold:.12});
$$(".reveal").forEach(el => observer.observe(el));

$("#year").textContent = new Date().getFullYear();
renderCourses();
renderFaqs();
