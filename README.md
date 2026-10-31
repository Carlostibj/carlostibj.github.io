# Carlos Tiburcio — Cybersecurity & Infrastructure Portfolio

Live site: https://carlostibj.github.io

A plain HTML/CSS/JavaScript portfolio hosted on GitHub Pages. The site is organized around completed technical capabilities and documented case studies from my cybersecurity homelab, coursework, and authorized training.

## Portfolio structure

| File | Purpose |
| --- | --- |
| `index.html` | Recruiter-facing homepage, featured projects, skills, and contact |
| `projects.html` | Capability roadmap, domain views, and supporting lab enhancements |
| `js/portfolio-projects.js` | Central project catalog and roadmap configuration |
| `experience.html` | Independent hands-on technical experience and training |
| `certifications.html` | Education, certifications, and current development |
| `project-*.html` | Individual web case studies |
| `assets/*.pdf` | Full technical case-study PDFs |
| `assets/<project>/` | Selected screenshot evidence |
| `assets/style.css` | Shared site styling |
| `PORTFOLIO_PROJECT_WORKFLOW.md` | Project publishing and evidence-selection workflow |

## Current published work

- **INFRA-BASE-v1** — Enterprise Cybersecurity Homelab Infrastructure
- **SOC01** — Enterprise Security Monitoring & Telemetry Platform
- **DET01** — Authentication Attack Detection & Investigation
- **ID01** — Active Directory Identity Abuse & Privilege Monitoring
- **NET01** — Segmented Office Network with Cisco Switching & Routing (Networking)
- **REMOTE01** — Secure Proxmox Remote Access with Tailscale (supporting lab enhancement)

## Project publishing workflow

Build and troubleshoot the project first. Capture evidence during the work, validate the final behavior, then select the strongest screenshots and publish the case study at the end.

For a new completed project:

1. Create the web case study from the existing project-page pattern.
2. Upload the full PDF and selected screenshots under `assets/`.
3. Add the project once to `js/portfolio-projects.js`.
4. Mark the relevant roadmap domain visible only when it has completed, documented work.
5. Feature only the strongest projects on the homepage.
6. Check local links, PDF links, screenshots, mobile layout, and GitHub Pages deployment.

The website keeps each case study concise; the PDF carries the full technical evidence package.

## Accuracy rules

- Lab work is presented as independent simulated experience, not employment or client work.
- Only tests actually performed are described as validated.
- Negative tests and limitations are documented when they materially affect the result.
- Supporting lab improvements stay separate from the main security-domain roadmap.
- Empty future domains remain hidden until there is completed work to publish.

## Contact

Public contact: **carlomtj15@gmail.com**

The visible email address works with any mail provider. Gmail compose links are provided as a convenience and do not send messages automatically.

## Networking track

`projects.html?domain=networking#project-catalog` is the dedicated Networking catalog. NET01 is the first published entry. Its PDF is `assets/net01.pdf`; its selected screenshots, exact logical diagram, and reconstructed configuration reference are in `assets/net01/`. Future NET projects should reuse this domain.
