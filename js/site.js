/* ==========================================================================
   site.js — shared header, footer, and small page behaviors.
   Edit SITE below to change your name, contact links, or navigation once
   for every page. Empty links ("") are hidden automatically.
   ========================================================================== */
window.SITE = {
  name: "Carlos Tiburcio",
  initials: "CT",
  email: "carlomtj15@gmail.com",
  github: "https://github.com/Carlostibj",
  linkedin: "",          // e.g. "https://www.linkedin.com/in/your-handle"
  resume: "",            // e.g. "assets/carlos-tiburcio-resume.pdf"
  nav: [
    { label: "Projects", href: "projects.html" },
    { label: "About", href: "about.html" },
    { label: "Contact", href: "index.html#contact" }
  ]
};

(function () {
  const S = window.SITE;
  const esc = v => String(v ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" }[c]));
  const page = location.pathname.split("/").pop() || "index.html";

  /* ---------- Header ---------- */
  document.querySelectorAll("[data-site-header]").forEach(el => {
    el.classList.add("site-header");
    const links = S.nav.map(n => {
      const active = n.href === page || (n.href === "projects.html" && page.startsWith("project"));
      return `<a href="${esc(n.href)}"${active ? ' aria-current="page"' : ""}>${esc(n.label)}</a>`;
    }).join("");
    const cta = S.resume
      ? `<a class="nav-cta" href="${esc(S.resume)}">Résumé</a>`
      : `<a class="nav-cta" href="mailto:${esc(S.email)}">Email me</a>`;
    el.innerHTML = `<div class="bar">
      <a class="brand" href="index.html"><span class="brand-mark">${esc(S.initials)}</span>${esc(S.name)}</a>
      <button class="nav-toggle" aria-expanded="false" aria-controls="site-nav">Menu</button>
      <nav class="nav" id="site-nav" aria-label="Main navigation">${links}${cta}</nav>
    </div>`;
    const btn = el.querySelector(".nav-toggle"), nav = el.querySelector(".nav");
    btn.addEventListener("click", () => btn.setAttribute("aria-expanded", String(nav.classList.toggle("open"))));
    nav.addEventListener("click", e => { if (e.target.closest("a")) { nav.classList.remove("open"); btn.setAttribute("aria-expanded", "false"); } });
  });

  /* ---------- Footer ---------- */
  document.querySelectorAll("[data-site-footer]").forEach(el => {
    el.classList.add("site-footer");
    const links = [
      `<a href="mailto:${esc(S.email)}">${esc(S.email)}</a>`,
      S.github && `<a href="${esc(S.github)}" rel="noopener">GitHub</a>`,
      S.linkedin && `<a href="${esc(S.linkedin)}" rel="noopener">LinkedIn</a>`,
      S.resume && `<a href="${esc(S.resume)}">Résumé</a>`
    ].filter(Boolean).join("");
    el.innerHTML = `<div class="bar"><span>© ${new Date().getFullYear()} ${esc(S.name)} · Cybersecurity &amp; Infrastructure</span><nav aria-label="Footer">${links}</nav></div>`;
  });

  /* ---------- Contact helpers ---------- */
  document.querySelectorAll("[data-email]").forEach(el => {
    if (el.tagName === "A") el.href = `mailto:${S.email}`;
    if (!el.textContent.trim()) el.textContent = S.email;
  });
  document.querySelectorAll("[data-link]").forEach(el => {
    const url = S[el.dataset.link];
    if (url) el.href = url; else el.remove();
  });
  document.querySelectorAll("[data-copy-email]").forEach(btn => {
    btn.addEventListener("click", async () => {
      try { await navigator.clipboard.writeText(S.email); btn.textContent = "Copied ✓"; }
      catch { btn.textContent = S.email; }
      setTimeout(() => (btn.textContent = "Copy address"), 2200);
    });
  });

  /* ---------- Case-study pages: active section + previous / next ---------- */
  const toc = document.querySelector(".toc, .case-toc");
  if (toc && "IntersectionObserver" in window) {
    const links = [...toc.querySelectorAll('a[href^="#"]')];
    const obs = new IntersectionObserver(entries => {
      entries.forEach(en => {
        if (!en.isIntersecting) return;
        links.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + en.target.id));
      });
    }, { rootMargin: "-30% 0px -60% 0px" });
    links.forEach(a => { const t = document.querySelector(a.getAttribute("href")); if (t) obs.observe(t); });
  }

  const list = (window.PORTFOLIO_PROJECTS || []).filter(p => p.published);
  const i = list.findIndex(p => p.href === page);
  const main = document.querySelector("main");
  if (i >= 0 && main && !document.querySelector(".case-nav")) {
    const prev = list[i - 1], next = list[i + 1];
    const link = (p, cls, label) => p ? `<a class="${cls}" href="${esc(p.href)}"><small>${label} · ${esc(p.id)}</small>${esc(p.title)}</a>` : "";
    main.insertAdjacentHTML("beforeend", `<nav class="case-nav" aria-label="More case studies">${link(prev, "prev-link", "← Previous")}${link(next, "next-link", "Next →")}</nav>`);
  }

})();
