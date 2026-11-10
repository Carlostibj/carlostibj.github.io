# Publishing a new project

Publishing takes two files plus your assets. The homepage, the Projects page, the filters, the lab pipeline, the homepage totals, and the previous/next links all update themselves.

## Checklist

1. **Assets.** Put screenshots in `assets/<id>/` (for example `assets/det02/`) and the PDF at `assets/<id>.pdf`.
2. **Case study page.** Copy `templates/project-template.html` to the site root as `project-<id>.html`. Replace every `[BRACKETED]` value and delete sections you don't need.
3. **Catalog entry.** Open `js/portfolio-projects.js`:
   - Add one object to `PORTFOLIO_PROJECTS` (copy the example below).
   - Delete the same project from `PORTFOLIO_UPCOMING`. The next item there automatically becomes "now building" on the homepage.
4. **Preview, then push.** Open `index.html` and your new page locally, check phone width, then commit.

## Catalog entry

```js
{
  id: "DET02",
  title: "Suspicious PowerShell Detection & Investigation",
  domain: "detection",            // foundation | soc | detection | identity | ai | networking | supporting
  stage: "detect",                // build | monitor | detect | analyze | respond
  summary: "1–2 sentences: what you built and why it matters.",
  proof: "3 custom rules · 6 tests · 2 negative controls",   // hard numbers only
  skills: ["Wazuh", "PowerShell", "Script Block Logging", "Sysmon"],
  href: "project-det02.html",
  pdf: "assets/det02.pdf",
  thumb: "assets/det02/<best-screenshot>.png",  // top-left of the image is what shows
  featured: 0,                    // 0 = Projects page only; 1 = homepage spotlight; 2+ = homepage order
  rules: 3,                       // optional: adds to the "custom Wazuh rules" total
  published: true
}
```

Featuring tip: keep 5 projects on the homepage. When a new one deserves the spotlight, give it `featured: 1` and renumber the others.

## Site-wide settings

`js/site.js` holds your name, email, GitHub, LinkedIn, résumé path, and navigation. Fill in `linkedin` and `resume` and the links appear everywhere; leave them `""` and they stay hidden.

## Writing standard

- First person, specific, evidence-based: "I built", "I tested", "I fixed".
- Every number on the page must be checkable in the PDF.
- Show the quiet cases (negative tests) as carefully as the alert.
- State the coverage boundary: what the project does not prove.
- Use only screenshots that prove something, with a caption that says what.

## File map

| File | Purpose |
|---|---|
| `index.html` | Homepage |
| `projects.html` | All projects with filters and roadmap |
| `about.html` | Background, education, certifications |
| `project-*.html` | Case studies |
| `js/portfolio-projects.js` | Project catalog (edit this to publish) |
| `js/site.js` | Header, footer, contact links |
| `assets/style.css` | All styling |
| `templates/project-template.html` | Starting point for new case studies |
| `experience.html`, `certifications.html` | Redirects to `about.html` for old links |
