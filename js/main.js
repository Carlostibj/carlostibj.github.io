/* ==========================================================================
   MAIN.JS — small helper script shared by every page.
   You should NOT need to edit this file when adding projects or certs.
   It does 4 things:
     1. Opens/closes the mobile menu (hamburger button)
     2. Highlights the current page's link in the nav bar
     3. Types the text in the home-page terminal
     4. Fades cards in as you scroll + fills in the footer year
   ========================================================================== */

/* ---------- 1. MOBILE MENU TOGGLE ---------- */
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
}

/* ---------- 2. HIGHLIGHT THE CURRENT PAGE IN THE NAV ---------- */
/* Compares each nav link's href against the current file name and adds
   the .active class (teal color) to the one that matches.               */
const currentPage = window.location.pathname.split("/").pop() || "index.html";

document.querySelectorAll(".nav-links a").forEach((link) => {
  const linkPage = link.getAttribute("href");
  // Any projects-*.html page should still highlight "Projects" in the nav
  if (
    linkPage === currentPage ||
    (linkPage === "projects.html" && currentPage.startsWith("projects"))
  ) {
    link.classList.add("active");
  }
});

/* ---------- 3. TERMINAL TYPING EFFECT (home page only) ---------- */
/* Types each line into the element with id="typedLines".
   EDIT-ME: change the text lines below to whatever you want the
   terminal to "type" on your home page.                                 */
const typedTarget = document.getElementById("typedLines");

if (typedTarget) {
  const lines = [
    { cmd: "whoami", out: "cybersecurity student · blue team curious · homelab addict" },
    { cmd: "cat mission.txt", out: "Learn by building. Break things in the lab, fix them, document everything." },
    { cmd: "ls ./currently", out: "studying_security+   building_home_SOC   job_searching" },
  ];

  const typeSpeed = 45; // milliseconds per character (lower = faster)

  function typeLine(i) {
    if (i >= lines.length) {
      // all lines done: show a final blinking prompt
      typedTarget.insertAdjacentHTML(
        "beforeend",
        '<p><span class="prompt">$</span> <span class="cursor"></span></p>'
      );
      return;
    }

    const p = document.createElement("p");
    p.innerHTML = '<span class="prompt">$</span> <span class="cmd"></span>';
    typedTarget.appendChild(p);
    const cmdSpan = p.querySelector(".cmd");
    const text = lines[i].cmd;
    let c = 0;

    const interval = setInterval(() => {
      cmdSpan.textContent += text[c];
      c++;
      if (c >= text.length) {
        clearInterval(interval);
        // print the "output" of the command, then move to the next line
        const out = document.createElement("span");
        out.className = "output";
        out.textContent = lines[i].out;
        typedTarget.appendChild(out);
        setTimeout(() => typeLine(i + 1), 350);
      }
    }, typeSpeed);
  }

  // Respect users who turn off animations in their OS settings
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion) {
    lines.forEach((l) => {
      typedTarget.insertAdjacentHTML(
        "beforeend",
        `<p><span class="prompt">$</span> <span class="cmd">${l.cmd}</span></p><span class="output">${l.out}</span>`
      );
    });
  } else {
    typeLine(0);
  }
}

/* ---------- 4. SCROLL-REVEAL + FOOTER YEAR ---------- */
/* Every card automatically fades up the first time it scrolls into view.
   New cards you add get this behavior with zero extra work.             */
const revealables = document.querySelectorAll(
  ".card, .domain-card, .project-card, .timeline-item"
);

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealables.forEach((el) => {
    el.classList.add("reveal");
    observer.observe(el);
  });
}

/* Fill in the © year in the footer automatically */
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
