# My Cybersecurity Portfolio

A clean, multi-page portfolio for cybersecurity / IT / sysadmin work, built with
plain HTML and CSS (no frameworks, nothing to install) and hosted free on GitHub
Pages. Projects are organized by domain, and each project links out to its full
write-up in Notion.

> **New to this?** Read this file top to bottom once. After that, 90% of what you'll
> ever do is "add a project," which is Section 4 and takes about two minutes.

---

## 1. What each file is

```
portfolio/
├── index.html                    ← Home page (hero + terminal + skills + contact)
├── certifications.html           ← Certifications & Education
├── experience.html               ← Work experience & programs
├── projects.html                 ← Projects HUB (the colored domain cards)
│
├── projects-cybersecurity.html   ← Domain page: Red Team / Blue Team / CTF
├── projects-homelab.html         ← Domain page: Builds / Configs / Troubleshooting
├── projects-automation.html      ← Domain page: Scripts & Tools
│
├── css/
│   └── styles.css                ← ALL the styling. Change colors/fonts here.
├── js/
│   └── main.js                   ← Menu, terminal typing, scroll animations.
└── assets/
    └── (put resume.pdf and any images here)
```

**The golden rule:** to *add content* (a project, a cert, a job) you edit an
**.html** file. You almost never touch the CSS or JS. Every spot you'd want to edit
is marked with a comment like `EDIT-ME` or `PASTE ... HERE`, and every repeating
block has a ready-to-copy template between `COPY START` and `COPY END`.

---

## 2. First-time setup (do this once)

Before anything goes live, do a find-and-replace for the placeholder text. Open each
`.html` file in a text editor (VS Code is free and great) and replace:

| Find this placeholder      | Replace with...                                  |
|----------------------------|--------------------------------------------------|
| `Your Name`                | your actual name                                 |
| `yourname` (in the logo)   | a short handle, e.g. your first name             |
| `your.email@example.com`   | your email address                               |
| `your-linkedin`            | your LinkedIn username                           |
| `your-github`              | your GitHub username                             |

Then:
1. Drop your resume into the `assets/` folder and name it exactly `resume.pdf`.
2. Replace the example projects, certs and jobs with your real ones (Sections 4–6).

Tip: in VS Code, `Ctrl+Shift+H` opens find-and-replace **across all files at once**,
so you can fix `Your Name` everywhere in one shot.

---

## 3. Putting it online with GitHub Pages (free)

1. Create a new repository on GitHub. If you name it exactly
   `your-username.github.io`, your site will live at
   `https://your-username.github.io`. Any other name works too — it just lives at
   `https://your-username.github.io/repo-name`.
2. Upload **all** the files and folders (keep the folder structure exactly as-is —
   `css/`, `js/` and `assets/` must stay as folders). The upload page has an
   "upload an existing file" link where you can drag the whole folder in.
3. In the repo, go to **Settings → Pages**.
4. Under "Build and deployment", set **Source** to *Deploy from a branch*, pick the
   `main` branch and the `/ (root)` folder, and click **Save**.
5. Wait 1–2 minutes, then refresh. Your live URL appears at the top of that same
   Pages screen.

That's it. Every time you push a change to the repo, the live site updates
automatically within a minute or two.

---

## 4. ⭐ Adding a new project (the thing you'll do most)

This is the whole workflow, and it's the same on every domain page.

**Step 1 — Write it up in Notion.**
Document the project in Notion like you already do. When it's ready to show:
- Click **Share** (top-right of the Notion page).
- Turn on **Share to web / Publish**.
- Copy the public link.

That public link is what visitors will open. (Notion pages you haven't published
stay private, so only pages you deliberately share are visible.)

**Step 2 — Pick the right page and section.**
- Cybersecurity project? → open `projects-cybersecurity.html`, find the Red Team,
  Blue Team, or CTF subsection.
- Homelab project? → open `projects-homelab.html` (Builds / Configs / Troubleshooting).
- A script or tool? → open `projects-automation.html`.

**Step 3 — Copy the template.**
Near the top of each subsection there's a project-card template, or you can just
copy any existing `<article class="project-card"> ... </article>` block (from its
opening tag all the way to its closing `</article>` tag).

**Step 4 — Paste and edit.**
Paste it right after the last card, where the comment says
`PASTE NEW ... PROJECTS HERE`, then edit four things:
- the **title** inside `<h3>`
- the **description** inside `<p class="project-desc">`
- the **tags** (each `<span class="tag">Tool</span>` — add or remove as needed)
- the **links**: paste your Notion URL into the `href="..."` of the "Notion
  write-up" button, and a GitHub repo URL into the GitHub button (delete a link
  line if you don't need it)

**Step 5 — Set the status badge.** Change the badge to match reality:
```html
<span class="status status-done">Completed</span>       <!-- teal  -->
<span class="status status-progress">In Progress</span>  <!-- amber -->
<span class="status status-planned">Planned</span>       <!-- gray  -->
```

Save, push to GitHub, done. The card automatically gets the hover effect and the
fade-in animation — you don't add those yourself.

---

## 5. Adding a certification or education entry

Open `certifications.html`. There's a labeled template between `COPY START` /
`COPY END` for certs, and another for schools. Copy it, paste it where the comment
says `PASTE NEW ... HERE`, edit the text, choose a status badge, and paste your
verification link (Credly, CompTIA, Coursera, etc.). No link yet? Just delete the
`<a class="cert-link">` line.

---

## 6. Adding a job or program

Open `experience.html`. Work history uses a **timeline** — copy the timeline-item
template, paste it at the **top** of the list (newest first), and fill in the dates,
title, company and bullet points. Programs (CTFs, clubs, bootcamps) use the same
card style as projects.

---

## 7. Adding a whole new project domain

Say you start doing Cloud Security and want its own page:

1. **Duplicate** `projects-homelab.html` and rename the copy, e.g.
   `projects-cloud.html`.
2. Open the new file and edit the page header and the project cards inside it.
3. Open `projects.html` and add a domain card that links to your new page. There's a
   `COPY START` / `COPY END` template for exactly this. Point its `href` at
   `projects-cloud.html` and give it a color class:
   `dc-teal`, `dc-red`, `dc-blue`, `dc-violet`, or `dc-amber`.

---

## 8. Changing colors or fonts

Everything visual is controlled from the top of `css/styles.css`, in the section
labeled **DESIGN TOKENS**. For example, to change the main accent color, edit this
one line and it updates everywhere:

```css
--teal: #45D6C0;   /* ← change this hex code */
```

The accent colors are also used as a coding system: teal = general/offense-neutral,
red = red team, blue = blue team, violet = homelab, amber = automation. You can
recolor any of them, or leave them as-is.

Fonts are loaded from Google Fonts in the `<head>` of each HTML file and set in the
same DESIGN TOKENS block (`--font-display`, `--font-body`, `--font-mono`).

---

## 9. Editing the animated terminal on the home page

The lines that "type" in the home-page terminal live in `js/main.js`, near the top,
in a list called `lines`. Each entry has a `cmd` (the command shown after the `$`)
and an `out` (the fake output printed below it). Edit the text to say whatever you
want — no other changes needed.

---

## 10. Previewing changes before you publish

You don't need a server. Just **double-click any `.html` file** and it opens in your
browser exactly as it'll look live. Make an edit, save, refresh the browser. When
you're happy, push to GitHub.

---

### Quick reference: the classes you'll actually use

| I want to...                    | Use this                                             |
|---------------------------------|------------------------------------------------------|
| Mark something completed        | `<span class="status status-done">Completed</span>`  |
| Mark something in progress      | `<span class="status status-progress">In Progress</span>` |
| Mark something planned          | `<span class="status status-planned">Planned</span>` |
| Add a tool/skill chip           | `<span class="tag">Wireshark</span>`                 |
| Add a project                   | copy an `<article class="project-card">` block       |
| Add a domain card               | copy an `<a class="domain-card dc-COLOR">` block     |

Happy building. Break things in the lab, fix them, document everything. 🛡️
