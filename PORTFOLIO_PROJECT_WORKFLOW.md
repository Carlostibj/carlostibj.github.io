# Portfolio Project Publishing Workflow

This repository is intentionally structured so future cybersecurity projects can be added without redesigning the site.

## Portfolio architecture

- `index.html`: recruiter-facing homepage. Shows a small set of featured projects and links to the full project hub.
- `projects.html`: project hub. Shows the portfolio roadmap plus the project catalog.
- `js/portfolio-projects.js`: single source of truth for project metadata used by the homepage and project hub.
- `project-*.html`: individual project case-study pages.
- `assets/*.pdf`: downloadable case-study PDFs.
- `assets/style.css`: shared visual system.

## Standard project workflow

Build → troubleshoot → validate → capture screenshots → finish technical work → select strongest evidence → create case study → publish.

Do not interrupt technical work to fully document every step. Capture screenshots while working, then choose only the strongest evidence after the project is complete.

## Documentation standard

Case studies should:
- Be technically accurate and evidence-based.
- Use natural first-person language such as "I built", "I tested", "I configured", and "I fixed".
- Avoid inflated claims, fabricated validation, corporate filler, and AI-sounding phrasing.
- Explain objective, architecture, implementation, validation, troubleshooting, lessons learned, and outcome.
- Use only screenshots that materially prove the work.
- Match the established INFRA-BASE-v1 / SOC01 visual style.

## Adding a completed project

1. Create the project case-study page as `project-<id-or-slug>.html`.
2. Add the final PDF to `assets/`.
3. Add or update the project's object in `js/portfolio-projects.js`.
4. Set:
   - `published: true`
   - `href` to the project page
   - `pdf` to the PDF path
   - `featured: true` only when the project deserves homepage visibility.
5. Verify homepage, project hub, project page, PDF link, mobile layout, and navigation.
6. Keep the homepage curated. Do not show every future project there.

## Project metadata template

```js
{
  id: "ID01",
  number: "04",
  title: "Active Directory Identity Abuse & Privilege Monitoring",
  domain: "Identity Security",
  domainKey: "identity",
  status: "Completed",
  description: "Short recruiter-friendly description.",
  skills: ["Wazuh", "Active Directory", "Windows Security"],
  href: "project-id01.html",
  pdf: "assets/id01.pdf",
  featured: true,
  published: true
}
```

## Domain strategy

The project hub is designed around a growing capability map:

Foundation & Infrastructure → SOC / Telemetry → Detection → Identity → AI/ML Security → Cloud → Threat Hunting → Vulnerability Management → Incident Response / DFIR → Security Automation → Malware Analysis → Purple / Red Team.

Networking coursework can be added under Networking as curated portfolio entries. System administration should remain primarily represented through infrastructure projects until there are enough dedicated system-administration projects to justify a separate project family.

## Recruiter-facing rule

The homepage should remain fast to scan. Keep roughly 3–5 strongest/most relevant projects featured. The full project catalog belongs on the Projects page.
